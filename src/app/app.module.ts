import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, } from './app.component';
import {CalculateService} from './service/calculate';
import {RootStoreModule} from '../store';
import {ItemComponent, ListComponent} from './list-component/list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    CommonModule,
  ],
  providers: [
    CalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
