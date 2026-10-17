import type { Localized } from './content';

export type FlowLabel = { title:Localized; tech:string|Localized };
type Editorial = { challenge:Localized; result:Localized; steps:FlowLabel[] };
const l=(en:string,fr:string):Localized=>({en,fr});
/** Short display copy derived from the documented project scope, without new result claims. */
export const caseEditorial:Record<string,Editorial>={
  texteguard:{challenge:l('Make model output understandable.','Rendre le résultat du modèle lisible.'),result:l('NLP, connected to the web.','Le NLP, relié à une interface web.'),steps:[{title:l('Enter the text','Saisir le texte'),tech:'REACT'},{title:l('Analyze with RoBERTa','Analyser avec RoBERTa'),tech:'PYTHON / FLASK'},{title:l('Read the analysis','Lire l’analyse'),tech:l('CLASSIFICATION / HISTORY','CLASSIFICATION / HISTORIQUE')}]},
  lear:{challenge:l('Plan around real workloads.','Planifier selon les charges réelles.'),result:l('From production data to planning.','Des données de production à la planification.'),steps:[{title:l('Organize the data','Structurer les données'),tech:'SQL SERVER'},{title:l('Process the allocation','Traiter la répartition'),tech:'SPRING BOOT / REST'},{title:l('Visualize the plan','Visualiser le planning'),tech:'REACT'}]},
  'smart-city':{challenge:l('Make urban data readable.','Rendre les données urbaines lisibles.'),result:l('A pipeline with an interactive view.','Un pipeline et une vue interactive.'),steps:[{title:l('Clean and merge','Nettoyer et fusionner'),tech:'PYTHON / MAPREDUCE'},{title:l('Analyze and rank','Analyser et classer'),tech:l('ANOMALIES / RISK','ANOMALIES / RISQUE')},{title:l('Explore the dashboard','Explorer le tableau de bord'),tech:'REACT / RECHARTS'}]},
  'soc-ips':{challenge:l('Understand simulated security events.','Comprendre les événements de sécurité simulés.'),result:l('Classification meets monitoring.','La classification rencontre la visualisation.'),steps:[{title:l('Prepare the features','Préparer les caractéristiques'),tech:l('SIMULATED SCENARIOS','SCÉNARIOS SIMULÉS')},{title:l('Classify and score','Classer et scorer'),tech:'WEKA / NAIVE BAYES'},{title:l('Visualize the analysis','Visualiser l’analyse'),tech:'SWING / JFREECHART'}]},
  renault:{challenge:l('Keep tooling movements visible.','Garder une vue claire des mouvements d’outillage.'),result:l('Inventory, built for the workshop.','La gestion de stock, pensée pour l’atelier.'),steps:[{title:l('Find the tool','Rechercher l’outil'),tech:'MAINTENANCE / FABRICATION'},{title:l('Track movements','Suivre les mouvements'),tech:l('STOCK / ALERTS','STOCK / ALERTES')},{title:l('Identify and print','Identifier et imprimer'),tech:'QR / ZPL'}]},
  medical:{challenge:l('Connect a six-service application.','Relier une application à six services.'),result:l('Doctors service + frontend.','Service Médecins + frontend.'),steps:[{title:l('Use the interface','Utiliser l’interface'),tech:'REACT / VITE'},{title:l('Connect the services','Relier les services'),tech:'SPRING BOOT / REST'},{title:l('Store application data','Stocker les données'),tech:'MYSQL'}]},
  'emsi-analytics':{challenge:l('Bring school data into focus.','Clarifier les données scolaires.'),result:l('Three themes. One dashboard.','Trois thèmes. Un tableau de bord.'),steps:[]},
  opencv:{challenge:l('Explore image processing.','Explorer le traitement d’images.'),result:l('An academic OpenCV project.','Un projet académique avec OpenCV.'),steps:[]},
  arduino:{challenge:l('Explore a 4WD robotic platform.','Explorer une plateforme robotique 4WD.'),result:l('An Arduino-based hardware project.','Un projet matériel autour d’Arduino.'),steps:[]},
  'python-stock':{challenge:l('Keep stock levels current.','Maintenir les niveaux de stock à jour.'),result:l('Inventory tracking. Automated alerts.','Suivi des stocks. Alertes automatisées.'),steps:[{title:l('Record movements','Enregistrer les mouvements'),tech:'PYTHON'},{title:l('Update the inventory','Mettre à jour l’inventaire'),tech:'SQL / SQLITE / CRUD'},{title:l('Detect critical levels','Détecter les seuils critiques'),tech:l('AUTOMATIC DETECTION','DÉTECTION AUTOMATIQUE')}]},
};

/** Supporting detail from content.ts / experience.ts and the confirmed handoff.
 * Missing technical evidence stays missing; these notes do not infer implementation choices.
 */
