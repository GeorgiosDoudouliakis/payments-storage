/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your service imports here */
import { NzModalService } from "ng-zorro-antd/modal";

/* Place your component imports here */
import { AddServiceModalComponent } from "../add-service-modal/add-service-modal.component";

@Component({
  selector: 'ps-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {
  constructor(private _modalService: NzModalService) {}

  public onServiceAdd(): void {
    this._modalService.create({
      nzTitle: "Προσθήκη υπηρεσίας",
      nzContent: AddServiceModalComponent,
      nzWidth: 350
    });
  }
}
