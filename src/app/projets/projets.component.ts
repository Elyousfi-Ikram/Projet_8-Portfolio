import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Types (ajuste selon la structure de ton JSON)
interface Project {
  title: string;
  titleProjet?: string;
  objectifs?: string[];
  infoProjet?: string;
  description?: string; 
  maquettes?: string[];
  URLcode?: string;
  URLsite?: string;
  img: string;
}

// Import JSON (nécessite resolveJsonModule=true dans tsconfig)
import projetsData from '../../datas/projets.json';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit, OnDestroy {
  isVisible = false;
  projects: Project[] = (projetsData as Project[]) || [];

  // Modal state
  isModalOpen = false;
  selectedProject: Project | null = null;

  // État du carrousel
  carouselOpen = false;
  currentImageIndex = 0;
  showAllImages = false;

  ngOnInit() {
    // Déclenche l'animation d'entrée
    setTimeout(() => (this.isVisible = true), 0);

    // Initialiser le panneau de détail avec le premier projet
    if (this.projects && this.projects.length > 0) {
      this.selectedProject = this.projects[0];
      this.isModalOpen = true;
    }
  }

  // Remplacer le projet affiché dans le panneau de détail
  selectProject(project: Project) {
    this.selectedProject = project;
  }

  // Liste des maquettes affichées (saniée + éventuellement tronquée à 4)
  visibleMaquettes(p: Project | null): string[] {
    const list = (p?.maquettes ?? []).map(m => this.resolveMaquettePath(m));
    return this.showAllImages ? list : list.slice(0, Math.min(4, list.length));
  }

  // Ouvrir/fermer le carrousel
  openCarousel(index: number) {
    this.currentImageIndex = index;
    this.carouselOpen = true;
    this.lockScroll(true);
  }

  closeCarousel() {
    this.carouselOpen = false;
    this.lockScroll(false);
  }

  // Navigation du carrousel
  nextImage() {
    const len = this.selectedProject?.maquettes?.length ?? 0;
    if (len > 0) this.currentImageIndex = (this.currentImageIndex + 1) % len;
  }

  prevImage() {
    const len = this.selectedProject?.maquettes?.length ?? 0;
    if (len > 0) this.currentImageIndex = (this.currentImageIndex - 1 + len) % len;
  }

  toggleShowAllImages() {
    this.showAllImages = !this.showAllImages;
  }

  // Raccourcis clavier
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.carouselOpen) this.closeCarousel();
    if (this.carouselOpen && (this.selectedProject?.maquettes?.length ?? 0) > 1) {
      if (event.key === 'ArrowLeft') this.prevImage();
      if (event.key === 'ArrowRight') this.nextImage();
    }
  }

  onCarouselBackdropClick() {
    this.closeCarousel();
  }

  private lockScroll(lock: boolean) {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
  }

  ngOnDestroy(): void {
    this.lockScroll(false);
  }

  trackByIndex = (_: number, i: unknown) => i;

  get showMoreAria(): string {
    return this.showAllImages ? "Voir moins d'images" : "Voir plus d'images";
  }

  // Utilitaire commun de normalisation de chemins (évite la duplication)
  private normalizeAssetPath(img: string): string {
    const trimmed = (img || '').trim();
    if (trimmed.startsWith('/projets/') || trimmed.startsWith('/assets/projets/')) return trimmed;
    const normalized = trimmed.replace(/^\/?asset\/projets\//, '/projets/');
    if (normalized.startsWith('/projets/')) return normalized;
    if (/^projets\//.test(normalized)) return `/${normalized}`;
    return `/projets/${normalized}`;
  }

  // Garde les deux méthodes publiques pour le template
  resolveImagePath(img: string): string {
    return this.normalizeAssetPath(img);
  }

  resolveMaquettePath(img: string): string {
    return this.normalizeAssetPath(img);
  }
}