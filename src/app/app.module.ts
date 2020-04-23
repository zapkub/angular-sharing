import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, } from './app.component';
import {RootStoreModule} from '../store';
import {
  AnotherDynamicLayoutComponent,
  AnotherEmailInputPortal, AnotherNameInputPortal,
  AnotherReuseComponent,
  DynamicLayoutComponent,
  DynamicLayoutInputPortalComponent,
  DynamicLayoutTextPortalComponent
} from './dynamic-layout/dynamic-layout.component';
import {PortalModule} from '@angular/cdk/portal';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicLayoutComponent,
    DynamicLayoutInputPortalComponent,
    DynamicLayoutTextPortalComponent,
    AnotherReuseComponent,

    AnotherEmailInputPortal,
    AnotherNameInputPortal,
    AnotherDynamicLayoutComponent,

  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    PortalModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
