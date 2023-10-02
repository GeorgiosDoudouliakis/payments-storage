/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your angular imports here */
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: 'ps-payments',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {}
