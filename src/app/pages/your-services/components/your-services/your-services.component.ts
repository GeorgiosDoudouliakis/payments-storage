/* Place your angular imports here */
import { Component } from '@angular/core';

@Component({
  selector: 'ps-your-services',
  templateUrl: './your-services.component.html',
  styleUrls: ['./your-services.component.scss']
})
export class YourServicesComponent {
  public services = [
    {
      id: 1,
      name: 'ΔΕΥ'
    },
    {
      id: 2,
      name: 'COSMOTE'
    },
    {
      id: 3,
      name: 'ΕΥΑΘ'
    }
  ];

  public confirmServiceDeletion(): void {}
}
