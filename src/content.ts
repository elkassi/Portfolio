/**
 * Portfolio content. Source: the supplied French CV and portfolio brief.
 * Update availability and missingInformation here as new evidence arrives.
 * Empty dates, contributions and URLs are intentional: do not fabricate them.
 */
export type Lang = 'en' | 'fr';
export type Localized = { en: string; fr: string };
export type Category = 'ai' | 'data' | 'software' | 'exploration';

export interface Project {
  id: string;
  title: Localized;
  subtitle: Localized;
  category: Category;
  type: Localized;
  year: string;
  role: Localized;
  summary: Localized;
  stack: string[];
  featured: boolean;
  visual: 'nlp' | 'city' | 'soc' | 'industry' | 'inventory' | 'medical' | 'analytics' | 'vision' | 'robot' | 'sql';
  problem: Localized;
  contribution: Localized[];
  workflow: Localized[];
  outcome: Localized;
  note?: Localized;
  repo?: string;
  demo?: string;
  /** Only real supplied project screenshots belong here. */
  screenshots?: { src: string; alt: Localized }[];
}

export const profile = {
  name: 'Noureddine El Kassi',
  email: 'eknoureddine@gmail.com',
  location: { en: 'Tangier, Morocco', fr: 'Tanger, Maroc' },
  headline: {
    en: 'Final-year engineering student building AI, data, and software solutions.',
    fr: 'Élève ingénieur en dernière année, je développe des solutions en IA, data et logiciel.',
  },
  about: {
    en: 'I study Computer Science and Networks at EMSI Tanger, specializing in artificial intelligence. My projects connect NLP, data analysis, and software development with practical applications. Internships at Lear Corporation and Renault Tanger have also brought me into automotive manufacturing, where software has to work within real operational constraints.',
    fr: 'Étudiant en informatique et réseaux à l’EMSI Tanger, je me spécialise en intelligence artificielle. Mes projets relient le NLP, l’analyse de données et le développement logiciel à des usages concrets. Mes stages chez Lear Corporation et Renault Tanger m’ont aussi permis de découvrir l’industrie automobile et ses contraintes opérationnelles.',
  },
  cv: { fr: '/cv/noureddine-el-kassi-fr.pdf' } as { fr: string; en?: string },
  availability: {
    start: '2027-02',
    duration: { en: '4–6 months', fr: '4 à 6 mois' },
    label: {
      en: 'Seeking a final-year internship',
      fr: 'À la recherche d’un stage PFE',
    },
  },
  social: {} as { github?: string; linkedin?: string },
};

