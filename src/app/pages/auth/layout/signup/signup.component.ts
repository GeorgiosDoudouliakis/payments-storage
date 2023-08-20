/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

/* Place your component imports here */
import { AuthWrapperComponent } from "../../components/auth-wrapper/auth-wrapper.component";

/* Place any other imports here */
import { AbstractAuthDirective } from "../../abstraction/abstract-auth.directive";
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Component({
  selector: 'ps-signup',
  standalone: true,
  imports: [CommonModule, AuthWrapperComponent, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends AbstractAuthDirective {
  public pageTitle: AuthPageTitle = "ΣΥΝΔΕΣΗ";
}
