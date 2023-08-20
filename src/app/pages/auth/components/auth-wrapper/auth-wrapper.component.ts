/* Place your angular imports here */
import { Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, NzFormModule, NzInputModule, NzIconModule, NzButtonModule],
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent {
  public isPasswordVisible: boolean = false;
  @Input() public pageTitle!: AuthPageTitle;
  @Input() public additionalLinksTpl!: TemplateRef<ElementRef>;
}
