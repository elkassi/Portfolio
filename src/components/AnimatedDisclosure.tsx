import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';

export default function AnimatedDisclosure({ title, index, initialOpen, children }: { title: string; index: number; initialOpen: boolean; children: ReactNode }) {
  const details = useRef<HTMLDetailsElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const desired = useRef(initialOpen);
  useEffect(() => { const content = shell.current; return () => { if (content) gsap.killTweensOf(content); }; }, []);
  return <details ref={details} className="skill-disclosure" open={initialOpen}><summary onClick={event => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { desired.current = !details.current!.open; return; }
    event.preventDefault();
    const element = details.current!; const content = shell.current!;
    desired.current = !desired.current;
    gsap.killTweensOf(content);
    if (desired.current) {
      const wasOpen = element.open; element.open = true;
      if (!wasOpen) gsap.set(content, { height: 0 });
      gsap.to(content, { height: content.scrollHeight, duration: .6, ease: 'power3.inOut', onComplete: () => { if (desired.current) gsap.set(content, { clearProps: 'height' }); } });
    } else {
      gsap.to(content, { height: 0, duration: .45, ease: 'power3.inOut', onComplete: () => { if (!desired.current) { element.open = false; gsap.set(content, { clearProps: 'height' }); } } });
    }
  }}><span className="mono">0{index + 1}</span><h3>{title}</h3><span className="disclosure-plus">+</span></summary><div className="skill-detail-shell" ref={shell}>{children}</div></details>;
}
