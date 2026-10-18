import ArrowIcon from './components/ArrowIcon';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { education, languages, profile, projects, skillGroups } from './content';
import type { Lang } from './content';
import { career, perspectives } from './experience';
import { ui } from './copy';
import ImmersiveHero from './components/ImmersiveHero';
import MotionChrome from './components/MotionChrome';
import AnimatedDisclosure from './components/AnimatedDisclosure';
import ProjectExplorer from './components/ProjectExplorer';
import ProjectDossier from './components/ProjectDossier';
import Credentials from './components/Credentials';
import { categories, categoryById } from './projectIndex';
import type { Filter } from './projectIndex';
import { scrollToTarget, usePortfolioMotion, useSmoothScroll } from './motion';

type Route = { page: 'home'; section: string } | { page: 'projects'; filter: Filter } | { page: 'project'; id: string };
const categoryMark: Record<Filter, string> = { all: '∗', industry: '01', ai: '02', data: '03', software: '04', robotics: '05' };
const indexHref = (category: Filter = 'all') => `#/projects/${category}`;
const caseHref = (id: string) => `#/project/${id}`;
function readRoute(): Route {
  const parts = window.location.hash.slice(1).split('/');
  if (parts[1] === 'project') return { page: 'project', id: parts[2] || '' };
  if (parts[1] === 'projects') return { page: 'projects', filter: categories.includes(parts[2] as Filter) ? parts[2] as Filter : 'all' };
  return { page: 'home', section: parts[0] || 'home' };
}
function preference(key: string, fallback: string) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
function Arrow({ back = false, diagonal = false }: { back?: boolean; diagonal?: boolean }) {
  return <svg aria-hidden="true" className={`arrow ${back ? 'arrow-back' : ''}`} width="22" height="22" viewBox="0 0 24 24" fill="none"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" /></svg>;
}
function ThemeIcon({ dark }: { dark: boolean }) { return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{dark ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : <path d="M20.7 13.4A8.8 8.8 0 0 1 10.6 3.3a8.8 8.8 0 1 0 10.1 10.1Z"/>}</svg>; }
function Tags({ items }: { items: string[] }) { return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>; }
function Career({ lang }: { lang: Lang }) {
  const [active, setActive] = useState('lear');
  const copy = ui[lang];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive((entry.target as HTMLElement).dataset.career!); }), { rootMargin: '-28% 0px -40% 0px' });
    document.querySelectorAll('.career-chapter').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <section className="career-section section-space" id="journey"><div className="wrap">
    <div className="career-heading reveal"><span className="section-index mono">Lear Corporation / Renault Tanger / EMSI</span><h2>{copy.careerTitle}</h2><p>{copy.careerIntro}</p></div>
    <div className="career-story"><nav className="career-index" aria-label={copy.journey}>{career.map((entry, index) => <button key={entry.id} className={active === entry.id ? 'is-active' : ''} aria-current={active === entry.id ? 'location' : undefined} onClick={() => scrollToTarget(`#career-${entry.id}`)}><span className="mono">0{index + 1} / {entry.year}</span><strong>{entry.company}</strong><span>{entry.kind === 'work' ? copy.industryExperience : copy.engineering}</span><Arrow diagonal/></button>)}<div className="career-index-track" aria-hidden="true"><span style={{ transform: `translateY(${career.findIndex(entry => entry.id === active) * 100}%)` }}/></div></nav>
      <div className="career-chapters">{career.map(entry => <article key={entry.id} className="career-chapter" id={`career-${entry.id}`} data-career={entry.id} aria-labelledby={`career-title-${entry.id}`}><div className="career-panel-head"><span className="small-label">{entry.kind === 'work' ? copy.industryExperience : copy.engineering}</span><span className="mono">{entry.period?.[lang] ?? entry.year}</span></div><h3 id={`career-title-${entry.id}`}>{entry.company}</h3><h4>{entry.role[lang]}</h4><p className="career-intro">{entry.intro[lang]}</p><h5 className="small-label">{entry.kind === 'work' ? copy.did : copy.engineering}</h5><ul className="contribution-list">{entry.bullets.map((item, i) => <li key={i}>{item[lang]}</li>)}</ul><Tags items={entry.stack}/>{entry.projectId ? <a href={caseHref(entry.projectId)} className="line-link">{copy.fullStory}<Arrow diagonal/></a> : <div className="earlier-education"><span className="mono">{education[1].period}</span><span>{education[1].title[lang]} · {education[1].school}</span></div>}</article>)}</div>
    </div>
  </div></section>;
}

