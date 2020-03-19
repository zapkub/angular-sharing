import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  AmountInputComponent,
  DefaultLayoutableComponent,
  DefaultLayoutComponent,
  LayoutableComponent,
  SubAccountInputComponent
} from './layoutable.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from './table/table.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutableComponent,
    DefaultLayoutComponent,
    DefaultLayoutableComponent,
    SubAccountInputComponent,
    AmountInputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
