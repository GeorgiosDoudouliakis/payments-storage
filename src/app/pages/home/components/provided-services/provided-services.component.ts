/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your component imports here */
import { ProvidedServiceItemComponent } from "../provided-service-item/provided-service-item.component";

/* Place your interface imports here */
import { IProvidedServiceItem } from "../../interfaces/provided-service-item.interface";

/* Place any other imports here */
import { PROVIDED_SERVICES } from "../../mock/provided-services.mock";

@Component({
  selector: 'ps-provided-services',
  standalone: true,
  imports: [CommonModule, ProvidedServiceItemComponent],
  templateUrl: './provided-services.component.html',
  styleUrls: ['./provided-services.component.scss']
})
export class ProvidedServicesComponent {
  public providedServices: IProvidedServiceItem[] = PROVIDED_SERVICES;
}
