/* Place your interface imports here */
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

/* Place your module imports here */
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzButtonModule } from "ng-zorro-antd/button";

/* Place any other imports here */
import { FirstTwoLettersPipe } from "../../pipes/first-two-letters/first-two-letters.pipe";

@Component({
  selector: 'ps-your-service-info',
  standalone: true,
  imports: [CommonModule, FirstTwoLettersPipe, NgOptimizedImage, NzButtonModule, NzIconModule, NzToolTipModule],
  templateUrl: './your-service-info.component.html',
  styleUrls: ['./your-service-info.component.scss']
})
export class YourServiceInfoComponent {}
