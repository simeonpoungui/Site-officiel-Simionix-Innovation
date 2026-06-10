// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FormationsComponent } from './formations/formations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' } // Redirection 404 vers l'accueil
];