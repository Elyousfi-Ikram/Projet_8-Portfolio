import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  isOpen = false;
  isScrolled = false;

  navigationItems = [
    { href: '#about-me', label: 'À propos de moi' },
    { href: '#projets', label: 'Mes projets' },
    { href: '#competences', label: 'Compétences acquises' },
    { href: '#contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}