/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Place your component imports here */
import { AllServicesComponent } from "./components/all-services/all-services.component";

const routes: Routes = [
  {
    path: "",
    component: AllServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllServicesRoutingModule {}
