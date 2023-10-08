/* Place your angular imports here */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/* Place your modal imports here */
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzModalModule, NzModalRef } from "ng-zorro-antd/modal";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzI18nService, el_GR } from "ng-zorro-antd/i18n";

@Component({
  selector: 'ps-add-payment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, NzModalModule, NzButtonModule, NzDatePickerModule, NzInputModule, NzInputNumberModule],
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss']
})
export class AddPaymentModalComponent implements OnInit {
  constructor(private _i18n: NzI18nService, private _modalRef: NzModalRef) {}

  public ngOnInit(): void {
    this._i18n.setLocale(el_GR);
  }

  public onCancel(): void {
    this._modalRef.destroy();
  }
}
