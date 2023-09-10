/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place any other imports here */
import { NzTabPosition } from "ng-zorro-antd/tabs";

@Component({
  selector: 'ps-your-services-wrapper',
  templateUrl: './your-services-wrapper.component.html',
  styleUrls: ['./your-services-wrapper.component.scss']
})
export class YourServicesWrapperComponent {
  public tabPosition: NzTabPosition;

  constructor() {
    this.tabPosition = window.matchMedia('(max-width: 1023px)').matches ? "top" : "left";
  }
}
