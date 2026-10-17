import type { Localized } from './content';

export type CareerEntry = {
  id: string; kind: 'work' | 'education'; year: string; period?: Localized; company: string; role: Localized;
  intro: Localized; bullets: Localized[]; stack: string[]; projectId?: string;
};
export const career: CareerEntry[] = [
  {
    id: 'lear', kind: 'work', year: '2026', period: { en: 'July–August 2026', fr: 'Juillet–août 2026' }, company: 'Lear Corporation',
    role: { en: 'Software engineering intern · IT department', fr: 'Stagiaire en génie logiciel · Département IT' },
    intro: { en: 'An industrial planning application connecting production workload, allocation logic, and operational interfaces in an automotive manufacturing environment.', fr: 'Une application industrielle de planification reliant les charges de production, la logique de répartition et les interfaces opérationnelles dans l’industrie automobile.' },
    bullets: [
      { en: 'Modeled production data in SQL Server and developed Java / Spring Boot REST endpoints.', fr: 'Modélisation des données de production dans SQL Server et développement d’endpoints REST Java / Spring Boot.' },
      { en: 'Implemented iterative Greedy Waterfilling allocation logic to balance workload across production zones.', fr: 'Implémentation d’une logique de répartition itérative Greedy Waterfilling pour équilibrer la charge entre les zones de production.' },
      { en: 'Worked on material affinity and work-in-progress priorities to take operational constraints into account.', fr: 'Prise en compte des affinités matière et des priorités des encours dans la logique de planification.' },
      { en: 'Built React interfaces and workload heatmaps, with picklist automation and cache invalidation.', fr: 'Développement d’interfaces React et de cartes de charge, avec automatisation des picklists et invalidation du cache.' },
      { en: 'Tested and validated the application in an industrial context.', fr: 'Tests et validation de l’application en contexte industriel.' },
    ],
    stack: ['React 18', 'Java 21', 'Spring Boot', 'SQL Server', 'REST'], projectId: 'lear',
  },
  {
    id: 'renault', kind: 'work', year: '2025', period: { en: 'July–August 2025', fr: 'Juillet–août 2025' }, company: 'Renault Tanger',
    role: { en: 'Software development intern · Sous-Ensemble department', fr: 'Stagiaire en développement logiciel · Département Sous-Ensemble' },
    intro: { en: 'A tooling-management application for two distinct industrial inventories: maintenance and fabrication. The work spanned the interface, stock workflows, and desktop delivery.', fr: 'Une application de gestion d’outillage pour deux stocks industriels distincts : maintenance et fabrication. Un travail sur les interfaces, les mouvements de stock et la distribution desktop.' },
    bullets: [
      { en: 'Developed tool entry and exit, search, editing, restocking, and movement history.', fr: 'Développement des entrées et sorties d’outils, de la recherche, de l’édition, du réapprovisionnement et de l’historique des mouvements.' },
      { en: 'Implemented stock monitoring, critical-level alerts, and Excel import.', fr: 'Mise en place du suivi des stocks, d’alertes de seuil critique et de l’import Excel.' },
      { en: 'Integrated QR identification and tooling-ticket printing in ZPL for a Zebra ZT411 printer.', fr: 'Intégration de l’identification QR et de l’impression de tickets en ZPL pour une imprimante Zebra ZT411.' },
      { en: 'Built React / TypeScript interfaces and packaged the application with Electron for desktop use.', fr: 'Développement d’interfaces React / TypeScript et packaging Electron pour un usage desktop.' },
      { en: 'Evolved the application from an initial Flask / SQLite approach to a later packaged version using localStorage.', fr: 'Évolution d’une première approche Flask / SQLite vers une version packagée utilisant localStorage.' },
    ],
    stack: ['React', 'TypeScript', 'Electron', 'Tailwind CSS', 'QR / ZPL'], projectId: 'renault',
  },
  {
    id: 'emsi', kind: 'education', year: '2022–2027', company: 'EMSI Tanger',
    role: { en: 'Computer Science & Networks engineering · AI specialization', fr: 'Ingénierie informatique et réseaux · Spécialisation IA' },
    intro: { en: 'Fifth and final year at École Marocaine des Sciences de l’Ingénieur. Expected graduation in 2027, with a specialization in artificial intelligence.', fr: 'Cinquième et dernière année à l’École Marocaine des Sciences de l’Ingénieur. Diplôme prévu en 2027, avec une spécialisation en intelligence artificielle.' },
    bullets: [
      { en: 'Machine learning, data mining, NLP, and advanced AI / MLOps.', fr: 'Machine learning, data mining, NLP et IA avancée / MLOps.' },
      { en: 'Data engineering, ETL / ELT, Talend, and business intelligence.', fr: 'Data engineering, ETL / ELT, Talend et business intelligence.' },
      { en: 'Distributed systems, multi-agent systems, cloud computing, databases, and advanced networks.', fr: 'Systèmes distribués, systèmes multi-agents, cloud computing, bases de données et réseaux avancés.' },
      { en: 'Applied mathematics, statistics, operations research, and project management.', fr: 'Mathématiques appliquées, statistiques, recherche opérationnelle et gestion de projet.' },
    ],
    stack: ['AI', 'Data engineering', 'Software engineering'],
  },
];

export const perspectives: { title: Localized; word: Localized; text: Localized; detail: Localized; projectId: string }[] = [
  { title: { en: 'How I think', fr: 'Ma façon de réfléchir' }, word: { en: 'Understand.\nThen build.', fr: 'Comprendre.\nPuis construire.' }, text: { en: 'I’m drawn to the point where a model, a dataset, or a workflow becomes something people can actually use.', fr: 'Ce qui m’intéresse, c’est le moment où un modèle, des données ou un processus deviennent quelque chose de vraiment utilisable.' }, detail: { en: 'My academic work spans NLP, data analytics, computer vision, and distributed applications.', fr: 'Mes projets académiques touchent au NLP, à l’analyse de données, à la vision par ordinateur et aux applications distribuées.' }, projectId: 'texteguard' },
  { title: { en: 'What I build', fr: 'Ce que je développe' }, word: { en: 'Models meet\ninterfaces.', fr: 'Des modèles\naux interfaces.' }, text: { en: 'I enjoy connecting the pieces: a database, an API, application logic, and an interface that makes the result understandable.', fr: 'J’aime relier les différentes pièces : une base de données, une API, la logique applicative et une interface qui rend le résultat compréhensible.' }, detail: { en: 'At Lear and Renault, those pieces had to fit real industrial workflows. In team projects, I’ve also led frontend and UI/UX work.', fr: 'Chez Lear et Renault, ces éléments devaient s’intégrer à des processus industriels. En projet d’équipe, j’ai aussi piloté le frontend et l’UI/UX.' }, projectId: 'smart-city' },
  { title: { en: 'Where I’m going', fr: 'La suite du parcours' }, word: { en: 'Keep learning.\nMake it useful.', fr: 'Apprendre.\nRendre utile.' }, text: { en: 'I’m looking for a final-year internship where I can contribute to AI, data, or software projects and keep developing alongside an engineering team.', fr: 'Je recherche un stage PFE pour contribuer à des projets en IA, data ou logiciel et continuer à progresser au sein d’une équipe d’ingénierie.' }, detail: { en: 'Based in Tangier, open to opportunities in Morocco and internationally. I’m interested in how AI systems move from experimentation into practical use.', fr: 'Basé à Tanger, je suis ouvert aux opportunités au Maroc et à l’international. Je m’intéresse au passage de l’expérimentation IA à des usages concrets.' }, projectId: 'lear' },
];
