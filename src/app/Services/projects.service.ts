// Services/projects.service.ts - Version Complète avec tous les projets
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Project {
  id: string;
  title: string;
  client: string;
  year: number;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  technologies: { name: string; icon: string; color: string }[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  gallery?: string[];
  link?: string;
  repository?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    // Projet 1 - Suivi Médical (242 Santé) - Le plus impactant
    {
      id: 'suivi-medical',
      title: 'Suivi Médical',
      client: '242 Santé',
      year: 2025,
      description:
        'Plateforme complète de gestion des patients et de suivi médical',
      fullDescription: `Suivi Médical est une plateforme digitale innovante développée pour 242 Santé, visant à révolutionner la gestion des soins de santé au Congo.

🏥 Contexte du projet
Face aux défis du système de santé congolais (gestion des dossiers patients, manque de suivi, difficultés d'accès aux soins), 242 Santé a mandaté le développement d'une solution complète de gestion médicale.

💊 Solution technique
La plateforme offre une gestion complète des dossiers patients électroniques avec chiffrement des données sensibles. Elle intègre un système de prise de rendez-vous en ligne, des consultations vidéo (téléconsultation), un suivi des traitements médicamenteux, des alertes automatiques de rappel et un tableau de bord médical pour les professionnels de santé.

🌟 Impact social
Cette solution améliore significativement l'accès aux soins, réduit les délais d'attente et permet un suivi médical personnalisé. Plus de 10 000 patients sont déjà enregistrés sur la plateforme.`,
      category: 'Santé / Médical',
      image: 'assets/projects/suivi-medical/sm.png',
      technologies: [
        { name: 'Angular 18', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Socket.io', icon: 'fas fa-exchange-alt', color: '#010101' },
        { name: 'Twilio API', icon: 'fas fa-phone', color: '#f22f46' },
        { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
        { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
      ],
      features: [
        '🏥 Dossiers patients électroniques sécurisés',
        '📅 Prise de rendez-vous en ligne 24/7',
        '🎥 Téléconsultation vidéo intégrée',
        '💊 Suivi des traitements et prescriptions',
        '🔔 Alertes de rappel par SMS/Email',
        '📊 Tableau de bord médical en temps réel',
        "📄 Génération automatique d'ordonnances",
        '👨‍⚕️ Gestion des professionnels de santé',
      ],
      challenges: [
        'Sécurisation des données médicales sensibles (conformité RGPD)',
        'Intégration de la téléconsultation avec qualité vidéo optimale',
        'Gestion des urgences et priorités médicales',
        'Interopérabilité avec les systèmes hospitaliers existants',
        'Accessibilité pour les zones à faible connexion',
      ],
      solutions: [
        'Chiffrement AES-256 des données patient',
        'WebRTC pour la vidéo haute qualité',
        'Système de triage automatique des urgences',
        "API RESTful standard FHIR pour l'interopérabilité",
        'Mode hors ligne avec synchronisation automatique',
      ],
      results: [
        '👥 Plus de 10 000 patients enregistrés',
        "⏱️ Réduction de 65% des délais d'attente",
        '😊 Taux de satisfaction patient à 94%',
        '🏥 25 professionnels de santé formés',
        '📈 Croissance de 40% du nombre de consultations',
      ],
      gallery: [
        'assets/projects/suivi-medical/sm-1.png',
        'assets/projects/suivi-medical/sm-2.png',
        'assets/projects/suivi-medical/sm-3.png',
      ],
      link: 'https://suivimedical.net/',
    },

    // Projet 2 - E-School (Système de Gestion Scolaire)
    {
      id: 'e-school',
      title: 'E-School',
      client: 'Établissements scolaires',
      year: 2025,
      description: 'ERP complet pour la gestion des établissements scolaires',
      fullDescription: `E-School est une solution ERP innovante conçue pour la gestion complète des établissements scolaires, de la maternelle au secondaire.

📚 Contexte du projet
La gestion administrative des établissements scolaires congolais fait face à des défis majeurs : suivi des inscriptions, gestion des notes, communication parents-enseignants, et suivi des paiements. E-School centralise toutes ces fonctions.

🎓 Solution technique
La plateforme intègre un module de gestion des inscriptions et des frais de scolarité, un système de notes et bulletins automatisés, une application de communication parents-professeurs, un générateur d'emplois du temps, et un tableau de bord pour la direction.

📊 Impact éducatif
E-School digitalise complètement la gestion scolaire, réduisant la charge administrative et améliorant la communication entre tous les acteurs de la communauté éducative.`,
      category: 'Éducation / Gestion',
      image: 'assets/projects/eschool/es.png',
      technologies: [
        { name: 'Angular 18', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Socket.io', icon: 'fas fa-exchange-alt', color: '#010101' },
        { name: 'Twilio API', icon: 'fas fa-phone', color: '#f22f46' },
        { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
        { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
        { name: 'PHP (POO)', icon: 'fab fa-php', color: '#777bb4' },
      ],
      features: [
        '📝 Gestion des inscriptions et réinscriptions',
        '💰 Suivi des frais de scolarité et paiements',
        '📊 Bulletins de notes automatisés',
        '👨‍👩‍👧 Application parents-professeurs',
        '📅 Emplois du temps dynamiques',
        '📈 Dashboard direction avec KPIs',
        '🏆 Gestion des examens et concours',
        '📧 Communication par email/SMS',
      ],
      challenges: [
        'Gestion de plusieurs cycles scolaires différents',
        'Calcul automatisé des moyennes et classements',
        'Sécurisation des données des mineurs',
        'Intégration des programmes officiels',
        'Multi-établissements avec instances séparées',
      ],
      solutions: [
        'Architecture multi-tenant par établissement',
        'Algorithme de calcul personnalisable par cycle',
        "Contrôle d'accès granulaire par rôle",
        'API de synchronisation avec ministère',
        'Sauvegarde automatique quotidienne',
      ],
      results: [
        '🏫 15 établissements scolaires équipés',
        '👥 +5 000 élèves et +200 enseignants',
        '⏱️ Réduction de 70% du temps administratif',
        '📊 100% de bulletins générés automatiquement',
        "💬 85% des parents utilisent l'application",
      ],
      gallery: [
        'assets/projects/eschool/es1.png',
        'assets/projects/eschool/es2.png',
        'assets/projects/eschool/es3.png',
      ],
      link: 'https://eschool.academy/',
    },

    // Projet 3 - POS Boutique (Point Of Sale)
    {
      id: 'pos-boutique',
      title: 'POS Boutique',
      client: 'Commerçants & Boutiques',
      year: 2025,
      description:
        'Application de point de vente complète pour la gestion des commerces',
      fullDescription: `POS Boutique est une solution de point de vente moderne et intuitive conçue pour les commerçants, boutiques et petites entreprises.

🛍️ Contexte du projet
Les commerçants congolais ont besoin d'outils digitaux performants pour gérer leurs stocks, leurs ventes et leur comptabilité. POS Boutique répond à ces besoins avec une interface simple et puissante.

💻 Solution technique
L'application permet la gestion complète des stocks avec alertes de réapprovisionnement, un système de facturation et tickets de caisse, une gestion des clients et remises, des rapports de vente détaillés, et un dashboard en temps réel. Compatible avec tablettes et ordinateurs.

📈 Impact commercial
POS Boutique digitalise les opérations quotidiennes des commerçants, réduisant les erreurs de caisse et offrant une vision claire de la performance commerciale.`,
      category: 'Commerce / Point de Vente',
      image: 'assets/projects/pos/pos.png',
      technologies: [
        { name: 'Angular 18', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Socket.io', icon: 'fas fa-exchange-alt', color: '#010101' },
        { name: 'Twilio API', icon: 'fas fa-phone', color: '#f22f46' },
        { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
        { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
        { name: 'PHP (POO)', icon: 'fab fa-php', color: '#777bb4' },
        { name: 'ApexCharts JS', icon: 'fas fa-chart-line', color: '#00e396' },
        { name: 'Chart.js', icon: 'fas fa-chart-pie', color: '#ff6384' },
      ],
      features: [
        '🛒 Gestion des stocks en temps réel',
        '🧾 Facturation et tickets de caisse',
        '💳 Multiples modes de paiement',
        '👥 Fidélisation clients et remises',
        '📊 Rapports de vente détaillés',
        '🔔 Alertes stock minimum',
        '📱 Interface tablette/ordinateur',
        '💱 Gestion multi-devises',
      ],
      challenges: [
        'Gestion des stocks en temps réel sans latence',
        'Impression instantanée des tickets',
        'Synchronisation hors ligne/mode dégradé',
        'Gestion des promotions complexes',
        'Sécurisation des transactions',
      ],
      solutions: [
        'Base de données en temps réel avec WebSocket',
        "Service d'impression local intégré",
        'IndexedDB pour le mode hors ligne',
        'Moteur de règles pour les promotions',
        'Journalisation cryptée des transactions',
      ],
      results: [
        '🏪 50+ commerçants équipés',
        '💰 +30% de réduction des erreurs de caisse',
        '⏱️ 60% de gain de temps en gestion',
        '📈 Croissance moyenne des ventes de 25%',
        '😊 Taux de satisfaction: 96%',
      ],
      gallery: [
        'assets/projects/pos/pos1.png',
        'assets/projects/pos/pos2.png',
        'assets/projects/pos/pos3.png',
      ],
      link: 'https://pos.brandsmillenium.com/',
    },

    // Projet 4 - QrCode Congo (Sécurisé)
    {
      id: 'qrcode-congo',
      title: 'QrCode Congo',
      client: 'AXEL / Mairie Centrale',
      year: 2025,
      description:
        'Plateforme sécurisée de stockage de documents via QR code pour les véhicules',
      fullDescription: `QrCode Congo est une plateforme numérique innovante qui révolutionne la gestion documentaire des véhicules au Congo. 
      
📱 Contexte du projet
Face aux problèmes de falsification des documents administratifs et aux contrôles routiers fastidieux, la Mairie Centrale de Brazzaville a mandaté AXEL pour développer une solution digitale sécurisée.

🔐 Solution technique
Le système permet de stocker de manière sécurisée tous les documents administratifs d'un véhicule (carte grise, assurance, visite technique, etc.) dans une base de données cryptée. Chaque véhicule se voit attribuer un QR code unique et sécurisé, apposé sur le pare-brise, permettant aux forces de l'ordre et aux autorités de vérifier instantanément la conformité du véhicule via une application mobile dédiée.

🏆 Impact
Le projet est développé en partenariat avec la mairie centrale et s'inscrit dans la modernisation de l'administration congolaise. Plus de 50 000 véhicules sont déjà enregistrés sur la plateforme.`,
      category: 'Sécurité / Administration',
      image: 'assets/projects/qrcodecongo/qr.png',
      technologies: [
        { name: 'Angular 18', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Socket.io', icon: 'fas fa-exchange-alt', color: '#010101' },
        { name: 'Twilio API', icon: 'fas fa-phone', color: '#f22f46' },
        { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
        { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
        { name: 'ApexCharts JS', icon: 'fas fa-chart-line', color: '#00e396' },
        { name: 'Chart.js', icon: 'fas fa-chart-pie', color: '#ff6384' },
      ],
      features: [
        '✅ Génération de QR codes uniques et sécurisés',
        '🔒 Chiffrement AES-256 des documents sensibles',
        '🛡️ Authentification à double facteur pour les agents',
        "🔢 Attribution automatique de numéros d'ordre",
        '📊 Interface administrateur complète avec dashboard',
        '📱 Application mobile pour les contrôles terrain',
        '📜 Historique complet des consultations',
        '⏰ Alertes automatiques pour documents expirés',
      ],
      challenges: [
        'Garantir la sécurité des données sensibles des citoyens',
        "Assurer la non-falsification et l'unicité des QR codes",
        'Gérer un grand volume de véhicules (plus de 50 000)',
        'Travailler avec des zones à faible connectivité internet',
        'Coordination avec plusieurs institutions (mairie, police, etc.)',
      ],
      solutions: [
        "Mise en place d'un chiffrement de bout en bout des données",
        'QR codes dynamiques avec horodatage et signature numérique',
        'Mode hors ligne avec synchronisation différée pour les zones isolées',
        'API centralisée RESTful pour toutes les institutions',
        'Formation approfondie des agents de contrôle sur le terrain',
      ],
      results: [
        '🏆 Plus de 50 000 véhicules enregistrés',
        '🔒 Zéro tentative de falsification détectée à ce jour',
        '⏱️ Temps de contrôle routier réduit de 70%',
        '😊 Taux de satisfaction des usagers à 98%',
        '📈 Extension prévue dans 5 nouvelles villes',
      ],
      gallery: [
        'assets/projects/qrcodecongo/qr1.png',
        'assets/projects/qrcodecongo/qr2.png',
        'assets/projects/qrcodecongo/qr3.png',
      ],
      link: 'https://qrcode-congo.cg',
    },

    // Projet 5 - Signal Congo (Géolocalisation)
    {
      id: 'signal-congo',
      title: 'Signal Congo',
      client: 'AXEL / Ville de Brazzaville',
      year: 2025,
      description:
        'Application de signalement des incidents urbains avec géolocalisation',
      fullDescription: `Signal Congo est une application mobile et web qui permet aux citoyens de signaler en temps réel les incidents urbains (travaux, accidents, incivilités, problèmes de voirie) directement aux autorités compétentes.

📍 Géolocalisation précise
Grâce à la géolocalisation précise et à la prise de photo intégrée, les signalements sont transmis instantanément aux services concernés (mairie, police, gendarmerie, ministères) qui peuvent traiter les demandes en priorité selon leur criticité.

🌍 Smart City
L'application fait partie du programme Smart City de Brazzaville visant à améliorer la qualité de vie des citoyens et l'efficacité des services publics.`,
      category: 'Smart City / Civic Tech',
      image: 'assets/projects/signal/sg.png',
      technologies: [
        { name: 'Angular 18', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'NestJS', icon: 'fab fa-node-js', color: '#e0234e' },
        {
          name: 'Google Maps API',
          icon: 'fas fa-map-marker-alt',
          color: '#4285f4',
        },
        { name: 'Socket.io', icon: 'fas fa-exchange-alt', color: '#010101' },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
        {
          name: 'Cloudinary',
          icon: 'fas fa-cloud-upload-alt',
          color: '#3448c5',
        },
      ],
      features: [
        "📍 Signalement avec géolocalisation précise (jusqu'à 5m)",
        '📸 Prise de photo et upload instantané',
        '🏷️ Catégorisation des incidents (10 types différents)',
        "⚠️ Niveau de priorité automatique selon l'incident",
        '🔄 Suivi en temps réel du traitement du signalement',
        '🔔 Notification push aux citoyens',
        '📊 Dashboard administrateur multi-institutions',
        '🗺️ Statistiques et cartographie des incidents',
      ],
      challenges: [
        'Précision de la géolocalisation en milieu urbain dense',
        'Traitement intelligent des signalements duplicats',
        'Intégration fluide avec les services existants des institutions',
        'Modération des contenus pour éviter les abus',
        "Gestion des délais de réponse par type d'incident",
      ],
      solutions: [
        "Utilisation de l'API Google Maps avec snap to road pour la précision",
        'Algorithme de détection des doublons par proximité',
        "API RESTful documentée pour l'interopérabilité",
        'Système de modération automatisée et manuelle',
        "SLA (Service Level Agreement) défini par type d'incident",
      ],
      results: [
        '📊 +2000 signalements traités en 3 mois',
        '⚡ Temps de réponse moyen réduit de 60%',
        '😊 Taux de satisfaction citoyenne: 92%',
        '🏙️ Extension à 3 autres villes prévue (Pointe-Noire, Dolisie, Nkayi)',
      ],
      gallery: [
        'assets/projects/signal/sg.png',
        'assets/projects/signal/sg1.png',
        'assets/projects/signal/sg2.png',
        'assets/projects/signal/sg3.png',
      ],
      link: 'https://signalcongo.com/',
    },

    // Projet 6 - Growth ERP (MTN Congo)
    {
      id: 'growth-erp',
      title: 'Growth ERP',
      client: 'MTN Congo',
      year: 2025,
      description:
        'ERP complet pour la gestion des campagnes, ventes et commissions',
      fullDescription: `Growth ERP est une solution de gestion d'entreprise développée spécifiquement pour MTN Congo afin d'optimiser la gestion des campagnes marketing, des équipes terrain et des performances commerciales de ses prestataires.

📊 Gestion centralisée
L'application centralise toutes les données commerciales et permet un suivi en temps réel des objectifs, des ventes réalisées et des commissions générées.

🎯 Vision stratégique
Elle offre une vision globale des performances par zone géographique, par équipe commerciale et par individu, permettant aux managers de prendre des décisions éclairées.`,
      category: 'ERP / Business Intelligence',
      image:
        'assets/projects/growth-erp/erp.png',
      technologies: [
        { name: 'Angular 18', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Chart.js', icon: 'fas fa-chart-line', color: '#ff6384' },
        { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8' },
        { name: 'Redis', icon: 'fas fa-bolt', color: '#dc382d' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
        { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
      ],
      features: [
        '📢 Gestion complète des campagnes marketing',
        '📍 Suivi des missions terrain en temps réel',
        '📈 Dashboard ventes en temps réel',
        '💰 Calcul automatisé des commissions',
        '👥 Gestion des équipes et zones géographiques',
        '📊 Reporting avancé (export Excel/PDF)',
        '📱 Tableaux de bord personnalisés par profil',
        '🔔 Alertes et notifications automatiques',
      ],
      challenges: [
        'Volumétrie importante de données (milliers de transactions/jour)',
        'Calculs de commissions complexes avec multiples règles métier',
        'Multiplicité des zones géographiques et hiérarchies',
        'Intégration avec les systèmes existants de MTN',
        'Performance des requêtes en temps réel',
      ],
      solutions: [
        'Architecture microservices pour la scalabilité',
        'Caching intelligent avec Redis pour les données fréquentes',
        'Optimisation avancée des requêtes SQL',
        "API Gateway pour l'intégration avec les systèmes MTN",
        'WebSocket pour les données temps réel',
      ],
      results: [
        '👥 Gestion de 500+ prestataires actifs',
        '💰 Automatisation complète des calculs de commissions',
        '⏱️ Réduction de 80% du temps de reporting mensuel',
        '🏢 Adoption par toutes les directions de MTN Congo',
      ],
      gallery: [
        'assets/projects/growth-erp/Capture d’écran du 2026-03-29 08-59-11.png',
      ],
      link: 'https://growth-erp.cg',
    },

 // Projet 7 - ISIC Congo
{
  id: 'isic',
  title: 'ISIC Congo',
  client: 'ISIC Congo',
  year: 2024,
  description: 'Plateforme de génération de cartes internationales',
  fullDescription: `ISIC Congo est une plateforme dédiée à la gestion et à la génération des cartes internationales ISIC, ITIC et IYTC. Elle permet aux étudiants, enseignants et jeunes d’obtenir facilement leur carte numérique, d’accéder à des avantages exclusifs et de suivre leurs demandes en ligne.`,
  category: 'Plateforme / Services',
  image: 'assets/projects/unesco/unes.png',
  technologies: [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'Tailwind CSS', icon: 'fab fa-tailwind', color: '#38bdf8' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#3c873a' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#4db33d' },
  ],

  features: [
    '💳 Génération de cartes ISIC, ITIC et IYTC',
    '📱 Carte numérique accessible via mobile',
    '🌍 Accès aux offres et réductions internationales',
    '🔎 Suivi des demandes en ligne',
    '🔐 Gestion sécurisée des utilisateurs',
    '📊 Interface moderne et responsive',
  ],
  challenges: [
    'Gestion sécurisée des données utilisateurs',
    'Mise en place d’un système de génération fiable',
  ],
  solutions: [
    'Implémentation d’authentification sécurisée',
    'Architecture API robuste pour la gestion des cartes',
  ],
  results: [
    'Plateforme fonctionnelle et rapide',
    'Amélioration de l’accès aux کارتes internationales au Congo',
  ],
  gallery: [
    'assets/projects/unesco/unes1.png',
    'assets/projects/unesco/unes2.png',
    'assets/projects/unesco/unes3.png',
  ],
  link: '#',
},

    // Projet 8 - SOGEA
    {
      id: 'sogea',
      title: 'SOGEA',
      client: 'SOGEA',
      year: 2024,
      description: 'Système de Gestion Automobile',
      fullDescription: `SOGEA (Système de Gestion Automobile) est une application complète pour la gestion de flotte de véhicules. Elle permet de suivre les véhicules, gérer les entretiens, facturer les clients et optimiser l'utilisation des ressources.`,
      category: 'Gestion / Transport',
      image:
        'assets/projects/sogeacongo/sogea.png',
      technologies: [
        { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Tailwind CSS', icon: 'fab fa-tailwind', color: '#38bdf8' },
        { name: 'GSAP', icon: 'fas fa-magic', color: '#88ce02' },
        { name: 'PHP (POO)', icon: 'fab fa-php', color: '#777bb4' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
      ],
      features: [],
      challenges: [],
      solutions: [],
      results: [],
      gallery: [],
      link: 'https://sogea.cg',
    },

    // Projet 9 - NovaCar
    {
      id: 'novacar',
      title: 'NovaCar',
      client: 'NovaCar',
      year: 2024,
      description: 'Gestion de location de véhicules',
      fullDescription: `NovaCar est une plateforme de réservation de véhicules en ligne avec gestion complète des locations, suivi en temps réel et facturation automatisée.`,
      category: 'Location / Transport',
      image:
        'assets/projects/novacar/novacar.png',
      technologies: [
        { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
      ],
      features: [],
      challenges: [],
      solutions: [],
      results: [],
      gallery: [
        'assets/projects/novacar/Capture d’écran du 2026-03-29 09-09-13.png',
      ],
      link: 'https://novacar.brandsmillenium.com/',
    },
    // Projet 10 - Gestion-personnels (Cybermatic Group)
{
  id: 'gestion-personnels',
  title: 'Gestion Personnels',
  client: 'Cybermatic Group Saas',
  year: 2025,
  description: 'Gestion complète des clients pour une société de la place',
  fullDescription: `Gestion Personnels est une application SaaS développée pour Cybermatic Group, permettant une gestion complète et centralisée des clients.

👥 Contexte du projet
Cybermatic Group avait besoin d'une solution moderne pour gérer efficacement ses clients, suivre les interactions, et optimiser la relation client.

💻 Solution technique
Application SaaS avec tableau de bord personnalisé, gestion des profils clients, historique des interactions, et système de notification en temps réel.

🔐 Sécurité
Authentification JWT, validation OTP pour les actions sensibles, et chiffrement des données.`,
  category: 'SaaS / Gestion',
  image: 'assets/projects/gestion-personnels/gp.png',
  technologies: [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'PHP (POO)', icon: 'fab fa-php', color: '#777bb4' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
    { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
    { name: 'OTP', icon: 'fas fa-key', color: '#f59e0b' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
  ],
  features: [
    '👥 Gestion complète des clients',
    '📊 Dashboard personnalisé',
    '🔐 Authentification JWT + OTP',
    '📧 Notifications email/SMS',
    '📈 Reporting avancé',
    '👑 Gestion multi-rôles',
  ],
  challenges: [],
  solutions: [],
  results: [],
  gallery: [],
  repository: 'https://github.com/simeonpoungui/Gestion-personnels',
},

// Projet 11 - Gestion-Clinique (Cybermatic Group)
{
  id: 'gestion-clinique',
  title: 'Gestion Clinique',
  client: 'Cybermatic Group Saas',
  year: 2025,
  description: 'SaaS de gestion complète pour cliniques médicales',
  fullDescription: `Gestion Clinique est une solution SaaS innovante développée pour Cybermatic Group, destinée à la gestion complète des cliniques médicales.

🏥 Contexte du projet
Digitalisation des processus administratifs et médicaux des cliniques : gestion des patients, rendez-vous, dossiers médicaux, facturation.

💻 Solution technique
Plateforme cloud avec modules : agenda médical, dossiers patients électroniques, facturation, inventory management, et téléconsultation.

🔐 Sécurité
Conformité RGPD, chiffrement des données médicales, authentification sécurisée JWT.`,
  category: 'SaaS / Santé',
  image: 'assets/projects/gestion-clinique/gc.png',
  technologies: [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'PHP (POO)', icon: 'fab fa-php', color: '#777bb4' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
    { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
    { name: 'OTP', icon: 'fas fa-key', color: '#f59e0b' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
  ],
  features: [
    '🏥 Gestion des patients',
    '📅 Agenda des rendez-vous',
    '📋 Dossiers médicaux électroniques',
    '💰 Facturation et paiements',
    '📦 Gestion des stocks médicaux',
    '🎥 Téléconsultation intégrée',
  ],
  challenges: [],
  solutions: [],
  results: [],
  gallery: [],
},

// Projet 12 - Unesco CARD
{
  id: 'unesco-card',
  title: 'Unesco CARD',
  client: 'UNESCO',
  year: 2025,
  description: 'Génération de cartes sécurisées pour l\'UNESCO',
  fullDescription: `Unesco CARD est une plateforme de génération de cartes sécurisées pour l'UNESCO.

🆔 Contexte du projet
Besoin d'une solution fiable et sécurisée pour générer et gérer les cartes d'identification des membres et partenaires UNESCO.

🔐 Solution technique
Système de génération automatique de cartes avec QR code unique, vérification d'authenticité, et dashboard d'administration.`,
  category: 'Administration / Sécurité',
  image: 'assets/projects/unesco-card/uc.png',
  technologies: [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'PHP (POO)', icon: 'fab fa-php', color: '#777bb4' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'Font Awesome', icon: 'fab fa-font-awesome', color: '#528dd7' },
    { name: 'JWT Auth', icon: 'fas fa-shield-alt', color: '#06b6d4' },
    { name: 'OTP', icon: 'fas fa-key', color: '#f59e0b' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
  ],
  features: [
    '🆔 Génération automatique de cartes',
    '📱 QR code unique par carte',
    '🔍 Vérification d\'authenticité',
    '📊 Dashboard administration',
    '📧 Envoi automatique par email',
    '📜 Historique complet',
  ],
  challenges: [],
  solutions: [],
  results: [],
  gallery: [],
},

// Projet 13 - NANA TATTOO SHOP
{
  id: 'nana-tattoo',
  title: 'NANA TATTOO SHOP',
  client: 'Client (Canada)',
  year: 2025,
  description: 'Site vitrine pour salon de tatouage au Canada',
  fullDescription: `NANA TATTOO SHOP est un site vitrine moderne et élégant pour un salon de tatouage basé au Canada.

🎨 Contexte du projet
Création d'une présence en ligne pour promouvoir les services de tatouage, présenter le portfolio des artistes, et faciliter la prise de rendez-vous.

💻 Solution technique
Site WordPress avec design personnalisé, galerie portfolio immersive, formulaire de contact, et intégration des réseaux sociaux.`,
  category: 'Site Vitrine / WordPress',
  image: 'assets/projects/nana-tattoo/nt.png',
  technologies: [
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },
    { name: 'Elementor', icon: 'fas fa-layer-group', color: '#92003b' },
    { name: 'Yoast SEO', icon: 'fas fa-search', color: '#a4286a' },
    { name: 'WPForms', icon: 'fas fa-envelope-open-text', color: '#f68c1f' },
    { name: 'Advanced Custom Fields', icon: 'fas fa-code', color: '#00a0d2' },
  ],
  features: [
    '🎨 Galerie portfolio immersive',
    '📱 Design responsive',
    '🔍 SEO optimisé',
    '📝 Formulaire de contact',
    '📸 Intégration Instagram',
    '📅 Système de rendez-vous',
  ],
  challenges: [],
  solutions: [],
  results: [],
  gallery: [],
  link: 'https://nana-tattoo.shop',
},
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects).pipe(delay(300));
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projects.find((p) => p.id === id);
    console.log('🔍 Recherche projet:', id);
    console.log('📦 Projet trouvé:', project);
    return of(project).pipe(delay(300));
  }
}
