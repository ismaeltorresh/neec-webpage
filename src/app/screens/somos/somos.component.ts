import { Component } from '@angular/core';
import { NavigateComponent } from '../../atoms/navigate/navigate.component';
import { ContactComponent } from '../../atoms/contact/contact.component';
import { BannerComponent } from '../../atoms/banner/banner.component';
import { CardsmallComponent } from '../../atoms/cardsmall/cardsmall.component';
import { Content01Component } from "../../atoms/content01/content01.component";

@Component({
  selector: 'app-somos',
  standalone: true,
  imports: [
    NavigateComponent,
    ContactComponent,
    BannerComponent,
    CardsmallComponent,
    Content01Component
  ],
  templateUrl: './somos.component.html',
  styleUrl: './somos.component.css'
})
export class SomosComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // For a smooth scroll animation
        block: 'start' // Align the top of the element to the top of the viewport
      });
    }
  }
}
