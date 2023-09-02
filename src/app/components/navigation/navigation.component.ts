/* Place your angular imports here */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

/* Place your module imports here */
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from "ng-zorro-antd/drawer";

@Component({
  selector: 'ps-navigation',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, NzIconModule, NzDrawerModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isOnMobile: boolean = false;
  public isDrawerVisible: boolean = false;

  public ngOnInit(): void {
    this.isOnMobile = window.matchMedia("(max-width: 767px)").matches;
  }

  public openDrawer(): void {
    this.isDrawerVisible = true;
  }

  public closeDrawer(): void {
    this.isDrawerVisible = false;
  }
}
