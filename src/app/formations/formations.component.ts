// src/app/pages/formations/formations.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {
  
  constructor(private location: Location) {}

   ngOnInit() {
    // Initialisation des filtres
    this.initFilters();
  }

  ngAfterViewInit() {
    this.initSearchFilter();
  }

    private initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.formation-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            (card as HTMLElement).style.display = 'block';
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });
      });
    });
  }

  private initSearchFilter() {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const cards = document.querySelectorAll('.formation-card');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
          const title = card.querySelector('.card-title')?.textContent?.toLowerCase() || '';
          const description = card.querySelector('.card-description')?.textContent?.toLowerCase() || '';

          if (title.includes(searchTerm) || description.includes(searchTerm)) {
            (card as HTMLElement).style.display = 'block';
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });
      });
    }
  }
  
  // Méthode pour revenir à la page précédente
  goBack() {
    this.location.back();
  }

  // Méthode pour scroller jusqu'à la section contact
  scrollToContact() {
    // Vérifier si on est sur la page d'accueil
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Si on n'est pas sur la page d'accueil, rediriger vers la page d'accueil puis scroller
      window.location.href = '/#contact';
    }
  }
}