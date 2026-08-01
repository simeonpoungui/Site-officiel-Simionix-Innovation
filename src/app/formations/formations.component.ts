// src/app/pages/formations/formations.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  
  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    // Forcer le scroll en haut de la page
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Initialisation des filtres après le rendu
    setTimeout(() => {
      this.initFilters();
      this.initSearchFilter();
    }, 100);
  }

  private initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.formation-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
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
  
  goBack() {
    this.location.back();
    setTimeout(() => window.scrollTo(0, 0), 50);
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const contact = document.getElementById('contact');
          if (contact) {
            contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      });
    }
  }
}