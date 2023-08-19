/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

/* Place your component imports here */
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'ps-header',
  standalone: true,
  imports: [CommonModule, RouterLink, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
