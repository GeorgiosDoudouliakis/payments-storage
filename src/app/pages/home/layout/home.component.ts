/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your component imports here */
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";

@Component({
  selector: 'ps-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
