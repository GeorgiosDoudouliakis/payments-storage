/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place any other imports here */
import { AbstractAuthDirective } from "../../abstraction/directives/abstract-auth.directive";
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../abstraction/scss/auth-page.scss']
})
export class LoginComponent extends AbstractAuthDirective {
  public pageTitle: AuthPageTitle = "ΣΥΝΔΕΣΗ";

  public submitAction() {}
}
