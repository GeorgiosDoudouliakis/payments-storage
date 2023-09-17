/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";
import { NzTabsModule } from "ng-zorro-antd/tabs";

/* Place your component imports here */
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { YourServicesWrapperComponent } from './components/your-services-wrapper/your-services-wrapper.component';

@NgModule({
  declarations: [YourServicesWrapperComponent],
  imports: [
    CommonModule,
    PageHeaderComponent,
    YourServicesRoutingModule,
    NzTabsModule
  ]
})
export class YourServicesModule {}
