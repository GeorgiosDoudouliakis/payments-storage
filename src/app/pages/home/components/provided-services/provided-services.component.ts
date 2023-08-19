/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your module imports here */
import { NzCardModule } from "ng-zorro-antd/card";

@Component({
  selector: 'ps-provided-services',
  standalone: true,
  imports: [CommonModule, NzCardModule],
  templateUrl: './provided-services.component.html',
  styleUrls: ['./provided-services.component.scss']
})
export class ProvidedServicesComponent {}
