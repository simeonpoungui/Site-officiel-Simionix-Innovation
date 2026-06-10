import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProjectsService } from '../Services/projects.service';
import { ContactService } from '../Services/contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,AfterViewInit{
  
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
  ) {}
  
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
  { name: 'Services', id: 'services' },
  { name: 'Réalisations', id: 'projects' },
  { name: 'Formations', id: 'formations' },
  { name: 'Équipe', id: 'team' },
  { name: 'Contact', id: 'contact' }
];

// Dans home.component.ts, remplacez le tableau projects par :

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
  

  // Dans le composant, ajoutez ces données pour les formations
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
  
services = [
  {
    icon: 'fa-code',
    title: 'Développement Web & Mobile',
    description: 'Création de sites internet, applications web et mobiles modernes.'
  },

  {
    icon: 'fa-laptop-code',
    title: 'Solutions Logicielles',
    description: 'Conception de logiciels professionnels adaptés aux entreprises.'
  },

  {
    icon: 'fa-chalkboard-user',
    title: 'Formation Numérique',
    description: 'Formation pratique en développement et outils digitaux.'
  },

  {
    icon: 'fa-chart-line',
    title: 'Transformation Digitale',
    description: 'Digitalisation des entreprises et intégration de solutions innovantes.'
  },

  {
    icon: 'fa-pen-ruler',
    title: 'Design Graphique & UI/UX',
    description: 'Création de logos, interfaces et identités visuelles modernes.'
  },

  {
    icon: 'fa-bullhorn',
    title: 'Marketing Digital & Communication Visuelle',
    description: 'Stratégies digitales et création de supports visuels pour renforcer votre image de marque.'
  },

  {
    icon: 'fa-microchip',
    title: 'Intelligence Artificielle',
    description: 'Automatisation et intégration de solutions intelligentes.'
  },

  {
    icon: 'fa-cloud',
    title: 'Cloud & Hébergement',
    description: 'Hébergement web, sauvegardes et déploiement sécurisé.'
  },

  {
    icon: 'fa-headset',
    title: 'Support & Maintenance',
    description: 'Assistance technique, maintenance et mises à jour continues.'
  },

  {
    icon: 'fa-cart-shopping',
    title: 'E-Commerce & Marketplaces',
    description: 'Création de boutiques en ligne performantes et sécurisées.'
  },

  {
    icon: 'fa-shield-halved',
    title: 'Sécurité Informatique',
    description: 'Protection des données et sécurisation des systèmes numériques.'
  },

  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Référencement SEO',
    description: 'Optimisation de votre visibilité et présence sur les moteurs de recherche.'
  },

  {
    icon: 'fa-network-wired',
    title: 'API & Intégration',
    description: 'Connexion et intégration de systèmes et services numériques.'
  },

  {
    icon: 'fa-gears',
    title: 'Automatisation des Processus',
    description: 'Optimisation des tâches et amélioration de la productivité.'
  },

  {
    icon: 'fa-chart-pie',
    title: 'Analyse & Tableaux de Bord',
    description: 'Création de dashboards et outils d’analyse décisionnelle.'
  },

  {
    icon: 'fa-graduation-cap',
    title: 'Logiciels de Gestion',
    description: 'ERP, POS, gestion scolaire, RH et solutions métier sur mesure.'
  }
];
  whyChooseUs = [
    { icon: 'fa-flask', title: 'Expertise technologique', description: 'Veille constante et maîtrise des dernières technologies' },
    { icon: 'fa-puzzle-piece', title: 'Solutions sur mesure', description: 'Des réponses adaptées à vos besoins spécifiques' },
    { icon: 'fa-users', title: 'Équipe qualifiée', description: 'Des experts passionnés à votre service' },
    { icon: 'fa-clock', title: 'Support réactif', description: 'Une assistance disponible et efficace' },
    { icon: 'fa-rocket', title: 'Technologies modernes', description: 'Des outils à la pointe de l\'innovation' },
    { icon: 'fa-shield', title: 'Sécurité & performance', description: 'Des solutions robustes et protégées' }
  ];
  
  
  processSteps = [
    { step: '01', title: 'Analyse', description: 'Étude approfondie de vos besoins', icon: 'fa-search' },
    { step: '02', title: 'Conception', description: 'Design et architecture', icon: 'fa-pen-ruler' },
    { step: '03', title: 'Développement', description: 'Création des fonctionnalités', icon: 'fa-code' },
    { step: '04', title: 'Tests', description: 'Validation et optimisation', icon: 'fa-bug' },
    { step: '05', title: 'Déploiement', description: 'Mise en production', icon: 'fa-cloud-upload-alt' },
    { step: '06', title: 'Maintenance', description: 'Suivi et amélioration', icon: 'fa-headset' }
  ];
  
  trainings = [
    { title: 'Développement Web Full-Stack', duration: '3 mois', price: '250.000 FCFA', icon: 'fa-globe' },
    { title: 'Bureautique & Productivité', duration: '1 mois', price: '75.000 FCFA', icon: 'fa-file-alt' },
    { title: 'Design Graphique & UI/UX', duration: '2 mois', price: '150.000 FCFA', icon: 'fa-palette' },
    { title: 'Marketing Digital', duration: '2 mois', price: '150.000 FCFA', icon: 'fa-chart-simple' },
    { title: 'Intelligence Artificielle', duration: '3 mois', price: '300.000 FCFA', icon: 'fa-brain' },
    { title: 'Cybersécurité', duration: '2 mois', price: '200.000 FCFA', icon: 'fa-shield-haltered' }
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
  
// Dans home.component.ts ou le composant concerné

technologies = [
  // Frontend
  { name: 'Angular 18', icon: 'fab fa-angular' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Vue.js', icon: 'fab fa-vuejs' },
  { name: 'TypeScript', icon: 'fab fa-js' },
  { name: 'JavaScript ES6+', icon: 'fab fa-js' },
  // Backend
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'NestJS', icon: 'fab fa-node-js' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'PHP (POO)', icon: 'fab fa-php' },
  { name: 'Python', icon: 'fab fa-python' },
  // Mobile
  { name: 'Flutter', icon: 'fab fa-android' },
  { name: 'React Native', icon: 'fab fa-android' },
  // Bases de données
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-leaf' },
  { name: 'Redis', icon: 'fas fa-bolt' },
  // DevOps
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'AWS', icon: 'fas fa-cloud' },
  // CSS
  { name: 'Tailwind CSS', icon: 'fab fa-css3-alt' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Sass/SCSS', icon: 'fab fa-sass' },
  // APIs
  { name: 'Google Maps API', icon: 'fas fa-map-marker-alt' },
  { name: 'Socket.io', icon: 'fas fa-exchange-alt' },
  { name: 'Twilio API', icon: 'fas fa-phone' },
  { name: 'JWT Auth', icon: 'fas fa-shield-alt' },
  // Data & IA
  { name: 'ApexCharts', icon: 'fas fa-chart-line' },
  { name: 'Chart.js', icon: 'fas fa-chart-pie' },
  { name: 'TensorFlow', icon: 'fas fa-robot' },
  // CMS
  { name: 'WordPress', icon: 'fab fa-wordpress' },
  { name: 'Elementor', icon: 'fab fa-elementor' }
];
  
  contactInfo = {
    email: 'contacsimionixt@gmail.com',
    phone: '+225 05 05 05 05 05',
    address: 'Abidjan, Cocody - Côte d\'Ivoire'
  };
  
  socialLinks = [
    { icon: 'fab fa-facebook-f', link: '#' },
    { icon: 'fab fa-twitter', link: '#' },
    { icon: 'fab fa-linkedin-in', link: '#' },
    { icon: 'fab fa-github', link: '#' },
    { icon: 'fab fa-instagram', link: '#' }
  ];
 
  // Carrousel
  currentSlide = 0;
  private slideInterval: any;
  private isClient = false; // Pour détecter le navigateur
  
  slides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      alt: 'Équipe innovante',
      badge: 'Innovation & Excellence',
      title: 'Solutions Digitales',
      highlight: 'Sur Mesure',
      description: 'Simionix Innovation transforme vos idées en solutions technologiques performantes. Nous combinons expertise technique et innovation pour propulser votre entreprise vers l\'avenir.',
      btnText: 'Démarrer un projet'
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
      alt: 'Développement moderne',
      badge: 'Expertise Technique',
      title: 'Applications Web & Mobile',
      highlight: 'Performance & Qualité',
      description: 'Nous développons des applications sur mesure avec les technologies les plus avancées : Angular, React, Node.js, Laravel, Flutter.',
      btnText: 'Discuter de votre projet'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
      alt: 'Formation professionnelle',
      badge: 'Formation Continue',
      title: 'Développez vos',
      highlight: 'Compétences Numériques',
      description: 'Des formations pratiques certifiantes en développement web, intelligence artificielle, cybersécurité et design UX/UI.',
      btnText: 'Voir les formations'
    },
    {
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80',
      alt: 'Transformation digitale',
      badge: 'Accompagnement',
      title: 'Accélérez Votre',
      highlight: 'Transformation Digitale',
      description: 'Nous vous accompagnons dans votre digitalisation avec des solutions sur mesure : automatisation, cloud, optimisation.',
      btnText: 'Demander un audit'
    }
  ];
  
  ngOnInit() {
    // Démarrer le carrousel uniquement côté client (navigateur)
    if (typeof window !== 'undefined') {
      this.isClient = true;
      this.startSlideShow();
    }

    this.contactService.createVues().subscribe({
      next: (response) => {
        console.log('Vue enregistrée:', response);
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement de la vue:', error);
      }
    });
  }
  
  ngOnDestroy() {
    // Nettoyer l'intervalle uniquement s'il existe
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
  
  startSlideShow() {
    // Démarrer le défilement automatique seulement côté client
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
    // Réinitialiser le timer après un clic manuel
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideShow();
    }
  }

    ngAfterViewInit() {
    this.initScrollAnimations();
  }

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


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  
updateActiveSection() {
  const sections = ['home', 'services', 'projects', 'formations', 'team', 'contact'];
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
    window.open('https://wa.me/2250505050505', '_blank');
  }

   // Méthode pour envoyer le message
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

    console.log(messageData);
    

    this.contactService.sendMessage(messageData).subscribe({
      next: (response) => {
        console.log(response);
        
        this.isSending = false;
        this.sendSuccess = true;
        this.successMessage = 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
        
        // Réinitialiser le formulaire
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