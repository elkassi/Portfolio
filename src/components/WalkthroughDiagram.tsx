import type { ReactNode, Ref } from 'react';
import type { Lang } from '../content';

type Point = { x: number; y: number };
type Variant = 'inference' | 'allocation' | 'pipeline' | 'network' | 'inventory';
const variants: Record<string, Variant> = {
  texteguard: 'inference', lear: 'allocation', 'smart-city': 'pipeline',
  'soc-ips': 'network', medical: 'network', renault: 'inventory', 'python-stock': 'inventory',
};

export function walkthroughLayout(id: string, count: number) {
  const variant = (count === 3 ? variants[id] : undefined) ?? 'pipeline';
  const points = Array.from({ length: count }, (_, i) => ({
    x: 115 + i * (460 / Math.max(count - 1, 1)),
    y: variant === 'pipeline' ? (i % 2 === 0 ? 138 : 106) : variant === 'network' && i === 1 ? 125 : 145,
  }));
  return { variant, points };
}

function Signal({ d, delay = 0 }: { d: string; delay?: number }) {
  return <g><path className="flow-wire" d={d}/><path className="flow-signal" pathLength={100} d={d} style={{ animationDelay: `${delay}s` }}/></g>;
}

function Stage({ point, index, active, label, children }: { point: Point; index: number; active: number; label: string; children: ReactNode }) {
  return <g transform={`translate(${point.x} ${point.y})`} className={`diagram-unit ${active === index ? 'is-active' : ''}`}>
    {children}
    <text className="diagram-stage-number" x="-60" y="-84">0{index + 1}</text>
    <text className="diagram-caption" textAnchor="middle" y="121">{label}</text>
  </g>;
}

function Inference({ active, points, lang }: { active: number; points: Point[]; lang: Lang }) {
  const en = lang === 'en';
  return <>
    <path className="diagram-guide" d="M45 145H645M345 35V275"/>
    <Signal d="M175 145H266"/><Signal d="M424 145H503" delay={-1.5}/>
    <Stage point={points[0]} index={0} active={active} label={en ? 'REACT / INPUT' : 'REACT / TEXTE'}>
      <path className="diagram-panel" d="M-55-61H29L55-35V65H-55Z"/>
      <path className="diagram-line" d="M29-61v26h26M-36-32h39M-36-15h70M-36 2h56M-36 19h65M-36 36h42"/>
      <path className="diagram-scan" d="M-45 50h90"/>
    </Stage>
    <Stage point={points[1]} index={1} active={active} label="RoBERTa / FLASK">
      <circle className="diagram-panel" r="64"/>
      <circle className="diagram-guide diagram-orbit" r="77"/>
      {[-28, 0, 28].map((y, i) => <g key={y}><path className="diagram-line" d={`M-29 ${y}L29 ${-y}M-29 ${y}H29`}/><circle className="diagram-node" cx="-29" cy={y} r={i === 1 ? 6 : 4}/><circle className="diagram-node" cx="29" cy={y} r={i === 1 ? 6 : 4}/></g>)}
      <text className="diagram-core-label" textAnchor="middle" y="88">NLP</text>
    </Stage>
    <Stage point={points[2]} index={2} active={active} label={en ? 'ANALYSIS / HISTORY' : 'ANALYSE / HISTORIQUE'}>
      <rect className="diagram-panel" x="-62" y="-61" width="124" height="90" rx="3"/>
      <path className="diagram-line" d="M-43-38H43M-43-19H15M-43 0H31M-50 46H55M-40 59H55M-30 72H55"/>
      <path className="diagram-emphasis" d="m28-10 9 9 18-22"/>
    </Stage>
  </>;
}

function Allocation({ active, points, lang }: { active: number; points: Point[]; lang: Lang }) {
  const en = lang === 'en';
  return <>
    <path className="diagram-guide" d="M35 55H655V242H35ZM230 55V242M460 55V242"/>
    <Signal d="M179 115H234V145H272"/><Signal d="M418 145H462V115H509" delay={-1.5}/>
    <Stage point={points[0]} index={0} active={active} label="SQL SERVER">
      {[-48, -8, 32].map((y, i) => <g key={y}><rect className="diagram-panel" x="-62" y={y} width="124" height="29"/><circle className="diagram-node diagram-led" cx="-45" cy={y + 14} r="3" style={{ animationDelay: `${i * -.5}s` }}/><path className="diagram-line" d={`M-31 ${y + 14}H42`}/></g>)}
      <text className="diagram-core-label" textAnchor="middle" y="90">{en ? 'PRODUCTION DATA' : 'DONNÉES DE PRODUCTION'}</text>
    </Stage>
    <Stage point={points[1]} index={1} active={active} label={en ? 'WORKLOAD ALLOCATION' : 'RÉPARTITION DES CHARGES'}>
      <rect className="diagram-panel" x="-69" y="-61" width="138" height="131"/>
      {Array.from({ length: 12 }, (_, i) => <rect key={i} className={[1, 5, 6, 10].includes(i) ? 'diagram-cell is-filled' : 'diagram-cell'} x={-53 + i % 4 * 28} y={-42 + Math.floor(i / 4) * 32} width="20" height="23"/>)}
      <path className="diagram-emphasis" d="M-53 61H53"/>
    </Stage>
    <Stage point={points[2]} index={2} active={active} label={en ? 'REACT / PLANNING' : 'REACT / PLANIFICATION'}>
      <rect className="diagram-panel" x="-64" y="-61" width="128" height="131"/>
      {[-36, -4, 28].map((y, i) => <g key={y}><path className="diagram-line" d={`M-46 ${y}H45`}/><rect className="diagram-bar" x="-46" y={y - 7} height="14" width={[48, 74, 60][i]}/></g>)}
      <path className="diagram-line" d="M-46 58H45"/>
    </Stage>
  </>;
}

