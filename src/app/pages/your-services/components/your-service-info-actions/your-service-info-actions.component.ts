/* Place your interface imports here */
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

/* Place your module imports here */
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";

/* Place your component imports here */
import { EditServiceNameModalComponent } from "../edit-service-name-modal/edit-service-name-modal.component";
import {
  EditServiceOnlinePaymentLinkModalComponent
} from "../edit-service-online-payment-link-modal/edit-service-online-payment-link-modal.component";

@Component({
  selector: 'ps-your-service-info-actions',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    NzIconModule,
    NzButtonModule,
    NzDropDownModule
  ],
  templateUrl: './your-service-info-actions.component.html',
  styleUrls: ['./your-service-info-actions.component.scss'],
  providers: [NzModalService]
})
export class YourServiceInfoActionsComponent {
  constructor(private _modalService: NzModalService) {}

  public onNameEdit(): void {
    this._modalService.create({
      nzTitle: "Επεξεργασία ονόματος",
      nzContent: EditServiceNameModalComponent,
      nzWidth: 350
    });
  }

  public onOnlinePaymentLinkEdit(): void {
    this._modalService.create({
      nzTitle: "Επεξεργασία συνδέσμου ηλεκτρονικής πληρωμής",
      nzContent: EditServiceOnlinePaymentLinkModalComponent,
      nzWidth: 350
    });
  }

  public onDelete(): void {
    const deletionConfirmModal: NzModalRef = this._modalService.confirm({
      nzTitle: "Είσαι σίγουρος οτι θέλεις να διαγράψεις την υπηρεσία;",
      nzWidth: 400,
      nzOkText: "Διαγραφή",
      nzCancelText: "Ακύρωση",
      nzOnCancel: () => deletionConfirmModal.destroy()
    })
  }
}
