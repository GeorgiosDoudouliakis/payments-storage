/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your component imports here */
import { AddServiceComponent, ServicesTableComponent } from "../../components";

@Component({
  selector: 'ps-your-services',
  standalone: true,
  imports: [AddServiceComponent, ServicesTableComponent],
  templateUrl: './your-services.component.html',
  styleUrls: ['./your-services.component.scss']
})
export class YourServicesComponent {}
