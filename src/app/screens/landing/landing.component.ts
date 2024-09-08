import { Component, inject } from '@angular/core';
import { NavigateComponent } from '../../atoms/navigate/navigate.component';
import { ContactComponent } from '../../atoms/contact/contact.component';
import { BannerComponent } from '../../atoms/banner/banner.component';
import { CardsmallComponent } from '../../atoms/cardsmall/cardsmall.component';
import { Content01Component } from "../../atoms/content01/content01.component";
import { SolutionsService } from '../../services/solutions.service';
import { CompaniesService } from '../../services/companies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavigateComponent,
    ContactComponent,
    BannerComponent,
    CardsmallComponent,
    CommonModule,
    Content01Component
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  private solutionsService = inject(SolutionsService);
  private companiesService = inject(CompaniesService);
  solutionsMe = this.solutionsService.me();
  companyMe = this.companiesService.me();

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
