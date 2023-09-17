/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Place your component imports here */
import { ServiceManagementComponent } from "./components/service-management/service-management.component";

const routes: Routes = [
  {
    path: "",
    component: ServiceManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceManagementRoutingModule {}