export const projects: Project[] = [
  {
    id: 'texteguard',
    title: { en: 'TexteGuard AI', fr: 'TexteGuard AI' },
    subtitle: { en: 'NLP text classification', fr: 'Classification de texte par NLP' },
    category: 'ai',
    type: { en: 'Academic project', fr: 'Projet académique' },
    year: '2025-04/2025-06',
    role: { en: 'Academic application project', fr: 'Projet d’application académique' },
    summary: {
      en: 'A RoBERTa-based application that assesses whether a text may be AI-generated, with confidence scores and an analysis history.',
      fr: 'Une application fondée sur RoBERTa pour estimer si un texte a été généré par une IA, avec scores de confiance et historique des analyses.',
    },
    stack: ['RoBERTa', 'Python', 'Flask', 'React', 'SQLite'],
    featured: true,
    visual: 'nlp',
    problem: {
      en: 'Explore AI-generated text classification through an application that makes model output accessible to a reader.',
      fr: 'Explorer la classification des textes générés par IA dans une application qui rend les résultats du modèle accessibles à l’utilisateur.',
    },
    contribution: [],
    workflow: [
      { en: 'Submit text through the React interface.', fr: 'Saisir un texte dans l’interface React.' },
      { en: 'Analyze the text using RoBERTa through the Python / Flask application.', fr: 'Analyser le texte avec RoBERTa via l’application Python / Flask.' },
      { en: 'Read the classification and confidence score, and consult the analysis history.', fr: 'Consulter la classification, le score de confiance et l’historique des analyses.' },
    ],
    outcome: {
      en: 'An academic application connecting an NLP model to a web interface and analysis history.',
      fr: 'Une application académique reliant un modèle NLP à une interface web et à un historique d’analyses.',
    },
    note: {
      en: 'AI text detection is an estimate, not proof of authorship. A confidence score does not guarantee that a prediction is correct.',
      fr: 'La détection de texte généré par IA reste une estimation, pas une preuve d’origine. Un score de confiance ne garantit pas la justesse d’une prédiction.',
    },
  },
  {
    id: 'lear',
    title: { en: 'Lear Corporation — Production Planner', fr: 'Lear Corporation — Planification de production' },
    subtitle: { en: 'Lear Corporation · Industrial software', fr: 'Lear Corporation · Logiciel industriel' },
    category: 'software',
    type: { en: 'Industry internship', fr: 'Stage en entreprise' },
    year: '2026-07/2026-08',
    role: { en: 'IT intern · Full-stack development', fr: 'Stagiaire IT · Développement full stack' },
    summary: {
      en: 'A production-planning application combining workload-aware distribution, operational interfaces, and a dashboard for an automotive manufacturing context.',
      fr: 'Une application de planification de production associant répartition selon la charge, interfaces opérationnelles et tableau de bord dans un contexte automobile.',
    },
    stack: ['React', 'Java', 'Spring Boot', 'SQL Server', 'REST APIs'],
    featured: true,
    visual: 'industry',
    problem: {
      en: 'Support production planning and the distribution of work while taking manufacturing workload into account.',
      fr: 'Accompagner la planification et la répartition du travail en tenant compte de la charge de production.',
    },
    contribution: [
      { en: 'Modeled the application database and developed REST endpoints.', fr: 'Modélisation de la base de données et développement d’endpoints REST.' },
      { en: 'Built React interfaces for planning and workload visualization.', fr: 'Développement d’interfaces React pour la planification et la visualisation des charges.' },
      { en: 'Worked on workload-aware distribution logic and industrial testing and validation.', fr: 'Travail sur la logique de répartition selon la charge, les tests et la validation en contexte industriel.' },
    ],
    workflow: [
      { en: 'Organize production and workload data in SQL Server.', fr: 'Structurer les données de production et de charge dans SQL Server.' },
      { en: 'Process planning and distribution through Spring Boot REST services.', fr: 'Traiter la planification et la répartition au moyen de services REST Spring Boot.' },
      { en: 'Present planning information and workload in the React interface.', fr: 'Présenter les informations de planification et de charge dans l’interface React.' },
    ],
    outcome: {
      en: 'A full-stack industrial planning application developed during my IT internship at Lear Corporation.',
      fr: 'Une application industrielle de planification full stack développée pendant mon stage IT chez Lear Corporation.',
    },
  },
  {
    id: 'smart-city',
    title: { en: 'Smart City IoT', fr: 'Smart City IoT' },
    subtitle: { en: 'Urban data, made readable', fr: 'Des données urbaines lisibles' },
    category: 'data',
    type: { en: 'Academic team project', fr: 'Projet académique en équipe' },
    year: '2025–2026',
    role: { en: 'Project lead · Frontend & UI/UX', fr: 'Chef de projet · Frontend et UI/UX' },
    summary: {
      en: 'An urban analytics platform combining a five-stage Python pipeline with an interactive dashboard and simulated real-time updates.',
      fr: 'Une plateforme d’analyse urbaine associant un pipeline Python en cinq étapes, un tableau de bord interactif et des mises à jour simulées en temps réel.',
    },
    stack: ['Python', 'MapReduce-style pipeline', 'React', 'Vite', 'Recharts', 'Node.js', 'WebSocket'],
    featured: true,
    visual: 'city',
    problem: {
      en: 'Turn environmental and traffic data into understandable views of anomalies, risk, and differences between urban zones.',
      fr: 'Transformer des données environnementales et de trafic en vues lisibles des anomalies, des risques et des différences entre zones urbaines.',
    },
    contribution: [
      { en: 'Led a team of five and coordinated the project.', fr: 'Pilotage d’une équipe de cinq personnes et coordination du projet.' },
      { en: 'Led frontend development and UI/UX design for the analytics dashboard.', fr: 'Responsabilité du développement frontend et de la conception UI/UX du tableau de bord.' },
    ],
    workflow: [
      { en: 'Clean and merge urban data in a Python MapReduce-style pipeline.', fr: 'Nettoyer et fusionner les données urbaines dans un pipeline Python de type MapReduce.' },
      { en: 'Identify anomalies, calculate risk scores, and rank zones.', fr: 'Identifier les anomalies, calculer les scores de risque et classer les zones.' },
      { en: 'Send simulated updates through Node.js and WebSocket to the React / Recharts dashboard.', fr: 'Transmettre les mises à jour simulées via Node.js et WebSocket au tableau de bord React / Recharts.' },
    ],
    outcome: {
      en: 'A team-built analytics platform that connects data processing to interactive visual exploration.',
      fr: 'Une plateforme réalisée en équipe qui relie le traitement des données à leur exploration visuelle interactive.',
    },
    note: {
      en: 'The live updates are simulated. This academic project does not represent a deployed city sensor network.',
      fr: 'Les mises à jour en direct sont simulées. Ce projet académique ne correspond pas à un réseau de capteurs déployé en ville.',
    },
  },
  {
    id: 'soc-ips',
    title: { en: 'Multi-agent SOC / IPS', fr: 'SOC / IPS multi-agents' },
    subtitle: { en: 'Security analysis & risk scoring', fr: 'Analyse de sécurité et scoring de risque' },
    category: 'ai',
    type: { en: 'Academic team project', fr: 'Projet académique en équipe' },
    year: '2026-03/2026-06',
    role: { en: 'Co-design · Classification & dashboard', fr: 'Co-conception · Classification et tableau de bord' },
    summary: {
      en: 'A multi-agent security platform exploring probabilistic classification and risk scoring through simulated security scenarios.',
      fr: 'Une plateforme de sécurité multi-agents explorant la classification probabiliste et le scoring de risque à partir de scénarios de sécurité simulés.',
    },
    stack: ['Java', 'Weka', 'Naive Bayes', 'Java Swing', 'JFreeChart'],
    featured: true,
    visual: 'soc',
    problem: {
      en: 'Explore how a multi-agent application can support the analysis and visualization of security events in a simulated environment.',
      fr: 'Explorer comment une application multi-agents peut aider à analyser et visualiser des événements de sécurité dans un environnement simulé.',
    },
    contribution: [
      { en: 'Co-designed the platform within the project team.', fr: 'Co-conception de la plateforme au sein de l’équipe projet.' },
      { en: 'Worked on the Java / Weka Naive Bayes module, feature engineering, and risk scoring.', fr: 'Travail sur le module Naive Bayes Java / Weka, la préparation des caractéristiques et le scoring de risque.' },
      { en: 'Contributed to the Java Swing / JFreeChart dashboard and simulated security scenarios.', fr: 'Contribution au tableau de bord Java Swing / JFreeChart et aux scénarios de sécurité simulés.' },
    ],
    workflow: [
      { en: 'Prepare features from simulated security scenarios.', fr: 'Préparer les caractéristiques issues des scénarios de sécurité simulés.' },
      { en: 'Apply probabilistic classification with Naive Bayes and calculate risk scores.', fr: 'Appliquer une classification probabiliste avec Naive Bayes et calculer des scores de risque.' },
      { en: 'Visualize analysis in the Swing / JFreeChart dashboard.', fr: 'Visualiser les analyses dans le tableau de bord Swing / JFreeChart.' },
    ],
    outcome: {
      en: 'An academic team prototype connecting machine learning, multi-agent design, and security visualization.',
      fr: 'Un prototype académique en équipe associant machine learning, conception multi-agents et visualisation de sécurité.',
    },
    note: {
      en: 'Evaluated through simulated scenarios; no production security performance is claimed.',
      fr: 'Étudié au moyen de scénarios simulés ; aucune performance en sécurité de production n’est revendiquée.',
    },
  },
  {
    id: 'renault',
    title: { en: 'Renault Tanger — Tooling Manager', fr: 'Renault Tanger — Gestion d’outillage' },
    subtitle: { en: 'Renault Tanger · Workshop operations', fr: 'Renault Tanger · Opérations d’atelier' },
    category: 'software',
    type: { en: 'Industry internship', fr: 'Stage en entreprise' },
    year: '2025-07/2025-08',
    role: { en: 'Software development intern', fr: 'Stagiaire en développement logiciel' },
    summary: {
      en: 'An inventory application for maintenance and fabrication tooling, covering stock movements, alerts, QR identification, and printed tickets.',
      fr: 'Une application de gestion des stocks d’outillage de maintenance et de fabrication, avec mouvements de stock, alertes, identification QR et tickets imprimés.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Electron', 'QR codes', 'ZPL'],
    featured: true,
    visual: 'inventory',
    problem: {
      en: 'Keep tooling information accessible across separate maintenance and fabrication inventories, from entry and exit to stock monitoring.',
      fr: 'Rendre l’information sur l’outillage accessible dans deux stocks distincts, maintenance et fabrication, des entrées et sorties au suivi des niveaux de stock.',
    },
    contribution: [
      { en: 'Developed interfaces for tool entry, exit, search, editing, and restocking.', fr: 'Développement des interfaces d’entrée, sortie, recherche, modification et réapprovisionnement des outils.' },
      { en: 'Worked on stock monitoring, critical-stock alerts, and Excel import.', fr: 'Travail sur le suivi des stocks, les alertes de stock critique et l’import Excel.' },
      { en: 'Integrated QR identification and tooling-ticket printing using ZPL.', fr: 'Intégration de l’identification QR et de l’impression de tickets d’outillage en ZPL.' },
      { en: 'Packaged the application for desktop use with Electron.', fr: 'Packaging de l’application avec Electron pour une utilisation sur poste de travail.' },
    ],
    workflow: [
      { en: 'Select the maintenance or fabrication inventory and find a tool.', fr: 'Sélectionner le stock de maintenance ou de fabrication, puis rechercher un outil.' },
      { en: 'Record stock movements and review stock levels and alerts.', fr: 'Enregistrer les mouvements et consulter les niveaux de stock et les alertes.' },
      { en: 'Identify tools with QR codes and print tooling tickets.', fr: 'Identifier les outils par QR code et imprimer les tickets d’outillage.' },
    ],
    outcome: {
      en: 'A tooling-management application developed during my internship at Renault Tanger, with separate maintenance and fabrication inventories.',
      fr: 'Une application de gestion d’outillage développée pendant mon stage chez Renault Tanger, avec des stocks distincts pour la maintenance et la fabrication.',
    },
    note: {
      en: 'Development evolved from an initial Flask / SQLite version to a later packaged version using localStorage. These are successive approaches, not simultaneous storage layers.',
      fr: 'Le développement a évolué d’une première version Flask / SQLite vers une version packagée utilisant localStorage. Il s’agit d’approches successives, pas de couches de stockage simultanées.',
    },
  },
  {
    id: 'medical',
    title: { en: 'Medical management', fr: 'Gestion médicale' },
    subtitle: { en: 'A six-service architecture', fr: 'Une architecture à six services' },
    category: 'software',
    type: { en: 'Academic team project', fr: 'Projet académique en équipe' },
    year: '2026-04',
    role: { en: 'Doctors service · Frontend', fr: 'Service Médecins · Frontend' },
    summary: {
      en: 'A medical-management application organized around six microservices. My scope covered the Doctors service and frontend interface work.',
      fr: 'Une application de gestion médicale organisée en six microservices. Mon périmètre portait sur le service Médecins et le travail d’interface frontend.',
    },
    stack: ['Java 17', 'Spring Boot', 'MySQL', 'REST APIs', 'React', 'Vite'],
    featured: true,
    visual: 'medical',
    problem: {
      en: 'Structure a medical-management application as a set of services, with a web interface for interacting with the system.',
      fr: 'Structurer une application de gestion médicale en plusieurs services, avec une interface web pour interagir avec le système.',
    },
    contribution: [
      { en: 'Worked on the Doctors microservice assigned to me within the team.', fr: 'Travail sur le microservice Médecins qui m’était attribué au sein de l’équipe.' },
      { en: 'Contributed to the React frontend interfaces.', fr: 'Contribution aux interfaces frontend React.' },
    ],
    workflow: [
      { en: 'A React / Vite frontend provides the application interface.', fr: 'Un frontend React / Vite fournit l’interface de l’application.' },
      { en: 'Spring Boot services expose REST APIs within the six-service architecture.', fr: 'Les services Spring Boot exposent des API REST dans une architecture à six services.' },
      { en: 'MySQL is used for application data.', fr: 'MySQL est utilisé pour les données de l’application.' },
    ],
    outcome: {
      en: 'A team-built academic system with a clearly defined personal contribution to one service and the frontend.',
      fr: 'Un système académique réalisé en équipe, avec une contribution personnelle définie sur un service et le frontend.',
    },
  },
  {
    id: 'emsi-analytics',
    title: { en: 'EMSI Analytics — Power BI', fr: 'EMSI Analytics — Power BI' },
    subtitle: { en: 'School data with Power BI', fr: 'Données scolaires avec Power BI' },
    category: 'data',
    type: { en: 'Academic project', fr: 'Projet académique' },
    year: '2026-06',
    role: { en: 'Project lead', fr: 'Chef de projet' },
    summary: {
      en: 'A Power BI dashboard exploring student demographics, absenteeism, and exam results.',
      fr: 'Un tableau de bord Power BI consacré à la démographie étudiante, à l’absentéisme et aux résultats d’examens.',
    },
    stack: ['Power BI', 'Power Query', 'DAX'],
    featured: false,
    visual: 'analytics',
    problem: {
      en: 'Bring several aspects of school data into a dashboard that supports exploration and comparison.',
      fr: 'Réunir plusieurs dimensions des données scolaires dans un tableau de bord facilitant l’exploration et la comparaison.',
    },
    contribution: [{ en: 'Led the academic analytics project.', fr: 'Pilotage du projet académique d’analyse de données.' }],
    workflow: [],
    outcome: {
      en: 'An academic dashboard covering three themes: student demographics, attendance, and examination results.',
      fr: 'Un tableau de bord académique couvrant trois thèmes : démographie étudiante, assiduité et résultats d’examens.',
    },
  },
  {
    id: 'opencv',
    title: { en: 'AI Presence', fr: 'AI Presence' },
    subtitle: { en: 'OpenCV exploration', fr: 'Exploration avec OpenCV' },
    category: 'exploration',
    type: { en: 'Academic work sample', fr: 'Travail académique' },
    year: '2026-05',
    role: { en: 'Academic project', fr: 'Projet académique' },
    summary: {
      en: 'An academic image-processing project using OpenCV.',
      fr: 'Un projet académique de traitement d’images avec OpenCV.',
    },
    stack: ['OpenCV'],
    featured: false,
    visual: 'vision',
    problem: { en: 'Explore image processing with OpenCV.', fr: 'Explorer le traitement d’images avec OpenCV.' },
    contribution: [],
    workflow: [],
    outcome: { en: 'Academic work in image processing.', fr: 'Travail académique en traitement d’images.' },
  },
  {
    id: 'arduino',
    title: { en: '4WD robotics', fr: 'Robotique 4WD' },
    subtitle: { en: 'Arduino hardware exploration', fr: 'Exploration matérielle avec Arduino' },
    category: 'exploration',
    type: { en: 'Academic work sample', fr: 'Travail académique' },
    year: '2024-06',
    role: { en: 'Robotics project', fr: 'Projet de robotique' },
    summary: {
      en: 'A four-wheel-drive robot project built around an Arduino Uno R3, motor control, sensing components, and Bluetooth hardware.',
      fr: 'Un projet de robot à quatre roues motrices autour d’un Arduino Uno R3, d’un contrôleur moteur, de capteurs et d’un module Bluetooth.',
    },
    stack: ['Arduino Uno R3', 'L298P', 'Ultrasonic sensor', 'Servo', 'I2C LED matrix', 'HM-10'],
    featured: false,
    visual: 'robot',
    problem: {
      en: 'Explore the relationship between sensing hardware, control logic, and robot movement.',
      fr: 'Explorer la relation entre les capteurs, la logique de commande et le déplacement d’un robot.',
    },
    contribution: [],
    workflow: [],
    outcome: { en: 'An academic robotics project using Arduino-based hardware.', fr: 'Un projet académique de robotique utilisant du matériel Arduino.' },
  },
  {
    id: 'python-stock',
    title: { en: 'Python stock management', fr: 'Gestion de stock Python' },
    subtitle: { en: 'Inventory tracking & critical-stock detection', fr: 'Suivi des stocks et détection des seuils critiques' },
    category: 'software',
    type: { en: 'Software project', fr: 'Projet logiciel' },
    year: '2025-03/2025-06',
    role: { en: 'Python application & SQL database development', fr: 'Développement de l’application Python et de la base SQL' },
    summary: {
      en: 'An automated Python application for tracking stock entries, exits, and current inventory levels, with SQLite storage and automatic critical-stock detection.',
      fr: 'Une application automatisée en Python pour suivre les entrées, les sorties et les niveaux de stock, avec stockage SQLite et détection automatique des seuils critiques.',
    },
    stack: ['Python', 'SQLite', 'SQL'],
    featured: false,
    visual: 'inventory',
    problem: {
      en: 'Keep inventory movements and stock levels up to date, and identify critical levels automatically.',
      fr: 'Maintenir à jour les mouvements et les niveaux de stock et identifier automatiquement les seuils critiques.',
    },
    contribution: [
      { en: 'Developed the automated stock-management application in Python.', fr: 'Développement de l’application automatisée de gestion de stock en Python.' },
      { en: 'Designed the SQL / SQLite database and implemented create, read, update, and delete operations.', fr: 'Conception de la base SQL / SQLite et implémentation des opérations de création, lecture, modification et suppression.' },
      { en: 'Implemented automatic critical-stock detection.', fr: 'Implémentation de la détection automatique des niveaux de stock critiques.' },
    ],
    workflow: [
      { en: 'Record inventory entries and exits in the Python application.', fr: 'Enregistrer les entrées et les sorties de stock dans l’application Python.' },
      { en: 'Store and update inventory information in SQLite using SQL operations.', fr: 'Stocker et mettre à jour les informations d’inventaire dans SQLite au moyen d’opérations SQL.' },
      { en: 'Monitor current levels and detect critical stock thresholds automatically.', fr: 'Suivre les niveaux de stock et détecter automatiquement les seuils critiques.' },
    ],
    outcome: {
      en: 'A stock-management application combining inventory tracking, database operations, and automated threshold detection.',
      fr: 'Une application de gestion de stock associant suivi d’inventaire, opérations sur la base de données et détection automatique des seuils.',
    },
  },

];

