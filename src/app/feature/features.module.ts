import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import {MainComponent} from "./main/main.component";
import {OrderComponent} from "./order/order.component";
import {ProductsComponent} from "./products/products.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    OrderComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
