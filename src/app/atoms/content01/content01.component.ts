import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-content01',
  standalone: true,
  imports: [],
  templateUrl: './content01.component.html',
  styleUrl: './content01.component.css'
})
export class Content01Component {
  @Input () image: string = '';
  @Input () order: string = 'order-1';
  @Input () section: string = '';
}
