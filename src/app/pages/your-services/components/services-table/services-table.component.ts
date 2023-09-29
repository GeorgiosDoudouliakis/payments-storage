/* Place your angular imports here */
import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

/* Place your module imports here */
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";

/* Place your component imports here */
import { ServiceTableItemComponent } from "../service-table-item/service-table-item.component";

/* Place your interface imports here */
import { YourServiceInterface } from "../../interfaces";

@Component({
  selector: 'ps-services-table',
  standalone: true,
  imports: [NzTableModule, NzButtonModule, ServiceTableItemComponent, NgForOf],
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.scss']
})
export class ServicesTableComponent {
  public yourServices: YourServiceInterface[] = [
    {
      id: 1,
      name: 'ΔΕΥ',
      imageUrl: "",
      onlinePaymentLink: "https://www.dei.gr/el/gia-to-spiti/ypostiriksi-epikoinonia/ilektroniki-pliromi-logariasmou/",
      payments: []
    },
    {
      id: 2,
      name: 'COSMOTE',
      imageUrl: "",
      onlinePaymentLink: "https://my.cosmote.gr/selfcare/jsp/pay_ebill.jsp",
      payments: []
    },
    {
      id: 3,
      name: 'ΕΥΑΘ',
      imageUrl: "",
      onlinePaymentLink: "https://www.eyath.gr/pliromes-ofeiles/",
      payments: []
    }
  ];
}
