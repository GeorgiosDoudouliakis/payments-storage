/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Place your component imports here */
import { YourServicesWrapperComponent } from "./pages/your-services/components";

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
    component: YourServicesWrapperComponent,
    children: [
      {
        path: "",
        title: "Υπηρεσίες | UPayments",
        loadComponent: () => import("./pages/your-services/layout/your-services/your-services.component").then(({ YourServicesComponent }) => YourServicesComponent)
      },
      {
        path: ":service-name",
        loadComponent: () => import("./pages/your-services/layout/your-service/your-service.component").then(({ YourServiceComponent }) => YourServiceComponent)
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
