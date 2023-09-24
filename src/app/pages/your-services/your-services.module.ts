/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

/* Place your module imports here */
import { YourServicesRoutingModule } from "./your-services-routing.module";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzModalModule } from "ng-zorro-antd/modal";

/* Place your component imports here */
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { YourServicesComponent } from "./layout/your-services.component";
import { AddServiceComponent, ServicesTableComponent, ServiceTableItemComponent, AddServiceModalComponent } from './components';

@NgModule({
  declarations: [YourServicesComponent, AddServiceComponent, ServicesTableComponent, ServiceTableItemComponent, AddServiceModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    YourServicesRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule,
    NzIconModule,
    NzModalModule
  ]
})
export class YourServicesModule {}