function ProjectGateway({ lang }: { lang: Lang }) {
  const copy = ui[lang]; const [hovered, setHovered] = useState<Filter>('industry');
  const matching = projects.filter(project => categoryById[project.id] === hovered);
  return <div className="gateway-shell" id="work"><section className="gateway section-space"><div className="wrap"><div className="gateway-heading reveal"><span className="section-index mono">{projects.length} {copy.projectCount} / 5 {lang === 'en' ? 'disciplines' : 'domaines'}</span><h2>{copy.galleryTitle}</h2><p>{copy.galleryIntro}</p><a href={indexHref()} className="light-button">{copy.allProjects}<span>{projects.length}</span><Arrow diagonal/></a></div><div className="gateway-body reveal"><div className="gateway-menu">{categories.filter(category => category !== 'all').map(category => <a key={category} href={indexHref(category)} onMouseEnter={() => setHovered(category)} onFocus={() => setHovered(category)} className={hovered === category ? 'active' : ''}><span className="mono">{categoryMark[category]}</span><strong>{copy[category]}</strong><span className="gateway-number">{projects.filter(project => categoryById[project.id] === category).length}</span><Arrow diagonal/></a>)}</div><div className="gateway-preview" key={hovered} aria-hidden="true"><span className="mono">{copy[hovered]}</span><div className="preview-project-names">{matching.map(project => <span key={project.id}>{project.title[lang]}</span>)}</div><span className="gateway-symbol">{categoryMark[hovered]}</span></div></div></div></section></div>;
}

function About({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0); const copy = ui[lang]; const lens = perspectives[active];
  return <section className="about-section section-space" id="about"><div className="wrap"><div className="about-top reveal"><span className="section-index mono">Noureddine El Kassi</span><h2>{copy.profileTitle}</h2><p>{copy.profileIntro}</p></div><div className="perspective-layout reveal"><div className="perspective-tabs" role="tablist" aria-label={copy.profileLabel} onKeyDown={event => { const delta = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 0; if (delta) { event.preventDefault(); const value = (active + delta + perspectives.length) % perspectives.length; setActive(value); document.getElementById(`perspective-${value}`)?.focus(); } }}>{perspectives.map((item, i) => <button role="tab" key={i} id={`perspective-${i}`} aria-controls="perspective-panel" aria-selected={active === i} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)}><span className="mono">0{i + 1}</span>{item.title[lang]}<span className="perspective-indicator">{active === i ? '−' : '+'}</span></button>)}</div><article role="tabpanel" id="perspective-panel" aria-labelledby={`perspective-${active}`} className="perspective-panel"><div key={active} className="panel-enter"><div className="perspective-word">{lens.word[lang]}</div><p>{lens.text[lang]}</p><p>{lens.detail[lang]}</p><a href={caseHref(lens.projectId)} className="line-link">{copy.related}<Arrow diagonal/></a></div><button className="perspective-next" aria-label={copy.reveal} onClick={() => setActive((active + 1) % perspectives.length)}><Arrow/></button></article></div><div className="language-strip"><span className="small-label">{copy.languages}</span>{languages.map(item => <div key={item.name.en}><strong>{item.name[lang]}</strong><span>{item.level[lang]}</span></div>)}</div></div></section>;
}

function Skills({ lang }: { lang: Lang }) { const copy = ui[lang]; return <section className="toolkit section-space" id="skills"><div className="wrap toolkit-layout"><div className="toolkit-intro reveal"><h2>{copy.toolkit}</h2><p>{copy.toolkitIntro}</p></div><div className="toolkit-groups reveal">{skillGroups.map((group, i) => <AnimatedDisclosure key={group.title.en} title={group.title[lang]} index={i} initialOpen={i === 0}><div className="skill-detail"><p>{group.context[lang]}</p><Tags items={group.skills}/><div className="skill-projects"><span className="small-label">{copy.related}</span>{group.projectIds.map(id => { const project = projects.find(item => item.id === id); return project ? <a key={id} href={caseHref(id)}>{project.title[lang]}<Arrow diagonal/></a> : null; })}</div></div></AnimatedDisclosure>)}</div></div></section>; }


