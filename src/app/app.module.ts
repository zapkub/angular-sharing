import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, } from './app.component';
import {CalculateService} from './service/calculate';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
