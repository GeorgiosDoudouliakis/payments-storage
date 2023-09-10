/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";

/* Place your component imports here */
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ServiceManagementComponent } from './components/service-management/service-management.component';

@NgModule({
  imports: [CommonModule, YourServicesRoutingModule],
  declarations: [
    AllServicesComponent,
    ServiceManagementComponent
  ]
})
export class YourServicesModule {}
