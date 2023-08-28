/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

/* Place your component imports here */
import { AuthWrapperComponent } from "../../components/auth-wrapper/auth-wrapper.component";

/* Place any other imports here */
import { AbstractAuthDirective } from "../../abstraction/abstract-auth.directive";
import { AuthPageTitle } from "../../types/auth-page-title.type";
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: 'ps-login',
  standalone: true,
  imports: [CommonModule, AuthWrapperComponent, RouterLink, NzButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractAuthDirective {
  public pageTitle: AuthPageTitle = "ΕΓΓΡΑΦΗ";
}
