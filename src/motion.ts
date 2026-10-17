import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);
let scroller: Lenis | undefined;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function scrollToTarget(target: string | number, immediate = false) {
  const element = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : null;
  if (typeof target === 'string' && !element) return;
  const offset = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 90;
  const inset = element ? Math.max(offset + 14, parseFloat(getComputedStyle(element).scrollMarginTop) || 0) : 0;
  const top = typeof target === 'number' ? target : Math.max(0, element!.getBoundingClientRect().top + window.scrollY - inset);
  if (scroller) scroller.scrollTo(top, { immediate: immediate || reduced(), duration: 1.15, easing: t => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top, behavior: immediate || reduced() ? 'instant' : 'smooth' });
}

export function useSmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let tick: ((time: number) => void) | undefined;
    const setup = () => {
      if (tick) gsap.ticker.remove(tick);
      scroller?.destroy(); scroller = undefined;
      if (!query.matches) return;
      const instance = new Lenis({ lerp: .085, smoothWheel: true, syncTouch: false, autoRaf: false });
      scroller = instance;
      instance.on('scroll', ScrollTrigger.update);
      tick = time => instance.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };
    setup(); query.addEventListener('change', setup);
    return () => { query.removeEventListener('change', setup); if (tick) gsap.ticker.remove(tick); scroller?.destroy(); scroller = undefined; };
  }, []);
}

export function transitionPage(swap: () => void) {
  const curtain = document.querySelector<HTMLElement>('.route-curtain');
  if (!curtain || reduced() || document.hidden) { swap(); return undefined; }
  const panels = curtain.querySelectorAll('.route-curtain-panel');
  let swapped = false;
  const commit = () => { if (!swapped) { swapped = true; swap(); } };
  // Keep routing usable if a throttled animation frame never reaches its callback.
  const swapTimer = window.setTimeout(commit, 650);
  const releaseTimer = window.setTimeout(() => { commit(); timeline.kill(); clearPageTransition(); }, 1500);
  const clearTimers = () => { window.clearTimeout(swapTimer); window.clearTimeout(releaseTimer); };
  const timeline = gsap.timeline();
  timeline.eventCallback('onComplete', clearTimers);
  timeline.set(curtain, { visibility: 'visible', pointerEvents: 'auto' })
    .fromTo(panels, { scaleY: 0, transformOrigin: 'bottom' }, { scaleY: 1, duration: .42, stagger: .055, ease: 'power3.inOut' })
    .call(commit)
    .set(panels, { transformOrigin: 'top' })
    .to(panels, { scaleY: 0, duration: .52, stagger: .045, ease: 'power3.inOut' }, '+=.08')
    .set(curtain, { visibility: 'hidden', pointerEvents: 'none' });
  return { kill: () => { clearTimers(); timeline.kill(); } };
}

export function clearPageTransition() {
  gsap.set('.route-curtain', { visibility: 'hidden', pointerEvents: 'none' });
  gsap.set('.route-curtain-panel', { scaleY: 0 });
}