function Pipeline({ active, points, labels }: { active: number; points: Point[]; labels: string[] }) {
  return <>
    <path className="flow-floor" d="M30 220 345 40 660 220 345 280Z"/>
    {points.slice(0, -1).map((point, i) => {
      const to = points[i + 1];
      return <Signal key={i} d={`M${point.x + 65} ${point.y + 12}H${(point.x + to.x) / 2}V${to.y + 12}H${to.x - 65}`} delay={-i * 1.5}/>;
    })}
    {points.map((point, i) => <g key={i} transform={`translate(${point.x} ${point.y})`} className={`flow-module ${active === i ? 'is-active' : ''}`}>
      <path className="flow-module-base" d="m-65 0 65-37L65 0v29L0 66-65 29Z"/><path className="flow-module-face" d="m-65 0 65-37L65 0 0 37Z"/>
      <path className="flow-module-edge" d="M0 37v29m-53-54-12 7m25 1-12 7m25 1-12 7m92-23 12 7m-25 1 12 7m-25 1 12 7"/>
      <text className="flow-module-number" textAnchor="middle" y="7">0{i + 1}</text><text className="flow-module-label" textAnchor="middle" y="109">{labels[i]}</text>
    </g>)}
  </>;
}

function Network({ active, points, lang, medical }: { active: number; points: Point[]; lang: Lang; medical: boolean }) {
  const en = lang === 'en';
  return <>
    <path className="diagram-guide" d="M25 256 345 22 665 256ZM25 256H665"/>
    <Signal d="M178 145H224V125H275"/><Signal d="M415 125H467V145H512" delay={-1.5}/>
    <Stage point={points[0]} index={0} active={active} label={medical ? 'REACT / VITE' : en ? 'SIMULATED SCENARIOS' : 'SCÉNARIOS SIMULÉS'}>
      {medical ? <><rect className="diagram-panel" x="-62" y="-51" width="124" height="92" rx="3"/><path className="diagram-line" d="M-62-29H62M-21 41v19M21 41v19M-39 60H39M-42-9H8M-42 8H38M-42 25H22"/></> : <>
        {[[-35, -33], [35, -33], [0, 35]].map(([x, y], i) => <g key={i}><path className="diagram-line" d={`M${x} ${y}L0 0`}/><circle className="diagram-panel" cx={x} cy={y} r="25"/><path className="diagram-emphasis" d={`M${x - 7} ${y}h14m-7-7v14`}/></g>)}
      </>}
    </Stage>
    <Stage point={points[1]} index={1} active={active} label={medical ? 'SPRING BOOT / REST' : 'WEKA / NAIVE BAYES'}>
      {(medical ? [0, 1, 2, 3, 4, 5] : [0, 2, 4]).map(i => {
        const angle = i * Math.PI / 3 - Math.PI / 2; const x = Math.cos(angle) * 70; const y = Math.sin(angle) * 65;
        return <g key={i}><path className="diagram-line" d={`M0 0L${x} ${y}`}/><circle className="diagram-panel" cx={x} cy={y} r="16"/><circle className="diagram-node diagram-led" cx={x} cy={y} r="3" style={{ animationDelay: `${i * -.4}s` }}/></g>;
      })}
      <circle className="diagram-core" r="34"/>
      <text className="diagram-core-label" textAnchor="middle" y="4">{medical ? 'REST' : 'NB'}</text>
      <text className="diagram-core-label" textAnchor="middle" y="96">{medical ? (en ? '6 TEAM SERVICES' : '6 SERVICES EN ÉQUIPE') : (en ? 'MULTI-AGENT PROTOTYPE' : 'PROTOTYPE MULTI-AGENTS')}</text>
    </Stage>
    <Stage point={points[2]} index={2} active={active} label={medical ? 'MYSQL' : 'SWING / JFREECHART'}>
      {medical ? <>
        <path className="diagram-panel" d="M-47-43V49c0 27 94 27 94 0v-92"/>
        {[-43, -12, 19, 49].map(y => <ellipse className="diagram-line" key={y} cy={y} rx="47" ry="15"/>)}
      </> : <>
        <rect className="diagram-panel" x="-62" y="-51" width="124" height="112" rx="3"/><path className="diagram-line" d="M-62-29H62M-44-12V43H45"/>
        <path className="diagram-emphasis" d="m-39 29 20-14 18 7L17-4 24 8 44-13"/>
      </>}
    </Stage>
  </>;
}

