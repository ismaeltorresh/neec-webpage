import { Component } from '@angular/core';
import { ContactComponent } from '../../atoms/contact/contact.component';
import { NavigateComponent } from '../../atoms/navigate/navigate.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../atoms/footer/footer.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    ContactComponent,
    NavigateComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

}
