import type { Lang } from '../content';
import { ui } from '../copy';

export default function MotionChrome({ lang, home }: { lang: Lang; home: boolean }) {
  const copy = ui[lang];
  const sections = [['home', copy.home], ['journey', copy.journey], ['work', copy.projects], ['about', copy.about], ['skills', copy.technologies], ['certificates', copy.credentials]];
  return <><div className="reading-progress" aria-hidden="true"/>{home && <nav className="scene-rail" aria-label={lang === 'en' ? 'Page chapters' : 'Chapitres de la page'}>{sections.map(([id, title], index) => <a href={`#${id}`} key={id} aria-label={title}><span className="rail-label">{title}</span><span className="rail-number">{String(index + 1).padStart(2,'0')}</span><span className="rail-tick"/></a>)}</nav>}</>;
}
