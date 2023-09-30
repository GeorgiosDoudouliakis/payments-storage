/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ps-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {}
