/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your component imports here */
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";
import { ProvidedServicesComponent } from "../components/provided-services/provided-services.component";

@Component({
  selector: 'ps-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, ProvidedServicesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
