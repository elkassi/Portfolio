import ArrowIcon from './ArrowIcon';
import { projects } from '../content';
import type { Lang } from '../content';
import { ui } from '../copy';
import EngineeringGraphic from './EngineeringGraphic';

function Arrow() { return <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5"/></svg>; }
export default function ImmersiveHero({ lang, availability, duration }: { lang: Lang; availability: string; duration: string }) {
  const copy = ui[lang];
  const groups = [
    { category: 'industry', word: lang === 'en' ? 'INDUSTRY' : 'INDUSTRIE', id: 'lear', caption: 'Lear Corporation / Renault Tanger' },
    { category: 'ai', word: lang === 'en' ? 'INTELLIGENCE' : 'INTELLIGENCE', id: 'texteguard', caption: 'RoBERTa / Machine learning / NLP' },
    { category: 'data', word: 'DATA', id: 'smart-city', caption: 'Python / Power BI / SQL' },
  ];
  return <section className="immersive-hero" id="home"><div className="hero-pin wrap">
    <div className="hero-intro-stage"><div className="hero-content"><div className="hero-student small-label"><span className="hero-registration" aria-hidden="true">+</span>{copy.student}</div>
      <h1 aria-label={`${copy.heroLine1} ${copy.heroLine2}`}><span className="hero-line-mask"><span className="hero-line-inner">{lang==='en'?'FROM FACTORY':'DU TERRAIN'}</span></span><span className="hero-line-mask"><span className="hero-line-inner">{lang==='en'?'FLOORS TO':'INDUSTRIEL'}</span></span><span className="hero-line-mask hero-line-accent"><span className="hero-line-inner">{lang==='en'?'AI APPLICATIONS.':'À L’IA APPLIQUÉE.'}</span></span></h1>
      <p className="hero-intro">{copy.intro}</p>
      <div className="hero-actions"><a className="black-button" href="#/projects/all">{copy.explore}<Arrow/></a><a className="quiet-link" href="#journey">{copy.viewExperience}<span aria-hidden="true"><ArrowIcon direction="down"/></span></a></div>
      <div className="hero-availability"><span className="live-dot"/><span>{availability}</span><span className="availability-duration">{duration}</span></div>
    </div><EngineeringGraphic lang={lang}/>
    </div>
    <div className="hero-domain-stage"><div className="domain-stage-heading"><span className="small-label">{lang === 'en' ? 'Three connected fields. One engineering mindset.' : 'Trois domaines liés. Un même esprit d’ingénierie.'}</span><a href="#/projects/all">{projects.length} {copy.projectCount}<Arrow/></a></div>
      <div className="hero-domain-list">{groups.map((group, index) => <div className="hero-domain-mask" key={group.category}><a className="hero-domain-line" href={`#/projects/${group.category}`}><span className="mono">0{index + 1}</span><strong>{group.word}</strong><span className="domain-caption">{group.caption}</span><Arrow/></a></div>)}</div>
      <div className="domain-stage-foot"><span>{lang === 'en' ? 'Explore a discipline or keep scrolling into my experience.' : 'Explorez un domaine ou continuez vers mon expérience.'}</span><span aria-hidden="true"><ArrowIcon direction="down"/></span></div>
    </div>
    <div className="hero-scene-footer"><div className="hero-proof-names"><a href="#journey">Lear Corporation</a><span>/</span><a href="#journey">Renault Tanger</a><span>/</span><span>EMSI Tanger</span></div><div className="hero-scroll-cue mono"><span>{lang === 'en' ? 'Scroll to connect the work' : 'Défiler pour relier les projets'}</span><span aria-hidden="true"><ArrowIcon direction="down"/></span></div></div>
    <div className="hero-scroll-progress" aria-hidden="true"><span/></div>
  </div></section>;
}