export const experiences: {
  company: string;
  role: Localized;
  period: Localized;
  description: Localized;
  projectId: string;
}[] = [
  {
    company: 'Lear Corporation',
    role: { en: 'IT internship', fr: 'Stage IT' },
    period: { en: 'July–August 2026', fr: 'Juillet–août 2026' },
    description: {
      en: 'Full-stack development of an industrial production-planning application with React, Spring Boot, and SQL Server, in Tangier.',
      fr: 'Développement full stack d’une application industrielle de planification de production avec React, Spring Boot et SQL Server, à Tanger.',
    },
    projectId: 'lear',
  },
  {
    company: 'Renault Tanger',
    role: { en: 'Software development internship', fr: 'Stage en développement logiciel' },
    period: { en: 'July–August 2025', fr: 'Juillet–août 2025' },
    description: {
      en: 'Development of a tooling-management application for maintenance and fabrication inventories, with desktop packaging, QR identification, and printed tickets.',
      fr: 'Développement d’une application de gestion d’outillage pour les stocks de maintenance et de fabrication, avec packaging desktop, identification QR et tickets imprimés.',
    },
    projectId: 'renault',
  },
];

export const skillGroups: {
  title: Localized;
  skills: string[];
  context: Localized;
  projectIds: string[];
}[] = [
  {
    title: { en: 'AI & NLP', fr: 'IA et NLP' },
    skills: ['Python', 'RoBERTa', 'Weka', 'Naive Bayes', 'OpenCV'],
    context: {
      en: 'Applied in academic projects. Machine learning, advanced AI, and MLOps are also part of my engineering coursework.',
      fr: 'Mis en pratique dans des projets académiques. Le machine learning, l’IA avancée et le MLOps font également partie de ma formation d’ingénieur.',
    },
    projectIds: ['texteguard', 'soc-ips', 'opencv'],
  },
  {
    title: { en: 'Data & business intelligence', fr: 'Data et business intelligence' },
    skills: ['Python', 'SQL', 'Power BI', 'Power Query', 'DAX', 'SQL Server', 'MySQL', 'SQLite', 'Oracle'],
    context: {
      en: 'Projects in data processing, visualization, and databases. ETL/ELT, Talend, and data engineering are covered in coursework.',
      fr: 'Projets en traitement de données, visualisation et bases de données. L’ETL/ELT, Talend et la data engineering sont abordés en cours.',
    },
    projectIds: ['smart-city', 'emsi-analytics', 'python-stock'],
  },
  {
    title: { en: 'Full-stack development', fr: 'Développement full stack' },
    skills: ['React', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'REST APIs', 'Flask', 'Node.js', 'Tailwind CSS', 'Electron'],
    context: {
      en: 'Used across industrial internships and academic web applications, from database modeling to application interfaces.',
      fr: 'Pratique acquise en stages industriels et dans des applications web académiques, de la modélisation des données aux interfaces.',
    },
    projectIds: ['lear', 'renault', 'medical', 'python-stock'],
  },
  {
    title: { en: 'Engineering practices', fr: 'Pratiques d’ingénierie' },
    skills: ['Git', 'Docker', 'Linux', 'UML', 'UI/UX'],
    context: {
      en: 'Project coordination, database modeling, and testing complement my development work. Git, Docker, Linux, and UML are listed in my technical background; distributed systems and cloud computing are part of my studies.',
      fr: 'La coordination de projet, la modélisation de données et les tests complètent mon travail de développement. Git, Docker, Linux et UML figurent dans mon parcours technique ; les systèmes distribués et le cloud font partie de mes études.',
    },
    projectIds: ['smart-city', 'lear', 'medical'],
  },
];

