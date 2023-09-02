/* Place your angular imports here */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/* Place any other imports here */
import { NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: 'ps-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  public forgotPasswordForm: FormGroup;

  constructor(private _modal: NzModalRef, private _fb: FormBuilder) {
    this.forgotPasswordForm = this._fb.group({
      email: this._fb.control<string>("", [Validators.required, Validators.email]),
    })
  }

  public destroyModal(): void {
    this._modal.destroy();
  }
}
