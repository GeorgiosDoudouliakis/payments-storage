import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    title: "Αρχική | Payments Storage",
    loadComponent: () => import("./pages/home/layout/home.component").then(({ HomeComponent }) => HomeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
