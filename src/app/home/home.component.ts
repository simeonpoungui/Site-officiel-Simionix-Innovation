import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProjectsService } from '../Services/projects.service';
import { ContactService } from '../Services/contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLoading: any;

  contactData = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };

  isSending = false;
  sendSuccess = false;
  sendError = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private contactService: ContactService
  ) { }

  openProject(projectId: string) {
    this.router.navigate(['/project', projectId]);
  }

  openTraining(trainingId: string) {
    this.router.navigate(['/formations']);
  }

  isScrolled = false;
  menuActive = false;
  activeSection = 'home';

  navItems = [
    { name: 'Accueil', id: 'home' },
    { name: 'Nos Pôles', id: 'poles' },
    { name: 'Réalisations', id: 'projects' },
    { name: 'Formations', id: 'formations' },
    { name: 'Équipe', id: 'team' },
    { name: 'Contact', id: 'contact' }
  ];

  // ==================== PROJETS ====================
  projects = [
    {
      id: 'suivi-medical',
      title: 'Suivi Médical',
      category: 'Santé / Médical',
      icon: 'fa-heartbeat',
      image: 'assets/projects/suivi-medical/sm.png'
    },
    {
      id: 'e-school',
      title: 'E-School',
      category: 'Éducation / Gestion',
      icon: 'fa-graduation-cap',
      image: 'assets/projects/eschool/es.png'
    },
    {
      id: 'pos-boutique',
      title: 'POS Boutique',
      category: 'Commerce / Point de Vente',
      icon: 'fa-cash-register',
      image: 'assets/projects/pos/pos.png'
    },
    {
      id: 'qrcode-congo',
      title: 'QrCode Congo',
      category: 'Sécurité / Administration',
      icon: 'fa-qrcode',
      image: 'assets/projects/qrcodecongo/qr.png'
    },
    {
      id: 'signal-congo',
      title: 'Signal Congo',
      category: 'Smart City / Civic Tech',
      icon: 'fa-map-marker-alt',
      image: 'assets/projects/signal/sg.png'
    },
    {
      id: 'growth-erp',
      title: 'Growth ERP',
      category: 'ERP / Business Intelligence',
      icon: 'fa-chart-line',
      image: 'assets/projects/growth-erp/erp.png'
    },
    {
      id: 'isic',
      title: 'ISIC Congo',
      category: 'Plateforme / Services',
      icon: 'fa-id-card',
      image: 'assets/projects/unesco/unes.png'
    },
    {
      id: 'sogea',
      title: 'SOGEA',
      category: 'Gestion / Transport',
      icon: 'fa-car',
      image: 'assets/projects/sogeacongo/sogea.png'
    },
    {
      id: 'novacar',
      title: 'NovaCar',
      category: 'Location / Transport',
      icon: 'fa-truck',
      image: 'assets/projects/novacar/novacar.png'
    }
  ];

  // ==================== FORMATIONS ====================
  trainingsList = [
    { id: 'initiation', title: 'Initiation Informatique', subtitle: '+ Internet', icon: 'fa-laptop-code', duration: '3 mois', description: 'Maîtrisez les bases de l\'informatique, la navigation web, les emails et la sécurité en ligne.' },
    { id: 'bureautique', title: 'Secrétariat Bureautique', subtitle: 'Word, Excel, PowerPoint', icon: 'fa-file-alt', duration: '3 mois', description: 'Formation complète aux logiciels bureautiques pour une productivité optimale.' },
    { id: 'web', title: 'Développement Web', subtitle: 'Fullstack', icon: 'fab fa-angular', duration: '6 mois', description: 'Créez des sites web modernes et dynamiques avec les technologies les plus demandées.' },
    { id: 'mobile', title: 'Développement Mobile', subtitle: 'iOS & Android', icon: 'fab fa-android', duration: '4 mois', description: 'Développez des applications mobiles natives et cross-platform.' },
    { id: 'python', title: 'Programmation Python', subtitle: 'Algorithmique & POO', icon: 'fab fa-python', duration: '4 mois', description: 'Apprenez les fondamentaux de la programmation et la logique algorithmique.' },
    { id: 'database', title: 'Bases de Données', subtitle: 'SQL, MySQL, MongoDB', icon: 'fas fa-database', duration: '4 mois', description: 'Maîtrisez la conception et l\'optimisation des bases de données.' },
    { id: 'ai', title: 'Intelligence Artificielle', subtitle: 'Machine Learning', icon: 'fas fa-robot', duration: '4 mois', description: 'Découvrez les concepts de l\'IA et apprenez à créer des modèles prédictifs.' },
    { id: 'design', title: 'Design Graphique', subtitle: 'UI/UX', icon: 'fas fa-paintbrush', duration: '6 mois', description: 'Créez des interfaces modernes et des expériences utilisateur intuitives.' }
  ];

  // ==================== PÔLES D'EXPERTISE COMPLETS ====================
  expertisePoles = [
    {
      id: 'bureau',
      icon: 'fa-building',
      title: 'SIMIONIX Bureau',
      subtitle: 'Le partenaire de vos services administratifs',
      description: 'Nous accompagnons les particuliers, étudiants, entrepreneurs et entreprises dans leurs besoins administratifs et bureautiques.',
      services: [
        'Secrétariat administratif',
        'Assistance administrative',
        'Rédaction de courriers et documents professionnels',
        'Saisie et traitement de données',
        'Gestion documentaire',
        'Accueil et relation client',
        'Impression de documents',
        'Photocopies',
        'Numérisation (Scan)',
        'Reliure et plastification'
      ]
    },
    {
      id: 'dev',
      icon: 'fa-laptop-code',
      title: 'SIMIONIX Dev',
      subtitle: 'Des solutions logicielles pour votre transformation digitale',
      description: 'Nous développons des applications performantes et évolutives répondant aux besoins des entreprises et des institutions.',
      services: [
        'Développement d\'applications Web',
        'Développement d\'applications mobiles',
        'Développement de logiciels métiers (ERP, CRM, SaaS)',
        'Création de sites web professionnels',
        'Maintenance et évolution des applications',
        'Hébergement et support technique',
        'Sécurisation des systèmes d\'information',
        'Cybersécurité',
        'Intégration d\'API et solutions cloud'
      ]
    },
    {
      id: 'studio',
      icon: 'fa-paintbrush',
      title: 'SIMIONIX Studio',
      subtitle: 'Donner une identité forte à votre marque',
      description: 'Nous concevons des supports de communication modernes et professionnels afin de valoriser votre image.',
      services: [
        'Design graphique',
        'Infographie',
        'Création de logos',
        'Identité visuelle',
        'Charte graphique',
        'Mise en page professionnelle',
        'Montage photo',
        'Montage vidéo',
        'Création de supports publicitaires',
        'Conception de supports imprimés et numériques'
      ]
    },
    {
      id: 'media',
      icon: 'fa-bullhorn',
      title: 'SIMIONIX Media',
      subtitle: 'Développez votre visibilité digitale',
      description: 'Nous accompagnons les entreprises dans leur stratégie de communication et leur présence sur Internet.',
      services: [
        'Gestion des réseaux sociaux',
        'Community Management',
        'Marketing digital',
        'Publicité en ligne',
        'Création de contenus visuels',
        'Production photo et vidéo',
        'Communication institutionnelle',
        'Développement de l\'image de marque',
        'Stratégies de visibilité digitale'
      ]
    },
    {
      id: 'academy',
      icon: 'fa-graduation-cap',
      title: 'SIMIONIX Academy',
      subtitle: 'Former les talents de demain',
      description: 'Notre centre de formation prépare les apprenants aux métiers du numérique et accompagne leur insertion professionnelle.',
      services: [
        'Informatique',
        'Bureautique professionnelle',
        'Développement Web',
        'Développement Mobile',
        'Design graphique',
        'Intelligence artificielle',
        'Langues',
        'Initiation au numérique',
        'Certifications professionnelles',
        'Accompagnement et coaching des apprenants'
      ]
    },
    {
      id: 'business',
      icon: 'fa-chart-line',
      title: 'SIMIONIX Business',
      subtitle: 'Accompagner la croissance des entreprises',
      description: 'Nous aidons les organisations à améliorer leur performance grâce au conseil stratégique et à la transformation numérique.',
      services: [
        'Conseil en organisation',
        'Conseil informatique',
        'Transformation digitale',
        'Accompagnement des PME',
        'Élaboration de projets',
        'Gestion de projets',
        'Études de faisabilité',
        'Recherche de partenariats',
        'Accompagnement à l\'innovation'
      ]
    }
  ];

