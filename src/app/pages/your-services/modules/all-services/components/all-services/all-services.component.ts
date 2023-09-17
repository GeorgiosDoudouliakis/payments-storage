/* Place your angular imports here */
import { Component } from '@angular/core';

@Component({
  selector: 'ps-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent {
  public services: string[] = ['ΔΕΥ', 'COSMOTE', 'ΕΥΑΘ'];
}
