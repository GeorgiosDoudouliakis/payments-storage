/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";

/* Place your component imports here */
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { YourServicesComponent } from "./layout/your-services.component";
import { AddServiceComponent, ServicesTableComponent, ServiceTableItemComponent } from './components';

@NgModule({
  declarations: [YourServicesComponent, AddServiceComponent, ServicesTableComponent, ServiceTableItemComponent],
  imports: [
    CommonModule,
    PageHeaderComponent,
    YourServicesRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule
  ]
})
export class YourServicesModule {}
