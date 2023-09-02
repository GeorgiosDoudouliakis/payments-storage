/* Place your angular imports here */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";

/* Place any other imports here */
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Component({
  selector: 'ps-auth-page-wrapper',
  templateUrl: './auth-page-wrapper.component.html',
  styleUrls: ['./auth-page-wrapper.component.scss']
})
export class AuthPageWrapperComponent {
  public isPasswordVisible: boolean = false;
  @Input({ required: true }) public pageTitle: AuthPageTitle;
  @Input({ required: true }) public authForm: FormGroup;
  @Output() public onSubmitEmitter: EventEmitter<void> = new EventEmitter<void>();

  public submitHandler(): void {
    this.onSubmitEmitter.emit();
  }
}