export const education: {
  title: Localized;
  school: string;
  period: string;
  description: Localized;
}[] = [
  {
    title: {
      en: 'Engineering studies · Computer Science & Networks',
      fr: 'Cycle ingénieur · Informatique et réseaux',
    },
    school: 'École Marocaine des Sciences de l’Ingénieur — EMSI Tanger',
    period: '2022–2027',
    description: {
      en: 'Fifth and final year, specializing in artificial intelligence. Expected graduation in 2027. Coursework includes machine learning, data engineering, distributed systems, business intelligence, and advanced AI / MLOps.',
      fr: 'Cinquième et dernière année, spécialisation en intelligence artificielle. Diplôme prévu en 2027. Enseignements : machine learning, data engineering, systèmes distribués, business intelligence et IA avancée / MLOps.',
    },
  },
  {
    title: { en: 'Scientific baccalaureate', fr: 'Baccalauréat scientifique' },
    school: 'Groupe Scolaire Moulay Abdelaziz',
    period: '2017',
    description: { en: 'Secondary education in Morocco.', fr: 'Enseignement secondaire au Maroc.' },
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Arabic', fr: 'Arabe' }, level: { en: 'Native', fr: 'Langue maternelle' } },
  { name: { en: 'French', fr: 'Français' }, level: { en: 'Fluent', fr: 'Courant' } },
  { name: { en: 'English', fr: 'Anglais' }, level: { en: 'C1 · Wall Street English level 20', fr: 'C1 · Wall Street English niveau 20' } },
];

/** CV-listed learning. Certificates and credential links have not been supplied. */
export const learning: { title: string; issuer: string; kind: Localized; year?: string; proof?: string }[] = [
  { title: 'Oracle Database Administration 19', issuer: 'Oracle', kind: { en: 'Certificate', fr: 'Certification' }, year: '2026' },
  { title: 'Introduction to Machine Learning', issuer: 'Duke University', kind: { en: 'CV-listed course', fr: 'Cours mentionné dans le CV' } },
  { title: 'Introduction to Big Data', issuer: 'University of California San Diego', kind: { en: 'CV-listed course', fr: 'Cours mentionné dans le CV' } },
  { title: 'Introduction to NoSQL Databases', issuer: 'IBM', kind: { en: 'CV-listed course', fr: 'Cours mentionné dans le CV' } },
  { title: 'Agile Project Management', issuer: 'Google', kind: { en: 'CV-listed course', fr: 'Cours mentionné dans le CV' } },
  { title: 'Level 20 Mastery', issuer: 'Wall Street English', kind: { en: 'CV-listed language learning', fr: 'Formation linguistique mentionnée dans le CV' }, year: '2025' },
];

/** Internal editorial checklist. Do not render this as public portfolio content. */
export const missingInformation: { id: string; detail: string }[] = [
  { id: 'project-assets', detail: 'Supply project screenshots, reports, source code, and any real repository/demo links. Check company and personal data before publishing assets.' },
  { id: 'social-links', detail: 'Supply the actual LinkedIn and GitHub profile URLs. They remain hidden until provided.' },
  { id: 'english-cv', detail: 'Supply an approved English CV. Only the supplied French CV is offered for download.' },
  { id: 'lear-scope', detail: 'Reconcile sewing-box planning/distribution in the brief with the MG-CMS cutting-management description in the CV before expanding the industrial case study.' },
  { id: 'lear-method-results', detail: 'Confirm the allocation method and the context/evidence for CV-reported machine, workload, zone, and material figures. Metrics, Greedy Waterfilling details, and an AI claim are omitted.' },

  { id: 'renault-versions', detail: 'Provide version history or code to clarify the transition from Flask/SQLite to the packaged localStorage version and which features belonged to each version.' },
  { id: 'texteguard-contribution', detail: 'Confirm personal responsibilities, team composition, model/data provenance, and evaluation details for TexteGuard AI. No accuracy or sole-authorship claim is displayed.' },
  { id: 'medical-details', detail: 'Supply Doctors-service endpoints, service interactions, and documentation. Project date confirmed as April 2026. Only the assigned Doctors service and frontend scope are attributed personally.' },
  { id: 'power-bi-details', detail: 'Supply Power BI screenshots, data source/model, actual measures, and precise personal contribution beyond project leadership. Date confirmed as June 2026.' },
  { id: 'opencv-details', detail: 'AI Presence is the user-confirmed title for the OpenCV project. Confirm language, processing methods, inputs/outputs, personal contribution, and results. Date confirmed as May 2026.' },
  { id: 'arduino-details', detail: 'Confirm the robotics personal contribution and which line-following, obstacle-avoidance, or follow-me modes were implemented and tested. Date confirmed as June 2024. No completed mode is currently claimed.' },
  { id: 'credentials', detail: 'Supply certificate documents, exact titles, dates, and credential links for CV-listed courses, Oracle training, the unspecified August 2026 Coursera certificate, and Wall Street English Level 20. None is presented as a verified certificate.' },
  { id: 'education-history', detail: 'Confirm dates and any qualification for earlier economics studies. No economics degree is inferred or published.' },
  { id: 'academic-marks', detail: 'Provide evidence and precise context for optional semester/module marks before adding them. No overall degree GPA is inferred.' },
  { id: 'additional-work', detail: 'Supply documentation for any additional NLP, RAG, generative-AI, or diffusion coursework before adding public entries.' },
  { id: 'portrait', detail: 'Optional: supply a portrait you want to publish. The current design uses a typographic identity.' },
  { id: 'availability', detail: 'Reconfirm the preferred February 2027 start nearer the search period; January or March alternatives depend on academic scheduling.' },
];
