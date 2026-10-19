type Action = 'project' | 'collection' | 'certificate' | 'document' | 'mail' | 'link' | 'home' | 'section' | 'scroll' | 'step' | 'restart' | 'check' | 'next' | 'previous' | 'clear';

/** Small, decorative action symbols; the surrounding control supplies its name. */
export default function ActionIcon({ kind = 'project' }: { kind?: Action }) {
  return <svg className={`action-icon action-icon-${kind}`} aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    {kind === 'project' && <><path d="M3 9V5a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v2"/><path d="M3 9h18l-3 11H3a2 2 0 0 1-2-2l2-9Z"/></>}
    {kind === 'collection' && <><rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/></>}
    {kind === 'certificate' && <><path d="m12 2 3 2 4 .5.5 4 2 3-2 3-.5 4-4 .5-3 2-3-2-4-.5-.5-4-2-3 2-3 .5-4L9 4Z"/><path d="m8 12 3 3 5-6"/></>}
    {kind === 'document' && <><path d="M14 2H5v20h14V7Z"/><path d="M14 2v5h5M8 12h8M8 16h8"/></>}
    {kind === 'mail' && <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></>}
    {kind === 'link' && <><path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 1 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"/></>}
    {kind === 'home' && <><path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-8h6v8"/></>}
    {kind === 'section' && <><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><path d="M8 12h8m-4-4v8"/></>}
    {kind === 'scroll' && <><rect x="7" y="2" width="10" height="20" rx="5"/><path d="M12 6v5"/></>}
    {kind === 'step' && <><rect x="2" y="9" width="5" height="6"/><rect x="10" y="9" width="5" height="6"/><path d="M19 9h3v6h-3"/></>}
    {kind === 'restart' && <><circle cx="12" cy="12" r="9"/><path d="M8 8v8m3-8 6 4-6 4Z"/></>}
    {kind === 'check' && <path d="m5 12 4 4L19 6"/>}
    {kind === 'next' && <><rect x="3" y="4" width="13" height="16"/><path d="M20 4v16M7 9h5m-5 4h5"/></>}
    {kind === 'previous' && <><rect x="8" y="4" width="13" height="16"/><path d="M4 4v16m8-11h5m-5 4h5"/></>}
    {kind === 'clear' && <path d="m6 6 12 12M18 6 6 18"/>}
  </svg>;
}
