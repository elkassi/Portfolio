import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../content';
import type { Lang, Project } from '../content';
import { career } from '../experience';
import { caseEditorial } from '../caseEditorial';
import { categoryById, projectDate } from '../projectIndex';
import { scrollToTarget } from '../motion';
import { ui } from '../copy';
import ProjectBlueprint from './ProjectBlueprint';
import SystemWalkthrough from './SystemWalkthrough';

function Arrow({back=false}:{back?:boolean}) {return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={back?'M20 12H4m6-6-6 6 6 6':'M5 19 19 5M5 5h14v14'} stroke="currentColor" strokeWidth="1.5"/></svg>;}

export default function ProjectDossier({project,lang}:{project:Project;lang:Lang}) {
  const root=useRef<HTMLElement>(null);
  const tilt=useRef<HTMLDivElement>(null);
  const heroArt=useRef<HTMLElement>(null);
  const [paused,setPaused]=useState(false);
  const [heroVisible,setHeroVisible]=useState(false);
  const [chapter,setChapter]=useState('dossier-overview');
  const en=lang==='en';const copy=ui[lang];const editorial=caseEditorial[project.id];
  const contributions=career.find(entry=>entry.projectId===project.id)?.bullets??project.contribution;
  const order=projects.indexOf(project);const previous=projects[(order+projects.length-1)%projects.length];const next=projects[(order+1)%projects.length];
  const sections=[{id:'dossier-overview',title:en?'The story':'Le projet'},...(project.workflow.length?[{id:'dossier-system',title:en?'How it works':'Fonctionnement'}]:[]),...(contributions.length?[{id:'dossier-contribution',title:en?'My contribution':'Ma contribution'}]:[]),...(project.screenshots?.length?[{id:'dossier-gallery',title:en?'Project views':'Aperçus du projet'}]:[])];
  useEffect(()=>{
    const element=heroArt.current;const drawing=tilt.current;
    if(!element)return;
    const observer=new IntersectionObserver(([entry])=>setHeroVisible(entry.isIntersecting));observer.observe(element);
    return()=>{observer.disconnect();if(drawing)gsap.killTweensOf(drawing);};
  },[]);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)setChapter(entry.target.id);});},{rootMargin:'-25% 0px -55% 0px'});
    sections.forEach(section=>{const node=document.getElementById(section.id);if(node)observer.observe(node);});
    return()=>observer.disconnect();
  },[project.id,contributions.length,project.workflow.length,project.screenshots?.length]);
  useLayoutEffect(()=>{
    const media=gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      const context=gsap.context(()=>{
        gsap.fromTo('.dossier-visual-reveal',{clipPath:'inset(0 0 100% 0)',y:25},{clipPath:'inset(0 0 0% 0)',y:0,duration:1.15,ease:'power3.inOut',clearProps:'transform,clipPath'});
        gsap.fromTo('.dossier-archive-number',{rotate:-12,x:30},{rotate:0,x:0,duration:1.2,ease:'power3.out',clearProps:'transform'});
        gsap.utils.toArray<HTMLElement>('.dossier-reveal').forEach(element=>gsap.fromTo(element,{y:30,clipPath:'inset(0 0 100% 0)'},{y:0,clipPath:'inset(0 0 0% 0)',duration:.85,ease:'power3.out',scrollTrigger:{trigger:element,start:'top 90%',toggleActions:'play none none reverse'},clearProps:'transform,clipPath'}));
        const line=root.current?.querySelector('.contribution-spine > span');
        if(line)gsap.fromTo(line,{scaleY:0},{scaleY:1,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'.dossier-contribution-list',start:'top 70%',end:'bottom 65%',scrub:.6}});
      },root);
      return()=>context.revert();
    });
    const frame=requestAnimationFrame(()=>ScrollTrigger.refresh());
    return()=>{cancelAnimationFrame(frame);media.revert();};
  },[project.id,lang]);
  const visit=(id:string)=>scrollToTarget(`#${id}`);
  return <main id="main" className={`project-dossier ${paused?'diagrams-paused':''}`} ref={root}>
    <div className="wrap dossier-opening">
      <div className="dossier-breadcrumb"><a href={`#/projects/${categoryById[project.id]}`} className="back-link"><Arrow back/>{copy.projectIndex}</a><span className="mono">{en?'CASE':'PROJET'} {String(order+1).padStart(2,'0')} / {projects.length}</span></div>
      <header className="dossier-hero"><div className="dossier-kicker small-label"><span className="dossier-cross" aria-hidden="true">+</span>{copy[categoryById[project.id]]}<span aria-hidden="true">/</span>{project.type[lang]}</div>
        <h1 className="page-title" tabIndex={-1}>{project.title[lang]}</h1>
        <div className="dossier-hero-grid"><div className="dossier-introduction"><p className="dossier-summary">{project.summary[lang]}</p><dl className="dossier-key-facts"><div><dt>{copy.role}</dt><dd>{project.role[lang]}</dd></div><div><dt>{copy.date}</dt><dd>{projectDate(project,lang)}</dd></div></dl><div className="dossier-hero-actions"><button className="black-button" onClick={()=>visit(project.workflow.length?'dossier-system':'dossier-overview')}>{project.workflow.length?(en?'Follow the system':'Suivre le fonctionnement'):(en?'Explore the story':'Découvrir le projet')}<span aria-hidden="true">↘</span></button>{project.repo&&<a className="quiet-link" href={project.repo} target="_blank" rel="noreferrer">{copy.repository}<Arrow/></a>}{project.demo&&<a className="quiet-link" href={project.demo} target="_blank" rel="noreferrer">{copy.demo}<Arrow/></a>}</div></div>
          <figure className={`dossier-visual ${heroVisible?'':'art-offscreen'}`} ref={heroArt}><figcaption className="mono"><span>{en?'THE SYSTEM, AT A GLANCE':'LE SYSTÈME, EN UN REGARD'}</span><span>{en?'CONCEPT DIAGRAM':'SCHÉMA DE PRINCIPE'}</span><button className="dossier-motion-toggle" aria-label={paused?(en?'Resume diagram animations':'Reprendre les animations'):(en?'Pause diagram animations':'Mettre les animations en pause')} aria-pressed={paused} onClick={()=>setPaused(!paused)}><svg viewBox="0 0 20 20" aria-hidden="true"><path d={paused?'m7 5 8 5-8 5Z':'M7 5v10M13 5v10'}/></svg></button></figcaption><span className="dossier-archive-number" aria-hidden="true">{String(order+1).padStart(2,'0')}</span><div className="dossier-visual-reveal"><div className="dossier-visual-tilt" ref={tilt} onPointerMove={event=>{
            if(paused||event.pointerType==='touch'||window.matchMedia('(prefers-reduced-motion: reduce)').matches||!tilt.current)return;
            const box=event.currentTarget.getBoundingClientRect();gsap.to(tilt.current,{rotateY:((event.clientX-box.left)/box.width-.5)*8,rotateX:-((event.clientY-box.top)/box.height-.5)*5,duration:.75,overwrite:true,ease:'power2.out'});
          }} onPointerLeave={()=>{if(tilt.current)gsap.to(tilt.current,{rotateX:0,rotateY:0,duration:.8,ease:'power3.out'});}}><ProjectBlueprint id={project.id} lang={lang}/></div></div></figure>
        </div>
        <div className="dossier-tech-strip"><span className="mono">{en?'BUILT WITH':'TECHNOLOGIES'}</span><ul aria-label={copy.technologies}>{project.stack.map(tech=><li key={tech}><span aria-hidden="true">+</span>{tech}</li>)}</ul></div>
      </header>
    </div>
    <div className="dossier-tabs-shell"><nav className="dossier-tabs wrap" aria-label={en?'Project chapters':'Chapitres du projet'}>{sections.map((section,i)=><button key={section.id} aria-current={chapter===section.id?'location':undefined} onClick={()=>visit(section.id)}><span className="mono">0{i+1}</span>{section.title}<span className="dossier-tab-arrow" aria-hidden="true">↗</span></button>)}<a href={`#/projects/${categoryById[project.id]}`}><span aria-hidden="true">↖</span>{en?'Back to collection':'Retour à la collection'}</a></nav></div>
    <section id="dossier-overview" className="dossier-section dossier-story wrap"><div className="dossier-story-grid"><article className="dossier-reveal"><span className="dossier-section-label mono">01 / {copy.context}</span><h2>{editorial?.challenge[lang]??copy.context}</h2><p>{project.problem[lang]}</p></article><article className="dossier-result dossier-reveal"><span className="dossier-section-label mono">{copy.result}<span aria-hidden="true">↗</span></span><h2>{editorial?.result[lang]??copy.result}</h2><p>{project.outcome[lang]}</p></article></div>{project.note&&<aside className="dossier-scope dossier-reveal"><span className="mono">{copy.perspective}</span><p>{project.note[lang]}</p></aside>}</section>
    {project.workflow.length>0&&<section id="dossier-system" className="dossier-section dossier-system"><div className="wrap"><div className="dossier-system-heading dossier-reveal"><div><span className="dossier-section-label mono">02 / {copy.workflow}</span><h2>{en?'INSIDE THE':'AU CŒUR DU'}<br/><span>{en?'SYSTEM.':'SYSTÈME.'}</span></h2></div><p>{en?'Follow the flow, one step at a time. Select a stage to see what happens and where it fits.':'Suivez le parcours étape par étape. Sélectionnez une étape pour comprendre son rôle dans le système.'}</p></div><SystemWalkthrough key={project.id} project={project} lang={lang} labels={editorial?.steps??[]} paused={paused} onPause={()=>setPaused(!paused)}/></div></section>}
    {contributions.length>0&&<section id="dossier-contribution" className="dossier-section dossier-contribution wrap"><div className="dossier-contribution-heading dossier-reveal"><span className="dossier-section-label mono">{String(sections.findIndex(item=>item.id==='dossier-contribution')+1).padStart(2,'0')} / {copy.contributions}</span><h2>{en?'MY PART':'MON RÔLE'}<br/><span>{en?'IN THE BUILD.':'DANS LE PROJET.'}</span></h2><p>{project.role[lang]}</p></div><div className="dossier-contribution-list"><div className="contribution-spine" aria-hidden="true"><span/></div>{contributions.map((item,i)=><article className="dossier-contribution-item dossier-reveal" key={i}><span className="mono">0{i+1}</span><p>{item[lang]}</p><span className="contribution-mark" aria-hidden="true">↗</span></article>)}</div></section>}
    {!!project.screenshots?.length&&<section id="dossier-gallery" className="dossier-section dossier-gallery wrap"><div className="dossier-gallery-heading"><span className="dossier-section-label mono">{en?'PROJECT VIEWS':'APERÇUS DU PROJET'}</span><h2>{en?'A CLOSER LOOK.':'DE PLUS PRÈS.'}</h2></div>{project.screenshots.map(image=><figure className="dossier-reveal" key={image.src}><img src={image.src} alt={image.alt[lang]} loading="lazy"/><figcaption>{image.alt[lang]}</figcaption></figure>)}</section>}
    <section className="dossier-next wrap"><div className="dossier-next-bar"><a href={`#/project/${previous.id}`} className="back-link"><Arrow back/>{en?'Previous project':'Projet précédent'}</a><a href="#/projects/all">{copy.allProjects}<span aria-hidden="true">↗</span></a></div><a className="dossier-next-project" href={`#/project/${next.id}`}><div><span className="mono">{en?'CONTINUE EXPLORING':'POURSUIVRE L’EXPLORATION'} / {String(projects.indexOf(next)+1).padStart(2,'0')}</span><h2>{next.title[lang]}</h2><span className="dossier-next-category">{copy[categoryById[next.id]]} / {projectDate(next,lang)}</span><span className="dossier-next-open">{copy.nextCase}<Arrow/></span></div><div className="dossier-next-art"><ProjectBlueprint id={next.id} lang={lang}/></div></a></section>
  </main>;
}
