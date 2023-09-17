/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Place your component imports here */
import { YourServicesWrapperComponent } from "./components/your-services-wrapper/your-services-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: YourServicesWrapperComponent,
    children: [
      {
        path: "all-services",
        title: "Όλες οι υπηρεσίες | UPayments",
        loadChildren: () => import("./modules/all-services/all-services.module").then(({ AllServicesModule }) => AllServicesModule)
      },
      {
        path: "service-management",
        title: "Διαχείριση υπηρεσιών | UPayments",
        loadChildren: () => import("./modules/service-management/service-management.module").then(({ ServiceManagementModule }) => ServiceManagementModule)
      },
      {
        path: "",
        redirectTo: "all-services",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourServicesRoutingModule {}
