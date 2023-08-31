/* Place your angular imports here */
import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Directive()
export abstract class AbstractAuthDirective {
  public authForm: FormGroup;
  public isPasswordVisible: boolean = false;
  public abstract pageTitle: string;

  constructor(private _fb: FormBuilder) {
    this.authForm = this._fb.group({
      email: this._fb.control<string>("", [Validators.required, Validators.email]),
      password: this._fb.control<string>("", [Validators.required, Validators.minLength(6)])
    });
  }

  public abstract submitAction(): void;

  public onSubmit(): void {
    if(this.authForm.invalid) return;
    this.submitAction();
  }
}
