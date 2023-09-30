/* Place your interface imports here */
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

/* Place your module imports here */
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";

@Component({
  selector: 'ps-your-service-info',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    NzIconModule,
    NzButtonModule,
    NzDropDownModule
  ],
  templateUrl: './your-service-info.component.html',
  styleUrls: ['./your-service-info.component.scss']
})
export class YourServiceInfoComponent {}
