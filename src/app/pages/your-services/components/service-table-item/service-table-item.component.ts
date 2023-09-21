/* Place your angular imports here */
import { Component, Input } from '@angular/core';

/* Place your interface imports here */
import { YourServiceInterface } from "../../interfaces/your-service.interface";

@Component({
  selector: 'ps-service-table-item',
  templateUrl: './service-table-item.component.html',
  styleUrls: ['./service-table-item.component.scss']
})
export class ServiceTableItemComponent {
  @Input() public yourService: YourServiceInterface

  public confirmServiceDeletion(): void {}
}
