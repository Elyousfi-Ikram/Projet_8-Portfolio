import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SocialLink = {
  name: string;
  url: string;
  iconClass: string;
  ariaLabel: string;
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  contactInfo = {
    email: 'elyousfi.ikram@hotmail.com',
    phone: '07 83 44 00 64',
  };

  socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100008643318570',
      iconClass: 'fab fa-facebook',
      ariaLabel: 'Visiter mon profil Facebook',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ikrm.rifia/',
      iconClass: 'fab fa-instagram',
      ariaLabel: 'Visiter mon profil Instagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      iconClass: 'fab fa-linkedin',
      ariaLabel: 'Visiter mon profil LinkedIn',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Elyousfi-Ikram',
      iconClass: 'fab fa-github',
      ariaLabel: 'Visiter mon profil GitHub',
    },
  ];

  currentYear = new Date().getFullYear();

  get phoneHref(): string {
      return 'tel:' + this.contactInfo.phone.replace(/\s/g, '');
  }
}