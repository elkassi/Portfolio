import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../content';

type Point = [number, number, number];
type ScreenPoint = [number, number];
const routes: Point[][] = [
  [[-134, -88, -92], [-88, -88, -92], [-58, -88, -62], [-58, -88, -18], [-34, -88, -18]],
  [[134, -88, 84], [88, -88, 84], [58, -88, 54], [58, -88, 18], [34, -88, 18]],
  [[-134, 0, 90], [-78, 0, 90], [-44, 0, 56], [-44, 0, 0], [38, 0, 0], [70, 0, -32], [134, 0, -32]],
  [[-134, 88, -90], [-78, 88, -90], [-42, 88, -54], [42, 88, -54], [78, 88, -18], [134, 88, -18]],
  [[-134, 88, 90], [-90, 88, 90], [-54, 88, 54], [54, 88, 54], [90, 88, 18], [134, 88, 18]],
];

/** A conceptual field map, drawn locally from geometry. No project imagery or live metrics. */
export default function EngineeringGraphic({ lang }: { lang: Lang }) {
  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const field = useRef(1);
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const repaint = useRef<() => void>(() => {});
  useEffect(() => { pausedRef.current = paused; repaint.current(); }, [paused]);

  useEffect(() => {
    const root = container.current;
    const surface = canvas.current;
    const ctx = surface?.getContext('2d');
    if (!root || !surface || !ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, time = 0, last = 0, visible = true;
    let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0;

    function render(stamp = 0) {
      if (!ctx || !surface) return;
      cancelAnimationFrame(frame);
      if (last && !motion.matches && !pausedRef.current) time += Math.min((stamp - last) / 1000, .05);
      last = stamp;
      pointerX += (targetX - pointerX) * .045;
      pointerY += (targetY - pointerY) * .045;
      const dark = document.documentElement.dataset.theme === 'dark';
      const ink = dark ? '#f4f5ff' : '#080d1c';
      const blue = dark ? '#9aafff' : '#214aff';
      const paper = dark ? '#101010' : '#ffffff';
      const size = Math.min(width / 570, height / 520);
      const yaw = -.57 + Math.sin(time * .36) * .32 + pointerX * .25;
      const tilt = .60 + Math.sin(time * .24) * .035 + pointerY * .14;
      const project = ([x, y, z]: Point): ScreenPoint => {
        if (!motion.matches) y += Math.sin(time * .8 + (y < -40 ? 0 : y < 40 ? .8 : 1.6)) * 5;
        const rx = x * Math.cos(yaw) - z * Math.sin(yaw);
        const rz = x * Math.sin(yaw) + z * Math.cos(yaw);
        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
        const perspective = 750 / (750 + depth);
        return [width * .52 + rx * perspective * size, height * .49 + ry * perspective * size];
      };
      const line = (points: Point[], color = ink, alpha = .27, lineWidth = .8, close = false) => {
        ctx.beginPath();
        points.forEach((point, i) => { const [x, y] = project(point); if (!i) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
        if (close) ctx.closePath();
        ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = lineWidth; ctx.stroke(); ctx.globalAlpha = 1;
      };
      const dot = (point: Point, radius = 2, color = blue) => {
        const [x, y] = project(point); ctx.beginPath(); ctx.arc(x, y, radius * size, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill();
      };
      ctx.clearRect(0, 0, width, height);

      // The orbit and registration marks give the object a shared drawing plane.
      ctx.setLineDash([2, 7]);
      line(Array.from({ length: 81 }, (_, i) => [Math.cos(i / 80 * Math.PI * 2) * 220, 130, Math.sin(i / 80 * Math.PI * 2) * 220] as Point), ink, .19);
      ctx.setLineDash([]);
      for (const x of [-112, 112]) for (const z of [-112, 112]) {
        line([[x, -88, z], [x, 88, z]], blue, .36, 1);
        dot([x, -88, z], 2.1); dot([x, 88, z], 2.1);
      }

      // Three separated circuit planes represent the three connected disciplines.
      [88, 0, -88].forEach((y, backToFront) => {
        const index = 2 - backToFront;
        const selected = index === field.current;
        const corners: Point[] = [[-137,y,-137],[137,y,-137],[137,y,137],[-137,y,137]];
        ctx.beginPath(); corners.forEach((p,i) => { const [x,py] = project(p); if (!i) ctx.moveTo(x,py); else ctx.lineTo(x,py); }); ctx.closePath();
        ctx.fillStyle = paper; ctx.globalAlpha = .94; ctx.fill(); ctx.globalAlpha = 1;
        line(corners, selected ? blue : ink, selected ? .95 : .45, selected ? 1.5 : 1, true);
        for (let grid = -90; grid <= 90; grid += 45) {
          line([[-137,y,grid],[137,y,grid]], ink, .09, .6);
          line([[grid,y,-137],[grid,y,137]], ink, .09, .6);
        }
        for (const x of [-124,124]) for (const z of [-124,124]) {
          const p = project([x,y,z]); ctx.strokeStyle = selected ? blue : ink; ctx.globalAlpha = .55; ctx.lineWidth = 1;
          ctx.strokeRect(p[0]-2*size,p[1]-2*size,4*size,4*size); ctx.globalAlpha = 1;
        }
        routes.filter(route => route[0][1] === y).forEach((route, routeIndex) => {
          line(route, selected ? blue : ink, selected ? .7 : .38, 1.3);
          if (!motion.matches) {
            const position = ((time * .23 + routeIndex * .41) % 1) * (route.length - 1);
            const segment = Math.floor(position), fraction = position - segment;
            const from = route[segment], to = route[Math.min(segment + 1, route.length - 1)];
            dot(from.map((value, axis) => value + (to[axis]-value)*fraction) as Point, selected ? 3.2 : 2.2, blue);
          }
          dot(route[0], 2, selected ? blue : ink); dot(route[route.length - 1], 2, selected ? blue : ink);
        });
        const chips = y === -88 ? [[0,0,37],[-87,69,16],[83,-76,17]] : y === 0 ? [[0,0,31],[-86,-78,18],[84,80,14]] : [[-64,0,24],[0,0,24],[64,0,24]];
        chips.forEach(([x,z,r]) => {
          const face: Point[] = [[x-r,y-13,z-r],[x+r,y-13,z-r],[x+r,y-13,z+r],[x-r,y-13,z+r]];
          const side: Point[] = [[x-r,y,z-r],[x+r,y,z-r],[x+r,y,z+r],[x-r,y,z+r]];
          face.forEach((point,i) => line([point,side[i]], selected ? blue : ink, .6, 1));
          line(side, selected ? blue : ink, .55, 1, true);
          ctx.beginPath(); face.forEach((p,i) => { const [px,py]=project(p); if (!i) ctx.moveTo(px,py); else ctx.lineTo(px,py); }); ctx.closePath();
          ctx.fillStyle = selected ? blue : ink; ctx.globalAlpha = selected ? .93 : .8; ctx.fill(); ctx.globalAlpha=1;
          line(face, selected ? blue : ink, 1, 1, true);
          for (let pin=-r+6; pin<r; pin+=8) {
            line([[x-r-6,y-6,z+pin],[x-r,y-6,z+pin]], selected ? blue : ink,.7,1);
            line([[x+r,y-6,z+pin],[x+r+6,y-6,z+pin]], selected ? blue : ink,.7,1);
          }
        });
      });

      // The labels remain ordinary links: mouse, touch and keyboard all reach the work.
      const anchors: { from: Point; to: ScreenPoint; index: number }[] = [
        { from: [-137,-88,-80], to: [width*.10,height*.17], index: 0 },
        { from: [137,0,-80], to: [width*.87,height*.24], index: 1 },
        { from: [137,88,80], to: [width*.82,height*.78], index: 2 },
      ];
      anchors.forEach(({from,to,index}) => {
        const start = project(from); ctx.beginPath(); ctx.moveTo(...start); ctx.lineTo(to[0],start[1]); ctx.lineTo(...to);
        ctx.strokeStyle=index===field.current?blue:ink; ctx.globalAlpha=index === field.current ? .8 : .32; ctx.lineWidth=.8;ctx.stroke();ctx.globalAlpha=1;dot(from,3,index===field.current?blue:ink);
      });
      if (visible && !document.hidden && !motion.matches && !pausedRef.current) frame = requestAnimationFrame(render);
    }
    const restart = () => { last = 0; render(); };
    repaint.current = restart;
    const size = () => {
      width = root.clientWidth; height = root.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, width < 600 ? 1.5 : 2);
      surface.width = width*dpr; surface.height=height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); restart();
    };
    const move = (event: PointerEvent) => {
      if (motion.matches || event.pointerType === 'touch') return;
      const bounds=root.getBoundingClientRect(); targetX=(event.clientX-bounds.left)/bounds.width*2-1; targetY=(event.clientY-bounds.top)/bounds.height*2-1;
    };
    const leave = () => { targetX=0;targetY=0; };
    const resize=new ResizeObserver(size); resize.observe(root);
    const inView=new IntersectionObserver(([entry])=>{ visible=entry.isIntersecting;if(visible) restart();else cancelAnimationFrame(frame); });inView.observe(root);
    const theme=new MutationObserver(restart);theme.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    root.addEventListener('pointermove',move);root.addEventListener('pointerleave',leave);
    document.addEventListener('visibilitychange',restart);motion.addEventListener('change',restart);size();
    return () => { cancelAnimationFrame(frame);resize.disconnect();inView.disconnect();theme.disconnect();root.removeEventListener('pointermove',move);root.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',restart);motion.removeEventListener('change',restart);repaint.current=()=>{}; };
  }, []);

  const fields = [
    { id:'industry',name:lang==='en'?'INDUSTRY':'INDUSTRIE', detail:lang==='en'?'02 projects':'02 projets',stack:'Java / React' },
    { id:'ai',name:'INTELLIGENCE',detail:lang==='en'?'03 projects':'03 projets',stack:'Python / NLP' },
    { id:'data',name:'DATA',detail:lang==='en'?'02 projects':'02 projets',stack:'SQL / Power BI' },
  ];
  return <div className="engineering-art" ref={container}>
    <div className="art-heading mono"><span>{lang==='en'?'CONNECTED DISCIPLINES':'DOMAINES CONNECTÉS'}</span><span aria-hidden="true">[ 01 — 03 ]</span></div>
    <canvas ref={canvas} aria-hidden="true"/>
    <nav className="art-fields" aria-label={lang==='en'?'Explore connected disciplines':'Explorer les domaines connectés'}>{fields.map((item,index)=><a href={`#/projects/${item.id}`} key={item.id} className={`art-field art-field-${index} ${active===index?'is-active':''}`} onPointerEnter={()=>{field.current=index;setActive(index);repaint.current();}} onFocus={()=>{field.current=index;setActive(index);repaint.current();}}><span className="art-field-index mono">0{index+1} / {item.detail}</span><strong>{item.name}<span aria-hidden="true">↗</span></strong><span className="art-field-stack mono">{item.stack}</span></a>)}</nav>
    <div className="art-controls"><span className="mono">{lang==='en'?'Move to rotate · select a field':'Bougez pour orienter · choisissez un domaine'}</span><button onClick={()=>setPaused(!paused)} aria-label={paused?(lang==='en'?'Play graphic':'Animer le schéma'):(lang==='en'?'Pause graphic':'Mettre le schéma en pause')} aria-pressed={paused}>{paused?<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 5 8 5-8 5Z"/></svg>:<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5v10M13 5v10"/></svg>}</button></div>
  </div>;
}
