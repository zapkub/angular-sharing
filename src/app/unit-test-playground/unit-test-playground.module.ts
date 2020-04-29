import {NgModule} from '@angular/core';
import {UnitTestPlaygroundComponent} from './unit-test-playground.component';

@NgModule({
  declarations: [
    UnitTestPlaygroundComponent
  ],
  exports: [
    UnitTestPlaygroundComponent
  ],
})
export class UnitTestPlaygroundModule {}
