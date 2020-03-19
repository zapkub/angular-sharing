import {NgModule} from '@angular/core';
import {TableInputComponent} from './table-input.component';
import {TableDataComponent} from './table-data.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TableInputComponent,
    TableDataComponent,
  ],
  exports: [
    TableInputComponent,
    TableDataComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class TableModule {

}

