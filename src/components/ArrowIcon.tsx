type Direction = 'up-right' | 'right' | 'down-right' | 'down' | 'down-left' | 'left' | 'up-left' | 'up';

const rotation: Record<Direction, number> = {
  'up-right': 0, right: 45, 'down-right': 90, down: 135,
  'down-left': 180, left: 225, 'up-left': 270, up: 315,
};

/** Decorative geometry avoids platform-specific emoji presentation. */
export default function ArrowIcon({ direction = 'up-right' }: { direction?: Direction }) {
  return <svg className="ui-arrow" aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
    <g transform={`rotate(${rotation[direction]} 12 12)`}><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></g>
  </svg>;
}