export function usePortfolioMotion(key: string) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    document.documentElement.classList.remove('motion-ready');
    document.documentElement.classList.add('motion-directed');
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const home = document.querySelector('.immersive-hero');
        if (home) {
          gsap.fromTo('.hero-line-inner', { yPercent: 112, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1.15, stagger: .13, ease: 'power4.out', clearProps: 'transform' });
          gsap.fromTo('.hero-intro-stage .hero-student, .hero-intro-stage .hero-intro, .hero-intro-stage .hero-context, .hero-intro-stage .hero-actions, .hero-intro-stage .hero-availability', { y: 22 }, { y: 0, duration: 1.1, stagger: .07, ease: 'power3.out' });
          gsap.fromTo('.engineering-art', { clipPath: 'inset(0 0 100% 0)', x: 45 }, { clipPath: 'inset(0 0 0% 0)', x: 0, duration: 1.6, ease: 'power3.inOut', clearProps: 'clipPath,transform' });
        }
        gsap.utils.toArray<HTMLElement>('.reveal').forEach(element => {
          gsap.fromTo(element, { y: 42 }, { y: 0, duration: 1.05, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 92%', toggleActions: 'play none none reverse' } });
        });
        gsap.utils.toArray<HTMLElement>('.career-chapter').forEach(element => {
          gsap.fromTo(element.querySelector('h3'), { clipPath: 'inset(0 0 100% 0)', y: 28 }, { clipPath: 'inset(0 0 0% 0)', y: 0, duration: .95, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 78%', toggleActions: 'play none none reverse' } });
        });
        const footer = document.querySelector('.contact > .wrap');
        if (footer) gsap.fromTo(footer, { y: 90 }, { y: 0, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 30%', scrub: .8 } });
        if (document.querySelector('.page-title')) gsap.fromTo('.page-title', { clipPath: 'inset(0 0 100% 0)', y: 24 }, { clipPath: 'inset(0 0 0% 0)', y: 0, duration: .85, ease: 'power3.out', delay: .12 });
      });
      return () => context.revert();
    });
    media.add('(min-width: 900px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)', () => {
      const hero = document.querySelector<HTMLElement>('.immersive-hero');
      const secondary = document.querySelector<HTMLElement>('.hero-domain-stage');
      const primary = document.querySelector<HTMLElement>('.hero-intro-stage');
      const context = gsap.context(() => {
        if (hero && secondary && primary) {
          secondary.inert = true; secondary.setAttribute('aria-hidden', 'true'); primary.inert = false;
          const timeline = gsap.timeline({ scrollTrigger: {
            trigger: hero, start: 'top top', end: 'bottom bottom', scrub: .7,
            onUpdate: self => { const opened = self.progress > .48; secondary.inert = !opened; secondary.setAttribute('aria-hidden', String(!opened)); primary.inert = opened; primary.setAttribute('aria-hidden', String(opened)); },
          } });
          timeline.to('.hero-line-mask', { yPercent: -75, rotate: -2, stagger: .035, ease: 'none', duration: .55 }, 0)
            .to(primary, { clipPath: 'inset(0 0 100% 0)', y: -65, ease: 'none', duration: .55 }, .05)
            .fromTo(secondary, { clipPath: 'inset(100% 0 0 0)', y: 100 }, { clipPath: 'inset(0% 0 0 0)', y: 0, ease: 'power2.out', duration: .7 }, .32)
            .fromTo('.hero-domain-line', { yPercent: 100, rotateX: -35 }, { yPercent: 0, rotateX: 0, stagger: .08, duration: .55, ease: 'power2.out' }, .42);
          gsap.to('.hero-scroll-progress span', { scaleX: 1, transformOrigin: 'left', ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom bottom', scrub: true } });
        }
        const shell = document.querySelector('.gateway-shell');
        if (shell) {
          gsap.fromTo('.gateway', { clipPath: 'circle(8% at 50% 0%)' }, { clipPath: 'circle(155% at 50% 0%)', ease: 'none', scrollTrigger: { trigger: shell, start: 'top 94%', end: 'top 90px', scrub: .65 } });
          gsap.fromTo('.gateway-heading h2', { x: -65, y: 35 }, { x: 0, y: 0, ease: 'none', scrollTrigger: { trigger: shell, start: 'top 80%', end: 'top 90px', scrub: .8 } });
          gsap.to('.gateway-symbol', { y: -35, rotation: -8, ease: 'none', scrollTrigger: { trigger: shell, start: 'top 90px', end: 'bottom bottom', scrub: .8 } });
        }
      });
      return () => { context.revert(); if (primary) { primary.inert = false; primary.removeAttribute('aria-hidden'); } if (secondary) { secondary.inert = false; secondary.removeAttribute('aria-hidden'); } };
    });
    const progress = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => gsap.set('.reading-progress', { scaleX: self.progress, transformOrigin: 'left' }) });
    const sections = ['home', 'journey', 'work', 'about', 'skills', 'certificates'];
    const navigation = sections.flatMap(id => {
      const element = document.getElementById(id); if (!element) return [];
      return [ScrollTrigger.create({ trigger: element, start: 'top 45%', end: 'bottom 45%', onToggle: self => {
        const link = document.querySelector<HTMLAnchorElement>(`.scene-rail a[href="#${id}"]`);
        link?.classList.toggle('is-current', self.isActive);
        if (self.isActive) {
          link?.setAttribute('aria-current', 'location');
          document.querySelectorAll('.main-nav a').forEach(item => item.removeAttribute('aria-current'));
          const destination = id === 'work' ? '#/projects/all' : ['skills', 'certificates'].includes(id) ? '#about' : `#${id}`;
          document.querySelector(`.main-nav a[href="${destination}"]`)?.setAttribute('aria-current', 'location');
        } else link?.removeAttribute('aria-current');
      } })];
    });
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const refresh = () => { clearTimeout(refreshTimer); refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 120); };
    const root = document.getElementById('root');
    const resize = new ResizeObserver(refresh); if (root) resize.observe(root);
    let disposed = false;
    document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh(); });
    return () => { disposed = true; resize.disconnect(); clearTimeout(refreshTimer); progress.kill(); navigation.forEach(trigger => trigger.kill()); media.revert(); };
  }, [key]);
}
