/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";

@NgModule({
  imports: [CommonModule, YourServicesRoutingModule]
})
export class YourServicesModule {}
