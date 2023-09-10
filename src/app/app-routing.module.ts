/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    title: "Αρχική | UPayments",
    loadComponent: () => import("./pages/home/layout/home.component").then(({ HomeComponent }) => HomeComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./pages/auth/auth.module").then(({ AuthModule }) => AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
