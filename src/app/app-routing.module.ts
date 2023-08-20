import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    title: "Αρχική | Payments Storage",
    loadComponent: () => import("./pages/home/layout/home.component").then(({ HomeComponent }) => HomeComponent)
  },
  {
    path: "login",
    title: "Σύνδεση | Payments Storage",
    loadComponent: () => import("./pages/auth/components/login/login.component").then(({ LoginComponent }) => LoginComponent)
  },
  {
    path: "signup",
    title: "Εγγραφή | Payments Storage",
    loadComponent: () => import("./pages/auth/components/signup/signup.component").then(({ SignupComponent }) => SignupComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
