/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Place your component imports here */
import { LoginComponent } from "./layout/login/login.component";
import { SignupComponent } from "./layout/signup/signup.component";

const routes: Routes = [
  {
    path: "login",
    title: "Σύνδεση | Payments Storage",
    component: LoginComponent
  },
  {
    path: "signup",
    title: "Εγγραφή | Payments Storage",
    component: SignupComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth/login"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
