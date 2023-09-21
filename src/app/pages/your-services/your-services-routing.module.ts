/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Place your component imports here */
import {
  YourServicesComponent
} from "./components/your-services/your-services.component";

const routes: Routes = [
  {
    path: "",
    title: "Υπηρεσίες | UPayments",
    component: YourServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourServicesRoutingModule {}
