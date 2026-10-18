import ArrowIcon from './ArrowIcon';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import type { Lang, Project } from '../content';
import type { FlowLabel } from '../caseEditorial';
import { walkthroughNotes } from '../caseEditorial';
import WalkthroughDiagram, { walkthroughLayout } from './WalkthroughDiagram';

export default function SystemWalkthrough({project,lang,labels,paused,onPause}:{project:Project;lang:Lang;labels:FlowLabel[];paused:boolean;onPause:()=>void}) {
  const [active,setActive]=useState(0);
  const [horizontal,setHorizontal]=useState(()=>window.matchMedia('(max-width: 899px)').matches);
  const [reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible,setVisible]=useState(false);
  const [pageVisible,setPageVisible]=useState(()=>!document.hidden);
  const root=useRef<HTMLDivElement>(null);
  const steps=useRef<HTMLDivElement>(null);
  const focus=useRef<SVGGElement>(null);
  const count=project.workflow.length;
  const en=lang==='en';
  const tech=(index:number)=>{const value=labels[index]?.tech;return typeof value==='string'?value:value?.[lang]??project.stack[index]??'';};
  const positions=walkthroughLayout(project.id,count).points;
  const notes=walkthroughNotes[project.id]?.[active]??[];
  useEffect(()=>{
    const layout=window.matchMedia('(max-width: 899px)');
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateLayout=()=>setHorizontal(layout.matches);
    const updateMotion=()=>setReduced(motion.matches);
    const updateVisibility=()=>setPageVisible(!document.hidden);
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting));
    if(root.current)observer.observe(root.current);
    layout.addEventListener('change',updateLayout);motion.addEventListener('change',updateMotion);
    document.addEventListener('visibilitychange',updateVisibility);
    return()=>{observer.disconnect();layout.removeEventListener('change',updateLayout);motion.removeEventListener('change',updateMotion);document.removeEventListener('visibilitychange',updateVisibility);};
  },[]);
  useLayoutEffect(()=>{
    const point=positions[active];if(!point)return;
    const node=focus.current;
    const movement=node?gsap.to(node,{x:point.x,y:point.y,duration:reduced||paused?0:.75,ease:'power3.inOut',overwrite:true}):undefined;
    return()=>{movement?.kill();};
  },[active,paused,reduced]);
  useLayoutEffect(()=>{
    if(reduced)return;
    const context=gsap.context(()=>gsap.fromTo('.flow-description-inner',{y:16,clipPath:'inset(0 0 100% 0)'},{y:0,clipPath:'inset(0 0 0% 0)',duration:.55,ease:'power3.out',clearProps:'transform,clipPath'}),root);
    return()=>context.revert();
  },[active,lang,reduced]);
  useLayoutEffect(()=>{
    const strip=steps.current;const selected=strip?.children[active] as HTMLElement|undefined;
    if(horizontal&&strip&&selected)strip.scrollTo({left:selected.offsetLeft-(strip.clientWidth-selected.offsetWidth)/2,behavior:reduced?'instant':'smooth'});
  },[active,horizontal,lang,reduced]);
  return <div ref={root} className={`system-walkthrough ${paused||!visible||!pageVisible?'is-paused':''}`}>
    <div className="flow-steps" ref={steps} role="tablist" aria-label={en?'System walkthrough steps':'Étapes du fonctionnement'} aria-orientation={horizontal?'horizontal':'vertical'} onKeyDown={event=>{
      let next=active;
      if(['ArrowDown','ArrowRight'].includes(event.key))next=(active+1)%count;
      else if(['ArrowUp','ArrowLeft'].includes(event.key))next=(active+count-1)%count;
      else if(event.key==='Home')next=0;else if(event.key==='End')next=count-1;else return;
      event.preventDefault();setActive(next);document.getElementById(`system-step-${next}`)?.focus({preventScroll:true});
    }}>{project.workflow.map((_,i)=><button className={active===i?'is-active':''} key={i} role="tab" id={`system-step-${i}`} aria-controls="system-step-panel" aria-selected={active===i} tabIndex={active===i?0:-1} onClick={()=>setActive(i)}><span className="mono">0{i+1}</span><span><strong>{labels[i]?.title[lang]??`${en?'Step':'Étape'} ${i+1}`}</strong><small>{tech(i)}</small></span><span className="flow-step-arrow" aria-hidden="true"><ArrowIcon direction="up-right"/></span></button>)}</div>
    <div className="flow-scene">
      <div className="flow-scene-top mono"><span>{en?'FOLLOW THE SYSTEM':'SUIVRE LE SYSTÈME'}</span><span>{en?'CONCEPT WALKTHROUGH':'PARCOURS DE PRINCIPE'}</span><button className="dossier-motion-toggle" aria-pressed={paused} onClick={onPause} aria-label={paused?(en?'Resume diagram animations':'Reprendre les animations'):(en?'Pause diagram animations':'Mettre les animations en pause')}><svg viewBox="0 0 20 20" aria-hidden="true"><path d={paused?'m7 5 8 5-8 5Z':'M7 5v10M13 5v10'}/></svg></button></div>
      <WalkthroughDiagram id={project.id} active={active} lang={lang} count={count} labels={project.workflow.map((_,i)=>tech(i).split(' / ')[0]||`${en?'STEP':'ÉTAPE'} ${i+1}`)} focusRef={focus}/>
      <div className="flow-description" role="tabpanel" id="system-step-panel" aria-labelledby={`system-step-${active}`} tabIndex={0} aria-live="polite" aria-atomic="true"><span className="flow-current-number" aria-hidden="true">0{active+1}</span><div className="flow-description-inner" key={active}><h3>{labels[active]?.title[lang]??`${en?'Step':'Étape'} ${active+1}`}</h3><p>{project.workflow[active]?.[lang]}</p>{notes.length>0&&<ul className="flow-detail-points">{notes.map((note,i)=><li key={i}>{note[lang]}</li>)}</ul>}</div></div>
      <div className="flow-bottom"><span className="mono">0{active+1} / {String(count).padStart(2,'0')}</span><div className="flow-position" aria-hidden="true">{project.workflow.map((_,i)=><span key={i} className={i<=active?'is-complete':''}/>)}</div><button onClick={()=>setActive((active+1)%count)}>{active===count-1?(en?'Start again':'Recommencer'):(en?'Next step':'Étape suivante')}<span aria-hidden="true"><ArrowIcon direction="right"/></span></button></div>
    </div>
  </div>;
}
