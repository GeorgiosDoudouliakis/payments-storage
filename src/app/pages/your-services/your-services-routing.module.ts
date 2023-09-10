/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Place your component imports here */
import { YourServicesWrapperComponent } from "./components/your-services-wrapper/your-services-wrapper.component";
import { AllServicesComponent } from "./components/all-services/all-services.component";
import { ServiceManagementComponent } from "./components/service-management/service-management.component";

const routes: Routes = [
  {
    path: "",
    component: YourServicesWrapperComponent,
    children: [
      {
        path: "all-services",
        component: AllServicesComponent
      },
      {
        path: "service-management",
        component: ServiceManagementComponent
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
  exports: [RouterModule],
  declarations: [],
})
export class YourServicesRoutingModule {}
