/* Place your angular imports here */
import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your module imports here */
import { NzCardModule } from "ng-zorro-antd/card";
import { NzButtonModule } from "ng-zorro-antd/button";

/* Place your interface imports here */
import { ProvidedServiceItem } from "../../interfaces/provided-service-item.interface";

@Component({
  selector: 'ps-provided-service-item',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzButtonModule],
  templateUrl: './provided-service-item.component.html',
  styleUrls: ['./provided-service-item.component.scss']
})
export class ProvidedServiceItemComponent {
  @Input() public providedService: ProvidedServiceItem;
}
