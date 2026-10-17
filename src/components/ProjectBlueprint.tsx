import { useId } from 'react';
import type { Lang } from '../content';

function Wire({ d, delay = 0 }: { d: string; delay?: number }) {
  return <g fill="none"><path className="bp-wire" d={d}/><path className="bp-flow" d={d} pathLength={100} style={{ animationDelay: `${delay}s` }}/></g>;
}
function Chip({ x, y, label, wide = false }: { x: number; y: number; label: string; wide?: boolean }) {
  const r = wide ? 84 : 66;
  return <g transform={`translate(${x} ${y})`} className="bp-chip"><path className="bp-paper" d={`M${-r} 0 0 38 ${r} 0v24L0 62 ${-r} 24Z`}/><path className="bp-accent-fill" d={`M${-r} 0 0 -38 ${r} 0 0 38Z`}/><path className="bp-wire" d="M0 38v24"/>{[-42,-21,0,21,42].map((p,i)=><g key={p}><path className="bp-wire" d={`M${-r+12+i*11} ${10+i*6}l-13 7M${r-12-i*11} ${10+i*6}l13 7`}/></g>)}<text className="bp-chip-label" textAnchor="middle" x="0" y="5">{label}</text></g>;
}
function Stack({ x, y, label = '', large = false }: { x: number; y: number; label?: string; large?: boolean }) {
  const r=large?68:45;
  return <g transform={`translate(${x} ${y})`}>{[30,15,0].map((offset,i)=><g key={offset} transform={`translate(0 ${offset})`}><path className={i===2?'bp-blue-plane':'bp-paper'} d={`M${-r} 0 0 ${-r*.5} ${r} 0 0 ${r*.5}Z`}/><path className="bp-wire" d={`M${-r} 0v10L0 ${r*.5+10} ${r} 10V0M0 ${r*.5}v10`}/></g>)}{label&&<text className="bp-label" textAnchor="middle" x="0" y={r*.5+70}>{label}</text>}</g>;
}
function Database({ x, y, label }: { x: number; y: number; label: string }) {
  return <g transform={`translate(${x} ${y})`}><path className="bp-paper" d="M-45-40v88c0 25 90 25 90 0v-88"/>{[-40,-12,16,46].map(n=><ellipse className={n===-40?'bp-blue-plane':'bp-wire'} key={n} cx="0" cy={n} rx="45" ry="15"/>)}<text className="bp-label" textAnchor="middle" x="0" y="95">{label}</text></g>;
}
function Document({ x,y,label }: { x:number;y:number;label:string }) {
  return <g transform={`translate(${x} ${y}) rotate(-9)`}><path className="bp-paper" d="M-43-65h62l24 25V65h-86Z"/><path className="bp-wire" d="M19-65v25h24M-25-20h49M-25-6h38M-25 8h48M-25 22h33"/><path className="bp-accent-line" d="M-25 42h46"/><text className="bp-label" textAnchor="middle" y="95">{label}</text></g>;
}
function Terminal({ x,y,label }: { x:number;y:number;label:string }) {
  return <g transform={`translate(${x} ${y})`}><rect className="bp-paper" x="-69" y="-57" width="138" height="100" rx="4"/><path className="bp-wire" d="M-69-35H69M-20 43v22M-43 65h86"/><circle className="bp-solid" cx="-54" cy="-46" r="2"/><circle className="bp-solid" cx="-45" cy="-46" r="2"/><path className="bp-accent-line" d="m-30-10 15 13-15 13m28 0h29"/><text className="bp-label" textAnchor="middle" y="96">{label}</text></g>;
}
function ProjectDrawing({ id,lang }: { id:string;lang:Lang }) {
  const en=lang==='en';
  if(id==='lear') return <>
    <Wire d="M125 110H205L260 155"/><Wire d="M125 195h80l55-35" delay={-.7}/><Wire d="M388 165h45l50-64h51" delay={-1.4}/><Wire d="M388 165h50l45 36h51" delay={-2.1}/>
    <Stack x={125} y={105}/><Stack x={125} y={190}/><Chip x={325} y={160} label="SPRING BOOT" wide/>
    <g transform="translate(495 75)">{[0,25,50].map((n,i)=><g key={n}><rect className="bp-paper" x="0" y={n} width="85" height="16"/><rect className="bp-accent-fill" x="0" y={n} width={[45,73,57][i]} height="16"/></g>)}<text className="bp-label" x="0" y="105">{en?'WORKLOAD':'CHARGE'}</text></g>
    <text className="bp-label" x="65" y="285">SQL SERVER</text><text className="bp-label" x="270" y="285">{en?'ALLOCATION LOGIC':'RÉPARTITION'}</text><path className="bp-wire" d="M490 216v25h95"/><circle className="bp-node" cx="535" cy="241" r="5"/>
  </>;
  if(id==='renault') return <>
    <Wire d="M128 180h115l30-20"/><Wire d="M390 160h45l45-40h40" delay={-1}/><Wire d="M390 170h55l40 75h55" delay={-2}/>
    <g transform="translate(85 100)">{[0,43,86].map(y=><g key={y}><rect className="bp-paper" x="0" y={y} width="85" height="31"/><path className="bp-wire" d={`M8 ${y+13}h28m15 0h25`}/></g>)}</g>
    <Chip x={325} y={160} label="ELECTRON" wide/><g transform="translate(510 80)"><rect className="bp-paper" x="-12" y="-12" width="87" height="88"/>{[[0,0],[44,0],[0,44]].map(([x,y])=><g key={`${x}-${y}`}><rect className="bp-wire" x={x} y={y} width="24" height="24"/><rect className="bp-solid" x={x+7} y={y+7} width="10" height="10"/></g>)}<path className="bp-accent-line" d="M35 34h20v12H35v20m25-14h10v15H48"/></g>
    <path className="bp-paper" d="M510 230h76v69h-76Z"/><path className="bp-wire" d="M522 246h53m-53 11h42m-42 11h47"/>
    <text className="bp-label" x="85" y="270">{en?'TOOL INVENTORY':'STOCK D’OUTILLAGE'}</text><text className="bp-label" x="493" y="198">QR / ZPL</text>
  </>;
  if(id==='texteguard') return <><Wire d="M160 156h90"/><Wire d="M388 156h90" delay={-1.6}/><Document x={115} y={145} label={en?'INPUT TEXT':'TEXTE'}/><Chip x={320} y={155} label="RoBERTa" wide/><Document x={525} y={145} label={en?'CLASSIFICATION':'CLASSIFICATION'}/><path className="bp-accent-line" d="m501 175 12 12 26-30"/><text className="bp-label" x="256" y="273">PYTHON / FLASK</text><path className="bp-wire" d="M180 290h280m-280-5v10m280-10v10"/></>;
  if(id==='smart-city') return <>
    <Wire d="M158 165h82l35-18"/><Wire d="M390 155h70l35-22" delay={-1}/>
    <g transform="translate(60 95)">{[[0,70],[30,30],[65,85],[100,48]].map(([x,h],i)=><g key={x} transform={`translate(${x} ${120-h})`}><path className={i===1?'bp-blue-plane':'bp-paper'} d={`M0 0 17-9 34 0v${h}l-17 9-17-9Z`}/><path className="bp-wire" d={`M0 0 17 9 34 0M17 9v${h}`}/></g>)}</g>
    <g className="bp-float"><Stack x={330} y={100} large/><Stack x={330} y={155} large/><Stack x={330} y={210} large/></g><Terminal x={525} y={145} label="REACT / RECHARTS"/>
    <text className="bp-label" x="64" y="293">{en?'URBAN DATA':'DONNÉES URBAINES'}</text><text className="bp-label" x="267" y="310">PYTHON PIPELINE</text>
  </>;
  if(id==='soc-ips') return <>
    {[[130,75],[90,170],[160,270],[510,85],[540,245]].map(([x,y],i)=><g key={x}><Wire d={`M${x} ${y} 320 160`} delay={-i*.5}/><circle className="bp-paper" cx={x} cy={y} r="27"/><path className="bp-accent-line" d={`M${x-10} ${y}h20m-10-10v20`}/><circle className="bp-orbit" cx={x} cy={y} r="36"/></g>)}
    <Chip x={320} y={155} label="NAIVE BAYES" wide/><text className="bp-label" x="241" y="286">{en?'MULTI-AGENT ANALYSIS':'ANALYSE MULTI-AGENTS'}</text>
  </>;
  if(id==='medical') return <>
    {[[130,75],[85,190],[210,285],[500,85],[545,235]].map(([x,y],i)=><g key={x}><Wire d={`M${x} ${y} 320 160`} delay={-i*.6}/><Stack x={x} y={y}/></g>)}
    <Chip x={320} y={155} label={en?'DOCTORS':'MÉDECINS'} wide/><path className="bp-accent-line" d="M309 85h22m-11-11v22"/><text className="bp-label" textAnchor="middle" x="320" y="258">SPRING BOOT / REST</text><text className="bp-label" x="460" y="312">06 MICROSERVICES</text>
  </>;
  if(id==='emsi-analytics') return <><Wire d="M154 165h95"/><Wire d="M389 165h76" delay={-1.7}/><Database x={110} y={140} label={en?'DATA MODEL':'MODÈLE DE DONNÉES'}/><Chip x={320} y={160} label="POWER QUERY" wide/><g transform="translate(475 80)"><rect className="bp-paper" x="0" y="0" width="115" height="145"/><path className="bp-wire" d="M0 24h115M15 125h84"/>{[35,71,53,88].map((h,i)=><rect className={i===2?'bp-solid':'bp-accent-fill'} key={i} x={19+i*22} y={125-h} width="12" height={h}/>)}</g><text className="bp-label" x="475" y="267">DAX / POWER BI</text><text className="bp-label" x="249" y="300">{en?'DATA TO DECISIONS':'DES DONNÉES AUX DÉCISIONS'}</text></>;
  if(id==='opencv') return <><Wire d="M170 160h80"/><Wire d="M390 160h75" delay={-1.8}/><g transform="translate(58 93)"><rect className="bp-paper" width="118" height="139"/><path className="bp-wire" d="m10 119 30-48 29 25 23-35 17 58"/><circle className="bp-blue-plane" cx="38" cy="33" r="14"/></g><Chip x={320} y={160} label="OpenCV" wide/><g transform="translate(478 102)">{Array.from({length:25},(_,i)=><rect className={(i%6===0||i===8||i===16)?'bp-accent-fill':'bp-paper'} key={i} x={i%5*22} y={Math.floor(i/5)*22} width="18" height="18"/>)}</g><text className="bp-label" x="65" y="275">{en?'IMAGE INPUT':'IMAGE SOURCE'}</text><text className="bp-label" x="467" y="275">{en?'IMAGE PROCESSING':'TRAITEMENT D’IMAGE'}</text></>;
  if(id==='arduino') return <>
    <g transform="translate(320 155) rotate(-17)"><path className="bp-paper" d="M-125-70h250v140h-250Z"/>{[[-108,-86],[81,-86],[-108,60],[81,60]].map(([x,y])=><g key={`${x}-${y}`}><rect className="bp-solid" x={x} y={y} width="29" height="30" rx="6"/>{[7,14,21].map(n=><path className="bp-wheel-line" key={n} d={`M${x+4} ${y+n}h21`}/>)}</g>)}<rect className="bp-accent-fill" x="-60" y="-44" width="120" height="88"/><rect className="bp-paper" x="-30" y="-24" width="60" height="48"/>{[-20,-10,0,10,20].map(x=><path className="bp-wire" key={x} d={`M${x}-30v-9m0 68v9`}/>)}<circle className="bp-paper" cx="133" cy="-27" r="17"/><circle className="bp-paper" cx="133" cy="27" r="17"/><path className="bp-accent-line" d="M-111 0h42m138 0h42"/></g>
    <path className="bp-orbit" d="M500 80q55 75 0 150m20-175q90 100 0 200"/><text className="bp-label" x="110" y="307">ARDUINO UNO / L298P / HM-10</text><text className="bp-label" x="68" y="77">4WD</text>
  </>;
  return <><Wire d="M160 110h80l40 48"/><Wire d="M160 225h80l40-48" delay={-.8}/><Wire d="M380 165h110" delay={-1.8}/><Stack x={115} y={105} label={en?'STOCK IN':'ENTRÉES'}/><Stack x={115} y={220} label={en?'STOCK OUT':'SORTIES'}/><Database x={330} y={150} label="SQL / SQLite"/><Terminal x={525} y={150} label="PYTHON / CRUD"/></>;
}

/** Original conceptual diagrams derived from the documented scope; no invented app screenshots. */
export default function ProjectBlueprint({ id,lang }: { id:string;lang:Lang }) {
  const pattern=useId().replace(/:/g,'');
  const views:Record<string,string>={lear:'45 55 560 255',renault:'55 55 555 265',texteguard:'40 55 570 255','smart-city':'35 55 590 275','soc-ips':'40 25 550 305',medical:'30 25 580 330','emsi-analytics':'40 35 570 285',opencv:'35 60 580 245',arduino:'30 30 590 300','python-stock':'40 65 575 265'};
  return <svg className="project-blueprint" viewBox={views[id]??'0 0 640 350'} fill="none" aria-hidden="true"><defs><pattern id={pattern} width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" className="bp-grid"/></pattern></defs><rect x="0" y="0" width="640" height="350" fill={`url(#${pattern})`}/><g className="bp-composition"><ProjectDrawing id={id} lang={lang}/></g></svg>;
}
