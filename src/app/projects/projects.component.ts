// src/app/pages/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService,Project } from '../Services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';
  categories: string[] = [];
  loading: boolean = true;
  selectedProject: Project | null = null;
  showModal: boolean = false;

  constructor(
    private projectsService: ProjectsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.filteredProjects = projects;
        this.extractCategories();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.loading = false;
      }
    });
  }

  extractCategories() {
    const cats = new Set(this.projects.map(p => p.category));
    this.categories = Array.from(cats).sort();
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === category);
    }
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(event?: Event) {
    if (event && event.target !== event.currentTarget) return;
    this.showModal = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  goBack() {
    this.location.back();
  }

  handleImageError(event: any) {
    event.target.src = 'assets/images/placeholder.jpg';
  }
}