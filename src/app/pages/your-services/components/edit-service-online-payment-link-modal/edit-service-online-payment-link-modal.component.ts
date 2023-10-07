/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/* Place your module imports here */
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzModalModule, NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: 'ps-edit-service-online-payment-link-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, NzModalModule, NzButtonModule, NzInputModule],
  templateUrl: './edit-service-online-payment-link-modal.component.html',
  styleUrls: ['./edit-service-online-payment-link-modal.component.scss']
})
export class EditServiceOnlinePaymentLinkModalComponent {
  public serviceOnlinePaymentLink: string = "";

  constructor(private _modalRef: NzModalRef) {}

  public onCancel(): void {
    this._modalRef.destroy();
  }
}