function Inventory({ active, points, lang, tooling }: { active: number; points: Point[]; lang: Lang; tooling: boolean }) {
  const en = lang === 'en';
  return <>
    <path className="diagram-guide" d="M35 55H655M35 238H655M35 49v12m620-12v12M35 232v12m620-12v12"/>
    <Signal d="M179 145H281"/><Signal d="M409 145H511" delay={-1.5}/>
    <Stage point={points[0]} index={0} active={active} label={tooling ? (en ? 'TWO INVENTORIES' : 'DEUX STOCKS') : (en ? 'ENTRIES / EXITS' : 'ENTRÉES / SORTIES')}>
      {[-58, 9].map((y, i) => <g key={i}><rect className="diagram-panel" x="-62" y={y} width="124" height="48"/><path className="diagram-line" d={`M-43 ${y + 17}H24M-43 ${y + 31}H5`}/><path className="diagram-emphasis" d={i === 0 ? `M32 ${y + 24}h17m-7-7 7 7-7 7` : `M49 ${y + 24}H32m7-7-7 7 7 7`}/></g>)}
    </Stage>
    <Stage point={points[1]} index={1} active={active} label={tooling ? (en ? 'MOVEMENT HISTORY' : 'HISTORIQUE DES MOUVEMENTS') : 'SQLITE / CRUD'}>
      {tooling ? <>
        <rect className="diagram-panel" x="-62" y="-61" width="124" height="131"/>
        <path className="diagram-line" d="M-62-34H62M-21-34V70M-62-8H62M-62 18H62M-62 44H62"/>
        {[-19, 7, 33, 59].map((y, i) => <path key={y} className="diagram-emphasis" d={`M-48 ${y}h14${i % 2 === 0 ? 'm-7-7v14' : ''}M-7 ${y}h49`}/>)}
      </> : <>
        <path className="diagram-panel" d="M-51-47V48c0 28 102 28 102 0v-95"/>
        {[-47, -15, 17, 48].map(y => <ellipse className="diagram-line" key={y} cy={y} rx="51" ry="16"/>)}
      </>}
    </Stage>
    <Stage point={points[2]} index={2} active={active} label={tooling ? 'QR / ZPL' : (en ? 'CRITICAL-STOCK DETECTION' : 'DÉTECTION DES SEUILS CRITIQUES')}>
      {tooling ? <>
        <rect className="diagram-panel" x="-59" y="-61" width="91" height="89"/>
        {[[-47, -49], [-9, -49], [-47, -11]].map(([x, y]) => <g key={`${x}-${y}`}><rect className="diagram-line" x={x} y={y} width="24" height="24"/><rect className="diagram-node" x={x + 7} y={y + 7} width="10" height="10"/></g>)}
        <path className="diagram-emphasis" d="M-9-11h12v15h16M-9 12H8"/>
        <path className="diagram-panel" d="M4 8H61V72H4Z"/><path className="diagram-line" d="M15 26H49M15 39H43M15 52H47"/>
      </> : <>
        <rect className="diagram-panel" x="-62" y="-61" width="124" height="131"/>
        <path className="diagram-line" d="M-45 37H45M-45-41V37"/>
        <path className="diagram-threshold" d="M-45 11H45"/>
        <path className="diagram-emphasis" d="m-40-27 22 9 18-4L20 5l22 19"/>
        <path className="diagram-node" d="m28-47 15 25H13Z"/><path className="diagram-dark-line" d="M28-40v8m0 3v2"/>
      </>}
    </Stage>
  </>;
}

/** Concept visuals of documented systems, never application screenshots or measured output. */
export default function WalkthroughDiagram({ id, active, lang, labels, count, focusRef }: { id: string; active: number; lang: Lang; labels: string[]; count: number; focusRef: Ref<SVGGElement> }) {
  const { variant, points } = walkthroughLayout(id, count);
  return <svg className={`flow-architecture diagram-${variant}`} data-diagram={variant} viewBox="0 0 690 310" fill="none" aria-hidden="true">
    {variant === 'inference' ? <Inference active={active} points={points} lang={lang}/> :
      variant === 'allocation' ? <Allocation active={active} points={points} lang={lang}/> :
      variant === 'network' ? <Network active={active} points={points} lang={lang} medical={id === 'medical'}/> :
      variant === 'inventory' ? <Inventory active={active} points={points} lang={lang} tooling={id === 'renault'}/> :
      <Pipeline active={active} points={points} labels={labels}/>}
    <g className="flow-reticle" ref={focusRef}>
      {variant === 'inference' ? <circle r="85" strokeDasharray="22 112"/> : variant === 'network' ? <path d="M-91-8v-14h14m168 14v-14h-14M-91 30v14h14m168-14v14h-14"/> :
        <path d="M-86-49v-24h18m136 0h18v24M-86 57v24h18m136 0h18V57"/>}
    </g>
  </svg>;
}
