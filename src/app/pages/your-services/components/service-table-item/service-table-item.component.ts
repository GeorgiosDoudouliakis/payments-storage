/* Place your angular imports here */
import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";

/* Place your module imports here */
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

/* Place your interface imports here */
import { YourServiceInterface } from "../../interfaces";

/* Place any other imports here */
import { FirstTwoLettersPipe } from "../../pipes/first-two-letters/first-two-letters.pipe";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'ps-service-table-item',
  standalone: true,
  imports: [NzButtonModule, NzIconModule, FirstTwoLettersPipe, NgOptimizedImage, NgIf, RouterLink],
  templateUrl: './service-table-item.component.html',
  styleUrls: ['./service-table-item.component.scss']
})
export class ServiceTableItemComponent {
  @Input() public yourService: YourServiceInterface;
}
