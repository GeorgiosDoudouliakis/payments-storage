/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your component imports here */
import { AllServicesComponent } from "./components/all-services/all-services.component";

/* Place your module imports here */
import { AllServicesRoutingModule } from "./all-services-routing.module";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzListModule } from "ng-zorro-antd/list";

@NgModule({
  declarations: [AllServicesComponent],
  imports: [
    CommonModule,
    AllServicesRoutingModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzListModule
  ]
})
export class AllServicesModule {}
