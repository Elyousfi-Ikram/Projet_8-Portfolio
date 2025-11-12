import { Component, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProjetsComponent } from './projets/projets.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    HeaderComponent,
    ProjetsComponent,
    CompetencesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
