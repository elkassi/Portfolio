import { useEffect, useRef, useState } from 'react';
import { learning } from '../content';
import type { Credential, Lang } from '../content';
import { ui } from '../copy';
import ActionIcon from './ActionIcon';

function credentialDate(item: Credential, lang: Lang) {
  return item.date ? new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', {
    day: 'numeric', month: 'short', year: 'numeric',
  }).format(new Date(`${item.date}T12:00:00`)) : item.year;
}

export default function Credentials({ lang }: { lang: Lang }) {
  const copy = ui[lang];
  const [selected, setSelected] = useState<Credential | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);
  const proofLabel = (item: Credential) => item.proofType === 'coursera' ? copy.verifyCoursera : copy.certificatePdf;
  return <section className="credentials section-space" id="certificates"><div className="wrap">
    <div className="credential-heading reveal">
      <span className="section-index mono">Coursera / Oracle / Wall Street English</span>
      <h2>{copy.credentials}</h2><p>{copy.credentialsBody}</p>
    </div>
    <div className="credential-list reveal">{learning.map((item, index) => {
      const information = <>
        <span className="credential-meta mono"><span>{String(index + 1).padStart(2, '0')}</span><time dateTime={item.date ?? item.year}>{credentialDate(item, lang)}</time></span>
        <h3>{item.title}</h3><span className="credential-issuer">{item.issuer}</span>
        <span className="credential-kind">{item.kind[lang]}</span>
        {item.proof && <span className="credential-proof">{proofLabel(item)}<ActionIcon kind="certificate"/></span>}
      </>;
      return <article className={`credential-row${item.preview ? ' has-preview' : ''}${item.proof ? ' has-proof' : ''}`} key={item.title}>
        {item.preview && <button type="button" className="credential-thumbnail" onClick={() => setSelected(item)} aria-label={`${copy.certificatePreview}: ${item.title}`} aria-haspopup="dialog">
          <img src={item.preview.src} width={item.preview.width} height={item.preview.height} loading="lazy" decoding="async" alt=""/>
          <span>{copy.certificatePreview}<span aria-hidden="true">+</span></span>
        </button>}
        {item.proof ? <a className="credential-info" href={item.proof} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} — ${proofLabel(item)} (${copy.opensNewTab})`}>{information}</a> : <div className="credential-info">{information}</div>}
      </article>;
    })}</div>
  </div>
  <dialog ref={dialog} className="credential-dialog" data-lenis-prevent aria-labelledby="credential-dialog-title" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => {
    if (event.key !== 'Tab') return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }}>
    {selected && <div className="credential-dialog-content">
      <header className="credential-dialog-header"><div><span className="small-label">{selected.issuer} · {credentialDate(selected, lang)}</span><h2 id="credential-dialog-title">{selected.title}</h2></div>
        <button type="button" autoFocus className="credential-close" onClick={() => dialog.current?.close()}>{copy.closeCertificate}<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
      </header>
      {selected.preview && <img className="credential-full-image" src={selected.preview.src} width={selected.preview.width} height={selected.preview.height} alt={`${copy.certificateImage} — ${selected.title}`}/>}
      <a className="black-button credential-original" href={selected.proof} target="_blank" rel="noopener noreferrer">{proofLabel(selected)}<ActionIcon kind="certificate"/><span className="credential-sr-only">({copy.opensNewTab})</span></a>
    </div>}
  </dialog></section>;
}
