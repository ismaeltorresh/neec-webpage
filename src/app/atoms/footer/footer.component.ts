import { Component, inject } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private companiesService = inject(CompaniesService);
  companyMe = this.companiesService.me()
  year = new Date().getFullYear();
}
