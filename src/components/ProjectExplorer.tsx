import ArrowIcon from './ArrowIcon';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { projects } from '../content';
import type { Lang, Project } from '../content';
import { ui } from '../copy';
import { categories, categoryById, projectDate } from '../projectIndex';
import type { Filter } from '../projectIndex';
import { scrollToTarget } from '../motion';
import ProjectBlueprint from './ProjectBlueprint';

function Arrow({ back=false }: { back?:boolean }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d={back?'M20 12H4m6-6-6 6 6 6':'M5 19 19 5M5 5h14v14'} stroke="currentColor" strokeWidth="1.5"/></svg>;
}
function CategoryGlyph({ kind }: { kind:Filter }) {
  const paths:Record<Filter,string>={ all:'M3 3h6v6H3zm12 0h6v6h-6zM3 15h6v6H3zm12 0h6v6h-6z',industry:'M3 21V9l6 4V7l6 4V3h5v18Zm4-4h2m3 0h2m3 0h2',ai:'M12 2 3 7v10l9 5 9-5V7ZM3 7l9 5 9-5M12 12v10M7 5l10 14m0-14L7 19',data:'M4 5c0-4 16-4 16 0v14c0 4-16 4-16 0Zm0 0c0 4 16 4 16 0M4 12c0 4 16 4 16 0',software:'m8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18',robotics:'M5 7h14v13H5ZM12 7V3M9 12h1m4 0h1m-6 5h6M2 11v6m20-6v6'};
  return <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true"><path d={paths[kind]} stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round"/></svg>;
}
function Preview({ project,lang,paused,onPause,mobile=false }: { project:Project;lang:Lang;paused:boolean;onPause:()=>void;mobile?:boolean }) {
  const root=useRef<HTMLDivElement>(null);
  const art=useRef<HTMLDivElement>(null);
  const [inView,setInView]=useState(false);
  const copy=ui[lang];
  useEffect(()=>{
    const element=root.current;const drawing=art.current;if(!element)return;
    const observer=new IntersectionObserver(([entry])=>setInView(entry.isIntersecting));observer.observe(element);
    return()=>{observer.disconnect();if(drawing)gsap.killTweensOf(drawing);};
  },[]);
  useLayoutEffect(()=>{
    const element=root.current;if(!element)return;
    const query=window.matchMedia('(prefers-reduced-motion: reduce)');if(query.matches)return;
    const context=gsap.context(()=>{
      gsap.fromTo('.stage-drawing',{clipPath:'inset(0 0 100% 0)',y:15},{clipPath:'inset(0 0 0% 0)',y:0,duration:.65,ease:'power3.inOut',clearProps:'clipPath,transform'});
      gsap.fromTo('.stage-project-title',{y:15},{y:0,duration:.6,ease:'power3.out'});
    },element);
    return()=>context.revert();
  },[project.id]);
  return <div ref={root} className={`project-stage ${mobile?'project-stage-mobile':''} ${paused||!inView?'is-paused':''}`}>
    <div className="stage-frame" onPointerMove={event=>{
      if(paused||event.pointerType==='touch'||window.matchMedia('(prefers-reduced-motion: reduce)').matches||!art.current)return;
      const box=event.currentTarget.getBoundingClientRect();
      gsap.to(art.current,{rotateY:((event.clientX-box.left)/box.width-.5)*8,rotateX:-((event.clientY-box.top)/box.height-.5)*6,duration:.7,ease:'power2.out',overwrite:true});
    }} onPointerLeave={()=>{if(art.current)gsap.to(art.current,{rotateY:0,rotateX:0,duration:.8,ease:'power3.out'});}}>
      <div className="stage-topline mono"><span><span className="stage-status"/>{copy[categoryById[project.id]]}</span><span>{lang==='en'?'CONCEPT DIAGRAM':'SCHÉMA DE PRINCIPE'}</span><button onClick={onPause} aria-pressed={paused} aria-label={paused?(lang==='en'?'Play project diagram':'Animer le schéma du projet'):(lang==='en'?'Pause project diagram':'Mettre le schéma du projet en pause')}><svg viewBox="0 0 20 20" aria-hidden="true"><path d={paused?'m7 5 8 5-8 5Z':'M7 5v10M13 5v10'}/></svg></button></div>
      <div className="stage-art-perspective"><div className="stage-drawing"><div className="stage-tilt" ref={art}><ProjectBlueprint id={project.id} lang={lang}/></div></div></div>
      <div className="stage-title-row"><div><span className="stage-subtitle">{project.subtitle[lang]}</span><h2 className="stage-project-title">{project.title[lang]}</h2></div><a href={`#/project/${project.id}`} className="stage-open" aria-label={`${copy.openProject}: ${project.title[lang]}`}><Arrow/><span>{copy.openProject}</span></a></div>
      <span className="stage-corner corner-tl" aria-hidden="true"/><span className="stage-corner corner-br" aria-hidden="true"/>
    </div>
    <div className="stage-information" key={project.id}>
      <p>{project.summary[lang]}</p>
      <div className="stage-facts"><div><span className="small-label">{copy.date}</span><strong>{projectDate(project,lang)}</strong></div><div><span className="small-label">{copy.role}</span><strong>{project.role[lang]}</strong></div></div>
      <ul className="stage-stack" aria-label={copy.technologies}>{project.stack.map(item=><li key={item}>{item}</li>)}</ul>
    </div>
  </div>;
}

