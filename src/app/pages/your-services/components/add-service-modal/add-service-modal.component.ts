/* Place your angular imports here */
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

/* Place your module imports here */
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule, NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: 'ps-add-service-modal',
  standalone: true,
  imports: [NzInputModule, NzButtonModule, FormsModule, NzModalModule],
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
