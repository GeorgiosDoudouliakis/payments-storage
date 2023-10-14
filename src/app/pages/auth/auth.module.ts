/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Place your component imports here */
import { AuthPageWrapperComponent } from './components/auth-page-wrapper/auth-page-wrapper.component';
import { LoginComponent } from "./layout/login/login.component";
import { SignupComponent } from "./layout/signup/signup.component";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

/* Place your module imports here */
import { AuthRoutingModule } from "./auth-routing.module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";

/* Place your service imports here */
import { AuthService } from "./services";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule
  ],
  declarations: [LoginComponent, SignupComponent, AuthPageWrapperComponent, ForgotPasswordComponent],
  providers: [AuthService, NzModalService]
})
export class AuthModule {}