// ==================== VALEURS ====================
values = [
  { icon: 'fa-lightbulb', title: 'Innovation', description: 'Nous repoussons sans cesse les limites de la technologie pour offrir des solutions avant-gardistes.' },
  { icon: 'fa-star', title: 'Excellence', description: 'La qualité est au cœur de nos préoccupations, dans chaque projet et chaque service.' },
  { icon: 'fa-user-tie', title: 'Professionnalisme', description: 'Une approche rigoureuse et des méthodes éprouvées pour des résultats optimaux.' },
  { icon: 'fa-handshake', title: 'Intégrité', description: 'La transparence et l\'éthique guident toutes nos actions et nos relations.' },
  { icon: 'fa-users', title: 'Esprit d\'équipe', description: 'La collaboration et le partage sont les moteurs de notre réussite collective.' },
  { icon: 'fa-heart', title: 'Satisfaction client', description: 'Votre succès est notre priorité, nous nous engageons à vous dépasser.' },
  { icon: 'fa-arrow-up', title: 'Amélioration continue', description: 'Nous apprenons et évoluons constamment pour rester à la pointe de l\'innovation.' },
  { icon: 'fa-hand-holding-heart', title: 'Responsabilité Sociale', description: 'Nous contribuons activement au développement économique et social du continent africain à travers nos actions et nos solutions.' }
];

  // ==================== SERVICES GÉNÉRAUX ====================
  services = [
    {
      icon: 'fa-code',
      title: 'Développement Web & Mobile',
      description: 'Création de sites internet, applications web et mobiles modernes avec Angular, React, Node.js, Laravel et Flutter.'
    },
    {
      icon: 'fa-laptop-code',
      title: 'Solutions Logicielles Métiers',
      description: 'Conception de logiciels professionnels adaptés aux entreprises : ERP, CRM, SaaS, POS, gestion scolaire, RH.'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud & Hébergement',
      description: 'Hébergement web, sauvegardes, déploiement sécurisé et infrastructure cloud scalable.'
    },
    {
      icon: 'fa-microchip',
      title: 'Intelligence Artificielle',
      description: 'Automatisation, modèles prédictifs et intégration de solutions intelligentes pour optimiser vos processus.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Sécurité Informatique & Cybersécurité',
      description: 'Protection des données, sécurisation des systèmes d\'information et audits de sécurité.'
    },
    {
      icon: 'fa-pen-ruler',
      title: 'Design Graphique & UI/UX',
      description: 'Création de logos, interfaces et identités visuelles modernes pour renforcer votre image de marque.'
    },
    {
      icon: 'fa-bullhorn',
      title: 'Marketing Digital & Communication',
      description: 'Stratégies digitales et création de supports visuels pour renforcer votre image de marque.'
    },
    {
      icon: 'fa-cart-shopping',
      title: 'E-Commerce & Marketplaces',
      description: 'Création de boutiques en ligne performantes et sécurisées avec gestion de paiements et livraisons.'
    },
    {
      icon: 'fa-headset',
      title: 'Support & Maintenance',
      description: 'Assistance technique, maintenance, mises à jour continues et support personnalisé.'
    }
  ];

  whyChooseUs = [
    { icon: 'fa-users-gear', title: 'Équipe pluridisciplinaire', description: 'Des experts en développement, design, communication et formation à votre service.' },
    { icon: 'fa-puzzle-piece', title: 'Solutions innovantes', description: 'Des réponses adaptées aux besoins spécifiques de chaque client.' },
    { icon: 'fa-handshake', title: 'Accompagnement personnalisé', description: 'Un suivi sur mesure pour chaque projet, de l\'analyse à la réalisation.' },
    { icon: 'fa-brain', title: 'Expertise combinée', description: 'Une synergie unique entre technologie, communication et formation.' },
    { icon: 'fa-rocket', title: 'Vision tournée vers l\'innovation', description: 'Des solutions modernes pour anticiper les besoins de demain.' },
    { icon: 'fa-medal', title: 'Qualité et fiabilité', description: 'Des standards élevés pour des résultats durables et performants.' }
  ];

  processSteps = [
    { step: '01', title: 'Analyse', description: 'Étude approfondie de vos besoins', icon: 'fa-search' },
    { step: '02', title: 'Conception', description: 'Design et architecture', icon: 'fa-pen-ruler' },
    { step: '03', title: 'Développement', description: 'Création des fonctionnalités', icon: 'fa-code' },
    { step: '04', title: 'Tests', description: 'Validation et optimisation', icon: 'fa-bug' },
    { step: '05', title: 'Déploiement', description: 'Mise en production', icon: 'fa-cloud-upload-alt' },
    { step: '06', title: 'Maintenance', description: 'Suivi et amélioration', icon: 'fa-headset' }
  ];

  statistics = [
    { number: 13, label: 'Projets réalisés', suffix: '+' },
    { number: 10, label: 'Étudiants formés', suffix: '+' },
    { number: 10, label: 'Clients', suffix: '+' },
    { number: 4, label: "Années d'expérience", suffix: '+' }
  ];

  testimonials = [
    { name: 'Jean Kouadio', position: 'CEO, TechCorp', content: 'Une équipe professionnelle et à l\'écoute. Notre application a été livrée dans les délais avec une qualité exceptionnelle.' },
    { name: 'Marie Konan', position: 'Directrice, École 2.0', content: 'Les formations sont de grande qualité et parfaitement adaptées aux besoins du marché.' },
    { name: 'Abdoulaye Diop', position: 'Entrepreneur', content: 'Grâce à leur accompagnement, ma vision a pu se concrétiser. Un partenariat de confiance.' }
  ];

  technologies = [
    { name: 'Angular 18', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'JavaScript ES6+', icon: 'fab fa-js' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'NestJS', icon: 'fab fa-node-js' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'PHP (POO)', icon: 'fab fa-php' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Flutter', icon: 'fab fa-android' },
    { name: 'React Native', icon: 'fab fa-android' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'Redis', icon: 'fas fa-bolt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'AWS', icon: 'fas fa-cloud' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Sass/SCSS', icon: 'fab fa-sass' }
  ];

  contactInfo = {
    email: 'contactsimionix@gmail.com',
    phone: '+242 06 705 00 56',
    address: 'Brazzaville, République du Congo'
  };

  socialLinks = [
    { icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=61587135123948' },
    { icon: 'fab fa-twitter', link: '#' },
    { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A122214190&keywords=Simionix%20Innovation&origin=ENTITY_SEARCH_HOME_HISTORY&sid=Yda' },
    { icon: 'fab fa-github', link: '#' },
    { icon: 'fab fa-instagram', link: '#' }
  ];

  // ==================== CARROUSEL ====================
  currentSlide = 0;
  private slideInterval: any;
  private isClient = false;

  slides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      alt: 'Équipe innovante',
      badge: 'Entreprise de Développement Logiciel',
      title: 'Expertise en Solutions Digitales',
      highlight: 'Sur Mesure',
      description: 'SIMIONIX INNOVATION conçoit des logiciels métiers, des applications web et mobiles, des plateformes SaaS, des solutions d\'intelligence artificielle et accompagne les entreprises, établissements scolaires et institutions dans leur transformation numérique.',
      btnText: 'Démarrer un projet'
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
      alt: 'Développement moderne',
      badge: 'Expertise Technique',
      title: 'Applications Web & Mobile',
      highlight: 'Performance & Qualité',
      description: 'Nous développons des applications sur mesure avec les technologies les plus avancées : Angular, React, Node.js, Laravel, Flutter. Des solutions robustes, évolutives et sécurisées.',
      btnText: 'Discuter de votre projet'
    },
    {
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80',
      alt: 'Transformation digitale',
      badge: 'Accompagnement Digital',
      title: 'Accélérez Votre',
      highlight: 'Transformation Numérique',
      description: 'Nous vous accompagnons dans votre digitalisation avec des solutions sur mesure : automatisation, cloud, optimisation des processus et intelligence artificielle.',
      btnText: 'Demander un audit'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
      alt: 'Formation professionnelle',
      badge: 'Formation Continue',
      title: 'Développez vos',
      highlight: 'Compétences Numériques',
      description: 'Nous proposons également des formations professionnelles pratiques et certifiantes en développement web, intelligence artificielle, cybersécurité et design UX/UI.',
      btnText: 'Voir les formations'
    }
  ];

  // ==================== LIFECYCLE ====================
  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isClient = true;
      this.startSlideShow();
    }
  }

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  // ==================== CARROUSEL METHODS ====================
  startSlideShow() {
    if (this.isClient) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetTimer();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetTimer();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetTimer();
  }

  private resetTimer() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideShow();
    }
  }

  // ==================== SCROLL ANIMATIONS ====================
  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }

  // ==================== SCROLL EVENTS ====================
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'poles', 'projects', 'formations', 'team', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  // ==================== NAVIGATION ====================
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  scrollToSection(sectionId: string): void {
    this.menuActive = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openWhatsApp(): void {
    window.open('https://wa.me/242067050056', '_blank');
  }

  // ==================== CONTACT ====================
  sendMessage(form: any) {
    if (form.invalid) {
      this.sendError = true;
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      setTimeout(() => {
        this.sendError = false;
      }, 5000);
      return;
    }

    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;

    const messageData = {
      nom: this.contactData.nom,
      email: this.contactData.email,
      sujet: this.contactData.sujet,
      message: this.contactData.message
    };

    console.log('Envoi du message:', messageData);

    this.contactService.sendMessage(messageData).subscribe({
      next: (response) => {
        console.log('Message envoyé avec succès:', response);
        this.isSending = false;
        this.sendSuccess = true;
        this.successMessage = 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';

        this.contactData = {
          nom: '',
          email: '',
          sujet: '',
          message: ''
        };

        setTimeout(() => {
          this.sendSuccess = false;
        }, 5000);
      },
      error: (error) => {
        console.log(error);
        
        this.isSending = false;
        this.sendError = true;
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';

        setTimeout(() => {
          this.sendError = false;
        }, 5000);
      }
    });
  }
}