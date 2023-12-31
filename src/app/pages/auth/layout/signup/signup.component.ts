/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place any other imports here */
import { AbstractAuthDirective } from "../../abstraction/abstract-auth.directive";
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Component({
  selector: 'ps-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../abstraction/auth-page.directive.scss']
})
export class SignupComponent extends AbstractAuthDirective {
  public pageTitle: AuthPageTitle = "ΕΓΓΡΑΦΗ";

  public submitAction() {}
}
