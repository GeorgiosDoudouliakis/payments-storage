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
  },
  {
    path: "your-services",
    children: [
      {
        path: "",
        title: "Υπηρεσίες | UPayments",
        loadComponent: () => import("./pages/your-services/layout/your-services.component").then(({ YourServicesComponent }) => YourServicesComponent)
      }
    ]
  },
  {
    path: "**",
    loadComponent: () => import("./pages/not-found/not-found.component").then(({ NotFoundComponent }) => NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
