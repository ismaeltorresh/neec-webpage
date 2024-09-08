import { Component, inject } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  private companiesService = inject(CompaniesService);
  companiesMe = this.companiesService.me();

}
