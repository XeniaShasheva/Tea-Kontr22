import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {FeaturesModule} from "./feature/features.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FeaturesModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
