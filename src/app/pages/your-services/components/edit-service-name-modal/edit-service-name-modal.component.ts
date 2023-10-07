/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/* Place your module imports here */
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzWaveModule } from "ng-zorro-antd/core/wave";
import { NzModalModule, NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: 'ps-edit-service-name-modal',
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, NzModalModule, NzButtonModule, NzWaveModule],
  templateUrl: './edit-service-name-modal.component.html',
  styleUrls: ['./edit-service-name-modal.component.scss']
})
export class EditServiceNameModalComponent {
  public serviceName: string = "";

  constructor(private _modalRef: NzModalRef) {}

  public onCancel(): void {
    this._modalRef.destroy();
  }
}
