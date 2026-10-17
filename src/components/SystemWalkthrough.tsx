import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import type { Lang, Project } from '../content';
import type { FlowLabel } from '../caseEditorial';

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
  const positions=project.workflow.map((_,i)=>({x:115+i*(460/Math.max(count-1,1)),y:i%2===0?138:106}));
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
    }}>{project.workflow.map((_,i)=><button className={active===i?'is-active':''} key={i} role="tab" id={`system-step-${i}`} aria-controls="system-step-panel" aria-selected={active===i} tabIndex={active===i?0:-1} onClick={()=>setActive(i)}><span className="mono">0{i+1}</span><span><strong>{labels[i]?.title[lang]??`${en?'Step':'Étape'} ${i+1}`}</strong><small>{tech(i)}</small></span><span className="flow-step-arrow" aria-hidden="true">↗</span></button>)}</div>
    <div className="flow-scene">
      <div className="flow-scene-top mono"><span>{en?'FOLLOW THE SYSTEM':'SUIVRE LE SYSTÈME'}</span><span>{en?'CONCEPT WALKTHROUGH':'PARCOURS DE PRINCIPE'}</span><button className="dossier-motion-toggle" aria-pressed={paused} onClick={onPause} aria-label={paused?(en?'Resume diagram animations':'Reprendre les animations'):(en?'Pause diagram animations':'Mettre les animations en pause')}><svg viewBox="0 0 20 20" aria-hidden="true"><path d={paused?'m7 5 8 5-8 5Z':'M7 5v10M13 5v10'}/></svg></button></div>
      <svg className="flow-architecture" viewBox="0 0 690 290" fill="none" aria-hidden="true">
        <path className="flow-floor" d="M30 220 345 40 660 220 345 280Z"/>
        {positions.slice(0,-1).map((point,i)=>{const to=positions[i+1];const d=`M${point.x+65} ${point.y+12}H${(point.x+to.x)/2}V${to.y+12}H${to.x-65}`;return <g key={i}><path className="flow-wire" d={d}/><path className="flow-signal" d={d} pathLength={100}/></g>;})}
        <g className="flow-reticle" ref={focus}><path d="M-86-49v-14h18m136 0h18v14M-86 67v14h18m136 0h18V67"/></g>
        {positions.map((point,i)=><g key={i} transform={`translate(${point.x} ${point.y})`} className={`flow-module ${active===i?'is-active':''}`}><path className="flow-module-base" d="m-65 0 65-37L65 0v29L0 66-65 29Z"/><path className="flow-module-face" d="m-65 0 65-37L65 0 0 37Z"/><path className="flow-module-edge" d="M0 37v29m-53-54-12 7m25 1-12 7m25 1-12 7m92-23 12 7m-25 1 12 7m-25 1 12 7"/><text className="flow-module-number" textAnchor="middle" y="7">0{i+1}</text><text className="flow-module-label" textAnchor="middle" y="109">{tech(i).split(' / ')[0]||`${en?'STEP':'ÉTAPE'} ${i+1}`}</text></g>)}
      </svg>
      <div className="flow-description" role="tabpanel" id="system-step-panel" aria-labelledby={`system-step-${active}`} tabIndex={0} aria-live="polite" aria-atomic="true"><span className="flow-current-number" aria-hidden="true">0{active+1}</span><div className="flow-description-inner" key={active}><h3>{labels[active]?.title[lang]??`${en?'Step':'Étape'} ${active+1}`}</h3><p>{project.workflow[active]?.[lang]}</p></div></div>
      <div className="flow-bottom"><span className="mono">0{active+1} / {String(count).padStart(2,'0')}</span><div className="flow-position" aria-hidden="true">{project.workflow.map((_,i)=><span key={i} className={i<=active?'is-complete':''}/>)}</div><button onClick={()=>setActive((active+1)%count)}>{active===count-1?(en?'Start again':'Recommencer'):(en?'Next step':'Étape suivante')}<span aria-hidden="true">→</span></button></div>
    </div>
  </div>;
}
