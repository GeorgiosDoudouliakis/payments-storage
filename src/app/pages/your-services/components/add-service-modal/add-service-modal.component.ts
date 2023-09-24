/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place any other imports here */
import { NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: 'ps-add-service-modal',
  templateUrl: './add-service-modal.component.html',
  styleUrls: ['./add-service-modal.component.scss']
})
export class AddServiceModalComponent {
  public serviceAdded: any;

  constructor(private _modalRef: NzModalRef) {}

  public onCancel(): void {
    this._modalRef.destroy();
  }
}
