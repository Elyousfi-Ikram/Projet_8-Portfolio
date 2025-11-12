// AboutComponent (standalone)
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  handleCVDownload() {
    console.log('CV téléchargé');
  }
  faArrowDown = faArrowDown;
}