export const walkthroughNotes:Record<string,Localized[][]>={
  texteguard:[
    [l('React provides the web interface; model analysis runs in the Python / Flask application.','React fournit l’interface web ; l’analyse du modèle s’effectue dans l’application Python / Flask.')],
    [l('RoBERTa is the NLP model used to estimate whether text may be AI-generated.','RoBERTa est le modèle NLP utilisé pour estimer si un texte a été généré par une IA.')],
    [l('The classification, confidence score and analysis history make the output accessible to a reader.','La classification, le score de confiance et l’historique rendent le résultat accessible à l’utilisateur.'),l('The confidence score is an estimate and does not guarantee a correct prediction.','Le score de confiance reste une estimation et ne garantit pas la justesse de la prédiction.')],
  ],
  lear:[
    [l('The SQL Server model brings together production data and workload information.','Le modèle SQL Server réunit les données de production et les informations de charge.'),l('Java / Spring Boot REST endpoints connect the data model to the application.','Les endpoints REST Java / Spring Boot relient le modèle de données à l’application.')],
    [l('Iterative Greedy Waterfilling balances workload across production zones.','Une répartition itérative Greedy Waterfilling équilibre la charge entre les zones de production.'),l('Material affinity and work-in-progress priorities account for operational constraints.','Les affinités matière et les priorités des encours prennent en compte les contraintes opérationnelles.')],
    [l('React interfaces and workload heatmaps support the planning view.','Les interfaces React et les cartes de charge accompagnent la vue de planification.'),l('The work also covered picklist automation, cache invalidation and industrial testing.','Le travail couvrait aussi l’automatisation des picklists, l’invalidation du cache et les tests en contexte industriel.')],
  ],
  'smart-city':[
    [l('The project uses a five-stage Python MapReduce-style pipeline for environmental and traffic data.','Le projet utilise un pipeline Python de type MapReduce en cinq étapes pour les données environnementales et de trafic.')],
    [l('Analysis covers anomalies, risk scores and rankings that support comparisons between urban zones.','L’analyse porte sur les anomalies, les scores de risque et les classements pour comparer les zones urbaines.')],
    [l('React / Vite and Recharts present the processed data in an interactive dashboard.','React / Vite et Recharts présentent les données traitées dans un tableau de bord interactif.'),l('Node.js and WebSocket deliver simulated updates. My role was project lead and frontend / UI/UX lead in a team of five.','Node.js et WebSocket transmettent des mises à jour simulées. Mon rôle était chef de projet et responsable frontend / UI/UX dans une équipe de cinq personnes.')],
  ],
  'soc-ips':[
    [l('Feature engineering uses simulated security scenarios, which also define the evaluation context.','La préparation des caractéristiques s’appuie sur des scénarios de sécurité simulés, qui définissent aussi le contexte d’évaluation.')],
    [l('The classification module uses Java / Weka and Naive Bayes.','Le module de classification utilise Java / Weka et Naive Bayes.'),l('My contribution includes feature engineering, probabilistic classification and risk scoring within the team prototype.','Ma contribution comprend la préparation des caractéristiques, la classification probabiliste et le scoring de risque au sein du prototype en équipe.')],
    [l('Java Swing provides the interface and JFreeChart provides the charts.','Java Swing fournit l’interface et JFreeChart les graphiques.'),l('I contributed to the dashboard and simulated scenarios as part of the project team.','J’ai contribué au tableau de bord et aux scénarios simulés au sein de l’équipe projet.')],
  ],
  renault:[
    [l('Maintenance and fabrication use separate tooling inventories.','La maintenance et la fabrication disposent de stocks d’outillage distincts.'),l('The interfaces cover tool search, editing and restocking.','Les interfaces couvrent la recherche, la modification et le réapprovisionnement des outils.')],
    [l('Entries, exits and movement history keep inventory movements visible.','Les entrées, les sorties et l’historique rendent les mouvements de stock visibles.'),l('Critical-stock alerts and Excel import support stock monitoring.','Les alertes de stock critique et l’import Excel accompagnent le suivi des stocks.')],
    [l('QR codes identify tools; ZPL tickets are printed using a Zebra ZT411.','Les QR codes identifient les outils ; les tickets ZPL sont imprimés avec une Zebra ZT411.'),l('React / TypeScript interfaces are packaged for desktop use with Electron.','Les interfaces React / TypeScript sont packagées avec Electron pour un usage desktop.')],
  ],
  medical:[
    [l('My frontend contribution forms part of the team’s React / Vite application.','Ma contribution frontend s’inscrit dans l’application React / Vite réalisée en équipe.')],
    [l('The architecture contains six Spring Boot microservices exposing REST APIs.','L’architecture comprend six microservices Spring Boot exposant des API REST.'),l('My assigned microservice was Doctors, alongside frontend interface work.','Le microservice Médecins m’était attribué, en complément du travail d’interface frontend.')],
    [],
  ],
  'python-stock':[
    [l('The Python application tracks stock entries, exits and current inventory levels.','L’application Python suit les entrées, les sorties et les niveaux d’inventaire.')],
    [l('The SQL / SQLite database supports create, read, update and delete operations.','La base SQL / SQLite prend en charge les opérations de création, de lecture, de modification et de suppression.')],
    [],
  ],
};
