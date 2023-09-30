/* Place your angular imports here */
import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

/* Place your component imports here */
import { PageHeaderComponent } from "../../../../components/page-header/page-header.component";

@Component({
  selector: 'ps-your-services-wrapper',
  standalone: true,
  imports: [PageHeaderComponent, RouterOutlet],
  templateUrl: './your-services-wrapper.component.html',
  styleUrls: ['./your-services-wrapper.component.scss']
})
export class YourServicesWrapperComponent {}
