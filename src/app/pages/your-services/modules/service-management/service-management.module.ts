/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your component imports here */
import { ServiceManagementComponent } from "./components/service-management/service-management.component";

/* Place your module imports here */
import { ServiceManagementRoutingModule } from "./service-management-routing.module";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";

@NgModule({
  declarations: [ServiceManagementComponent],
  imports: [
    CommonModule,
    ServiceManagementRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule,
    NzDividerModule
  ]
})
export class ServiceManagementModule {}
