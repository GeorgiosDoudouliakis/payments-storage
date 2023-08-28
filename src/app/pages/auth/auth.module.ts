/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Place your component imports here */
import { LoginComponent } from "./layout/login/login.component";
import { SignupComponent } from "./layout/signup/signup.component";

/* Place your module imports here */
import { AuthRoutingModule } from "./auth-routing.module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";

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
    NzButtonModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule {}