export default function App() {
  const [lang, setLang] = useState<Lang>(() => preference('nek-language', 'en') === 'fr' ? 'fr' : 'en');
  const [theme, setTheme] = useState(() => preference('nek-theme-v2', 'light') === 'dark' ? 'dark' : 'light');
  const [route, setRoute] = useState<Route>(readRoute); const [menuOpen, setMenuOpen] = useState(false); const [copied, setCopied] = useState('');
  const menuRef = useRef<HTMLButtonElement>(null); const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined); const copy = ui[lang];
  const project = route.page === 'project' ? projects.find(item => item.id === route.id) : undefined;
  const routeKey = route.page === 'home' ? 'home' : route.page === 'projects' ? `projects-${route.filter}` : route.id;
  const month = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', { month: 'long', year: 'numeric' }).format(new Date(`${profile.availability.start}-01T12:00:00`));
  const availability = `${lang === 'en' ? 'PFE internship' : 'Stage PFE'} · ${month}`;
  useSmoothScroll();
  usePortfolioMotion(`${routeKey}-${lang}`);
  const previousRoute = useRef<Route | null>(null);
  useEffect(() => {
    const update = () => {
      setMenuOpen(false);
      // Render the destination immediately; its entrance animations handle motion
      // without hiding the header or covering the page between routes.
      setRoute(readRoute());
    };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('nek-language', lang); localStorage.setItem('nek-theme-v2', theme); } catch { /* Optional preferences. */ }
    const title = project ? `${project.title[lang]} — Noureddine El Kassi` : route.page === 'projects' ? `${copy.projects} — Noureddine El Kassi` : 'Noureddine El Kassi — AI, Data & Software';
    document.title = title; const description = project?.summary[lang] ?? profile.headline[lang];
    document.querySelector('meta[name="description"]')?.setAttribute('content', description); document.querySelector('meta[property="og:title"]')?.setAttribute('content', title); document.querySelector('meta[property="og:description"]')?.setAttribute('content', description); document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101010' : '#ffffff');
  }, [lang, theme, project, route.page, copy.projects]);
  useLayoutEffect(() => {
    const previous = previousRoute.current;
    const frame = requestAnimationFrame(() => {
      if (route.page === 'home') scrollToTarget(`#${route.section}`, !(previous?.page === 'home' && previous.section !== route.section));
      else { scrollToTarget(0, true); document.querySelector<HTMLElement>('.page-title')?.focus({ preventScroll: true }); }
    });
    previousRoute.current = route;
    return () => cancelAnimationFrame(frame);
  }, [route]);
  useEffect(() => { if (!menuOpen) return; const escape = (event: globalThis.KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); menuRef.current?.focus(); } }; window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape); }, [menuOpen]);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  async function copyEmail() { try { await navigator.clipboard.writeText(profile.email); setCopied(copy.copied); } catch { setCopied(copy.copyFail); } clearTimeout(copyTimer.current); copyTimer.current = setTimeout(() => setCopied(''), 4000); }
  const nav = [{ href: '#home', label: copy.home }, { href: '#journey', label: copy.journey }, { href: indexHref(), label: copy.projects }, { href: '#about', label: copy.about }];
  return <><MotionChrome lang={lang} home={route.page === 'home'}/><a className="skip-link" href="#main" onClick={event => { event.preventDefault(); const main = document.getElementById('main'); main?.setAttribute('tabindex', '-1'); main?.focus(); main?.scrollIntoView(); }}>{copy.skip}</a><header className="site-header"><div className="header-inner"><a href="#home" className="name-wordmark" aria-label={`Noureddine El Kassi — ${copy.home}`}><svg className="identity-mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40"/><path className="mark-letter" d="M10 29V11l20 18V11" fill="none" strokeWidth="2"/><path className="mark-accent" d="M6 34 34 6" fill="none" strokeWidth="2.5"/></svg><span className="identity-name">Noureddine El Kassi<small>{lang === 'en' ? 'Engineering portfolio' : 'Portfolio ingénieur'}</small></span></a><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} id="main-navigation" aria-label={lang === 'en' ? 'Main navigation' : 'Navigation principale'}>{nav.map(item => <a href={item.href} key={item.href} aria-current={(route.page !== 'home' && item.href === indexHref()) || (route.page === 'home' && item.href === `#${route.section}`) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav><div className="header-actions"><button className="language-button" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}>{lang === 'en' ? 'FR' : 'EN'}</button><button className="theme-button" aria-label={theme === 'dark' ? copy.light : copy.dark} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><ThemeIcon dark={theme === 'dark'}/></button><a className="header-contact" href="#contact">{copy.contact}<Arrow diagonal/></a><button className="menu-button" ref={menuRef} aria-label={menuOpen ? copy.closeMenu : copy.menu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button></div></div></header>
    {route.page === 'home' ? <main id="main"><ImmersiveHero lang={lang} availability={availability} duration={profile.availability.duration[lang]}/><Career lang={lang}/><ProjectGateway lang={lang}/><About lang={lang}/><Skills lang={lang}/><Credentials lang={lang}/></main> : route.page === 'projects' ? <ProjectExplorer lang={lang} filter={route.filter}/> : project ? <ProjectDossier key={project.id} project={project} lang={lang}/> : <main className="wrap missing-page" id="main"><h1 className="page-title" tabIndex={-1}>{copy.notFound}</h1><a href={indexHref()} className="black-button">{copy.viewAll}<Arrow/></a></main>}
    <footer className="contact section-space" id="contact"><div className="wrap"><div className="contact-top"><div><span className="small-label">{copy.email}</span><h2>{copy.contactTitle}</h2></div><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label={copy.email}><Arrow diagonal/></a></div><div className="contact-bottom"><div><p>{copy.contactBody}</p><div className="contact-email"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} aria-label={copy.copy}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="8" width="12" height="12"/><path d="M15 8V4H4v11h4"/></svg></button></div><span className="copy-message" role="status">{copied}</span></div><div className="contact-details"><span className="contact-availability"><span className="live-dot"/>{availability}</span><span>{profile.availability.duration[lang]} · {profile.location[lang]}</span><a href={profile.cv.fr} download>{copy.cv}<span>{copy.cvLanguage}</span><Arrow diagonal/></a>{profile.cv.en && <a href={profile.cv.en} download>CV · English<Arrow diagonal/></a>}{profile.social.linkedin && <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn<Arrow diagonal/></a>}{profile.social.github && <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub<Arrow diagonal/></a>}</div></div><div className="footer-baseline mono"><span>© {new Date().getFullYear()} {copy.copyright}</span><span>{copy.footer}</span><a href="#home">{copy.backTop} <ArrowIcon direction="up"/></a></div></div></footer>
  </>;
}
