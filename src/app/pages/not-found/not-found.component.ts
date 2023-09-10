/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

/* Place your module imports here */
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: 'ps-not-found',
  standalone: true,
  imports: [CommonModule, NzButtonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {}
