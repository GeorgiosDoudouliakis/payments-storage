/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your interface imports here */
import { YourServiceInterface } from "../../interfaces/your-service.interface";

@Component({
  selector: 'ps-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.scss']
})
export class ServicesTableComponent {
  public yourServices: YourServiceInterface[] = [
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
}
