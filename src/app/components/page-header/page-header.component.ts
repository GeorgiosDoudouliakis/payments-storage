/* Place your angular imports here */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your module imports here */
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  selector: 'ps-page-header',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input({ required: true }) title: string;
  @Input({ required: true }) iconType: string;
}
