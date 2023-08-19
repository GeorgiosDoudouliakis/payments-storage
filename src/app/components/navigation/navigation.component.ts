/* Place your angular imports here */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

/* Place your module imports here */
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from "ng-zorro-antd/dropdown";

@Component({
  selector: 'ps-navigation',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, NzMenuModule, NzIconModule, NzDropDownModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isOnMobile: boolean = false;

  public ngOnInit(): void {
    this.isOnMobile = window.matchMedia("(max-width: 767px)").matches;
  }
}