export default function ProjectExplorer({lang,filter}:{lang:Lang;filter:Filter}) {
  const [search,setSearch]=useState('');
  const [activeId,setActiveId]=useState(projects[0].id);
  const [paused,setPaused]=useState(false);
  const root=useRef<HTMLElement>(null);
  const nav=useRef<HTMLElement>(null);
  const marker=useRef<HTMLSpanElement>(null);
  const copy=ui[lang];
  const filtered=projects.filter(project=>(filter==='all'||categoryById[project.id]===filter)&&`${project.title.en} ${project.title.fr} ${project.subtitle.en} ${project.subtitle.fr} ${project.stack.join(' ')}`.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
  const selected=filtered.find(project=>project.id===activeId)??filtered[0];
  useEffect(()=>setActiveId(filtered[0]?.id??''),[filter,search]);
  useLayoutEffect(()=>{
    const parent=nav.current;const active=parent?.querySelector<HTMLElement>('[aria-current]');const highlight=marker.current;
    if(!parent||!active||!highlight)return;
    const measure=()=>{
      const x=active.offsetLeft;
      gsap.to(highlight,{x,y:active.offsetTop,width:active.offsetWidth,height:active.offsetHeight,duration:window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:.5,ease:'power3.out'});
    };
    measure();const resize=new ResizeObserver(measure);resize.observe(parent);
    return()=>{resize.disconnect();gsap.killTweensOf(highlight);};
  },[filter,lang]);
  useLayoutEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!root.current?.querySelector('.lab-project-row'))return;
    const context=gsap.context(()=>gsap.fromTo('.lab-project-row',{y:22,clipPath:'inset(0 0 100% 0)'},{y:0,clipPath:'inset(0 0 0% 0)',duration:.65,stagger:.035,ease:'power3.out',clearProps:'transform,clipPath'}),root);
    return()=>context.revert();
  },[filter,search]);
  function select(project:Project,scroll=false) {
    setActiveId(project.id);
    if(scroll&&window.matchMedia('(max-width: 899px)').matches) requestAnimationFrame(()=>scrollToTarget(`#project-entry-${project.id}`,true));
  }
  return <main className="project-lab wrap" id="main" ref={root}>
    <div className="lab-breadcrumb"><a href="#home" className="back-link"><Arrow back/>{copy.backHome}</a><span className="mono">2024 — 2026 / {lang==='en'?'ENGINEERING WORK':'PROJETS D’INGÉNIERIE'}</span></div>
    <div className="lab-heading"><div><span className="small-label">{lang==='en'?'IDEAS. SYSTEMS. IMPLEMENTATION.':'IDÉES. SYSTÈMES. RÉALISATION.'}</span><h1 className="page-title" tabIndex={-1}>{lang==='en'?'PROJECT':'ATLAS DES'} <span>{lang==='en'?'ATLAS.':'PROJETS.'}</span></h1></div><p>{lang==='en'?'Explore the systems I’ve built, the problems behind them, and my part in making them work.':'Découvrez les systèmes que j’ai développés, les problèmes abordés et ma contribution à leur réalisation.'}</p><div className="lab-total"><strong>{String(projects.length).padStart(2,'0')}</strong><span className="mono">{copy.projectCount}<br/>05 {lang==='en'?'disciplines':'domaines'}</span><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0v40M0 20h40M6 6l28 28M6 34 34 6"/></svg></div></div>
    <div className="lab-toolbar"><nav className="lab-categories" ref={nav} aria-label={copy.category}><span className="category-marker" ref={marker} aria-hidden="true"/>{categories.map(category=><a href={`#/projects/${category}`} key={category} aria-current={category===filter?'page':undefined}><CategoryGlyph kind={category}/><span>{copy[category]}</span><sup>{category==='all'?projects.length:projects.filter(project=>categoryById[project.id]===category).length}</sup></a>)}</nav><label className="lab-search"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><input type="search" value={search} onChange={event=>setSearch(event.target.value)} placeholder={lang==='en'?'Find a project…':'Trouver un projet…'} aria-label={copy.searchLabel}/></label></div>
    <div className="lab-directory-top mono"><span aria-live="polite">{String(filtered.length).padStart(2,'0')} {filtered.length===1?copy.projectSingular:copy.projectCount} / {copy[filter]}</span><span>{lang==='en'?'SELECT A PROJECT TO EXPLORE':'SÉLECTIONNEZ UN PROJET À EXPLORER'}<span aria-hidden="true"><ArrowIcon direction="down-right"/></span></span></div>
    {selected?<div className="project-lab-layout"><div className="lab-project-index" role="group" aria-label={copy.projectIndex}>{filtered.map(project=>{
      const active=selected.id===project.id;
      return <article className={`lab-project-row ${active?'is-active':''}`} id={`project-entry-${project.id}`} key={project.id}>
        <div className="lab-project-row-inner" onPointerEnter={event=>{if(event.pointerType!=='touch'&&window.matchMedia('(min-width: 900px)').matches)select(project);}}><button className="lab-project-select" aria-pressed={active} aria-label={`${lang==='en'?'Preview':'Aperçu'}: ${project.title[lang]}`} onClick={()=>select(project,true)} onFocus={()=>{if(window.matchMedia('(min-width: 900px)').matches)select(project);}}><span className="lab-project-number mono">{String(projects.indexOf(project)+1).padStart(2,'0')}</span><span className="lab-project-name"><strong>{project.title[lang]}</strong><span>{projectDate(project,lang)}<span aria-hidden="true"> / </span>{copy[categoryById[project.id]]}</span></span><span className="lab-project-dot" aria-hidden="true"/></button><a className="lab-project-open" href={`#/project/${project.id}`} aria-label={`${copy.openProject}: ${project.title[lang]}`} onFocus={()=>{if(window.matchMedia('(min-width: 900px)').matches)select(project);}}><Arrow/></a></div>
        {active&&<div className="lab-inline-preview"><Preview project={project} lang={lang} paused={paused} onPause={()=>setPaused(!paused)} mobile/></div>}
      </article>;
    })}<div className="lab-index-foot mono"><span>{lang==='en'?'INDUSTRIAL EXPERIENCE + ACADEMIC EXPLORATION':'EXPÉRIENCE INDUSTRIELLE + EXPLORATION ACADÉMIQUE'}</span><span aria-hidden="true"><ArrowIcon direction="down"/></span></div></div><aside className="lab-desktop-preview" aria-label={lang==='en'?'Selected project':'Projet sélectionné'}><Preview project={selected} lang={lang} paused={paused} onPause={()=>setPaused(!paused)}/></aside></div>:<div className="lab-empty"><span aria-hidden="true">∅</span><h2>{copy.noResults}</h2><button className="black-button" onClick={()=>setSearch('')}>{copy.reset}<Arrow/></button></div>}
  </main>;
}
