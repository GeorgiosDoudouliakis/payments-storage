/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

/* Place your component imports here */
import { DuePaymentsComponent, PaymentsComponent, YourServiceInfoActionsComponent } from "../../components";

/* Place your module imports here */
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTabsModule } from "ng-zorro-antd/tabs";

@Component({
  selector: 'ps-your-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    YourServiceInfoActionsComponent,
    DuePaymentsComponent,
    PaymentsComponent,
    NzButtonModule,
    NzIconModule,
    NzTabsModule
  ],
  templateUrl: './your-service.component.html',
  styleUrls: ['./your-service.component.scss']
})
export class YourServiceComponent {}
