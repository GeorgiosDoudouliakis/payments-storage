/* Place your angular imports here */
import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

/* Place your component imports here */
import { ForgotPasswordComponent } from "../../components/forgot-password/forgot-password.component";

/* Place your service imports here */
import { NzModalService } from "ng-zorro-antd/modal";

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

  constructor(public override fb: FormBuilder, private _modalService: NzModalService) {
    super(fb);
  }

  public openModal(): void {
    this._modalService.create({
      nzTitle: "Ξέχασες τον κωδικό σου;",
      nzContent: ForgotPasswordComponent,
      nzWidth: 380
    });
  }

  public submitAction() {}
}
