import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent,} from './app.component';
import {RootStoreModule} from '../store';
import {ReactiveFormsModule} from '@angular/forms';
import {UnitTestPlaygroundComponent} from './unit-test-playground/unit-test-playground.component';
import {UnitTestPlaygroundModule} from './unit-test-playground/unit-test-playground.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    ReactiveFormsModule,
    UnitTestPlaygroundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
