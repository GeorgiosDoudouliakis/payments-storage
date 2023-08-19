/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ps-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public readonly currentYear: number = new Date().getFullYear();
}
