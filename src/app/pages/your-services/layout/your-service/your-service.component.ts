/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

/* Place your component imports here */
import { PaymentsComponent, YourServiceInfoActionsComponent } from "../../components";

/* Place your module imports here */
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  selector: 'ps-your-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    YourServiceInfoActionsComponent,
    PaymentsComponent,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './your-service.component.html',
  styleUrls: ['./your-service.component.scss']
})
export class YourServiceComponent {}
