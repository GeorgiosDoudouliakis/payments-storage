/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

/* Place your module imports here */
import { AppRoutingModule } from './app-routing.module';

/* Place your component imports here */
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

/* Place any other imports here */
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { IconDefinition } from "@ant-design/icons-angular";
import {
  MenuOutline,
  EyeOutline,
  EyeInvisibleOutline,
  UserOutline,
  PoweroffOutline,
  LogoutOutline,
  ApartmentOutline,
  SearchOutline,
  DeleteOutline,
  PlusOutline,
  EditOutline,
  DownOutline,
  UploadOutline,
  CheckOutline,
  ArrowLeftOutline
} from "@ant-design/icons-angular/icons";

const icons: IconDefinition[] = [
  MenuOutline,
  EyeOutline,
  EyeInvisibleOutline,
  UserOutline,
  PoweroffOutline,
  LogoutOutline,
  ApartmentOutline,
  SearchOutline,
  DeleteOutline,
  PlusOutline,
  EditOutline,
  DownOutline,
  UploadOutline,
  CheckOutline,
  ArrowLeftOutline
];

// Date picker locale
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, el_GR } from 'ng-zorro-antd/i18n';
import el from '@angular/common/locales/el';
registerLocaleData(el);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    NzIconModule.forRoot(icons),
    NzBackTopModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: NZ_I18N,
    useValue: el_GR
  }]
})
export class AppModule { }
