/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

/* Place your component imports here */
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ServiceManagementComponent } from './components/service-management/service-management.component';
import { YourServicesWrapperComponent } from './components/your-services-wrapper/your-services-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderComponent,
    YourServicesRoutingModule,
    NzTabsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzListModule,
    NzTableModule,
    NzPopconfirmModule
  ],
  declarations: [
    AllServicesComponent,
    ServiceManagementComponent,
    YourServicesWrapperComponent
  ]
})
export class YourServicesModule {}
