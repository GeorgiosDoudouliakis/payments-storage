/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";
import { NzTabsModule } from "ng-zorro-antd/tabs";

/* Place your component imports here */
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ServiceManagementComponent } from './components/service-management/service-management.component';
import { YourServicesWrapperComponent } from './components/your-services-wrapper/your-services-wrapper.component';

@NgModule({
  imports: [CommonModule, YourServicesRoutingModule, NzTabsModule],
  declarations: [
    AllServicesComponent,
    ServiceManagementComponent,
    YourServicesWrapperComponent
  ]
})
export class YourServicesModule {}
