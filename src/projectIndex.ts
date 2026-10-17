import type { Lang, Project } from './content';

export const categories = ['all', 'industry', 'ai', 'data', 'software', 'robotics'] as const;
export type Filter = typeof categories[number];
export const categoryById: Record<string, Exclude<Filter, 'all'>> = {
  lear: 'industry', renault: 'industry', texteguard: 'ai', 'soc-ips': 'ai', opencv: 'ai',
  'smart-city': 'data', 'emsi-analytics': 'data', medical: 'software', 'python-stock': 'software', arduino: 'robotics',
};
export function projectDate(project: Project, lang: Lang) {
  const format = (value: string) => /^\d{4}-\d{2}$/.test(value)
    ? new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', { month: 'short', year: 'numeric' }).format(new Date(`${value}-01T12:00:00`)) : value;
  return project.year.split('/').map(format).join(' – ');
}
