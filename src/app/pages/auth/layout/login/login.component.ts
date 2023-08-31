/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place any other imports here */
import { AbstractAuthDirective } from "../../abstraction/abstract-auth.directive";
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Component({
  selector: 'ps-login',
  templateUrl: '../../abstraction/auth-page.html',
  styleUrls: ['../../abstraction/auth-page.scss']
})
export class LoginComponent extends AbstractAuthDirective {
  public pageTitle: AuthPageTitle = "ΣΥΝΔΕΣΗ";

  public submitAction() {}
}
