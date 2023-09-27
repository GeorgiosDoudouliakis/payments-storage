/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ps-your-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './your-service.component.html',
  styleUrls: ['./your-service.component.scss']
})
export class YourServiceComponent {}
