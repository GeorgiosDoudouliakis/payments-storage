/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ps-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {}
