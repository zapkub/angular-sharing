import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, SomeComponent, SomeComponent2} from './app.component';
import {CalculateService, FakeCalculateService} from './service/calculate';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    SomeComponent2,
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
