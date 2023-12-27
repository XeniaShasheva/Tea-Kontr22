import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProductComponent} from "./components/product/product.component";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedRoutingModule,
    FooterComponent,
    HeaderComponent,
    ProductComponent
  ]
})
export class SharedModule { }
