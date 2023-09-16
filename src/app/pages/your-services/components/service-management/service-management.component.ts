/* Place your angular imports here */
import { Component } from '@angular/core';

@Component({
  selector: 'ps-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss']
})
export class ServiceManagementComponent {
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
  public isOnAddServiceMode: boolean = false;

  public showAddServiceSection(): void {
    this.isOnAddServiceMode = true;
  }

  public hideAddServiceSection(): void {
    this.isOnAddServiceMode = false;
  }

  public confirmServiceDeletion(): void {}
}
