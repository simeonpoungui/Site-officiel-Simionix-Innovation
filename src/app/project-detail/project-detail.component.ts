import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../Services/projects.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  currentImageIndex = 0;
  isLoading = true;
  showGallery = false;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.loadProject(projectId);
    });
      document.addEventListener('keydown', this.closeModalWithEsc.bind(this));

  }

  // Dans ngOnDestroy, nettoyez :
ngOnDestroy(): void {
  document.removeEventListener('keydown', this.closeModalWithEsc.bind(this));
  document.body.style.overflow = 'auto';
}

  loadProject(projectId: string): void {
    this.isLoading = true;
    this.projectsService.getProjectById(projectId).subscribe({
      next: (project) => {
        this.project = project;
        this.isLoading = false;
        console.log('Projet chargé:', project);
      },
      error: (error) => {
        console.error('Erreur lors du chargement du projet:', error);
        this.isLoading = false;
      }
    });
  }

  openGallery(index: number): void {
    this.currentImageIndex = index;
    this.showGallery = true;
    document.body.style.overflow = 'hidden'; // Empêche le scroll
  }

  closeModal(): void {
    console.log('Fermeture du modal'); // Pour debug
    this.showGallery = false;
    this.currentImageIndex = 0;
    document.body.style.overflow = 'auto'; // Réactive le scroll
  }

  nextImage(): void {
    if (this.project && this.project.gallery && this.project.gallery.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.gallery.length;
    }
  }

  previousImage(): void {
    if (this.project && this.project.gallery && this.project.gallery.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.gallery.length) % this.project.gallery.length;
    }
  }

  // Empêche la propagation du clic sur le contenu du modal
  onModalContentClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  goBack(): void {
    window.history.back();
  }

  closeModalWithEsc(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    this.closeModal();
  }
}
}