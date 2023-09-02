/* Place your angular imports here */
import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/* Place any other imports here */
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Directive()
export abstract class AbstractAuthDirective {
  public authForm: FormGroup;
  public abstract pageTitle: AuthPageTitle;

  constructor(public fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: this.fb.control<string>("", [Validators.required, Validators.email]),
      password: this.fb.control<string>("", [Validators.required, Validators.minLength(6)])
    });
  }

  public abstract submitAction(): void;

  public onSubmit(): void {
    if(this.authForm.invalid) return;
    this.submitAction();
  }
}
