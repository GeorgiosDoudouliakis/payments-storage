/* Place your angular imports here */
import { Component, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

/* Place your module imports here */
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";

/* Place any other imports here */
import { AuthPageTitle } from "../../types/auth-page-title.type";

@Component({
  selector: 'ps-auth-wrapper[pageTitle][additionalLinksTpl]',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzIconModule, NzButtonModule],
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent implements OnInit {
  public authForm!: FormGroup;
  public isPasswordVisible: boolean = false;
  @Input() public pageTitle!: AuthPageTitle;
  @Input() public additionalLinksTpl!: TemplateRef<ElementRef>;

  constructor(private _fb: FormBuilder) {}

  public ngOnInit(): void {
    this._initializeForm();
  }

  private _initializeForm(): void {
    this.authForm = this._fb.group({
      email: this._fb.control<string>("", [Validators.required, Validators.email]),
      password: this._fb.control<string>("", [Validators.required, Validators.minLength(6)])
    });
  }
}
