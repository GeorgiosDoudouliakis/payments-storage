/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place your component imports here */
import { PageHeaderComponent } from "../../../../components/page-header/page-header.component";
import { YourServiceInfoComponent } from "../../components";

@Component({
  selector: 'ps-your-service',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, YourServiceInfoComponent],
  templateUrl: './your-service.component.html',
  styleUrls: ['./your-service.component.scss']
})
export class YourServiceComponent {}
