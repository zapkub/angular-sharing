import {NgModule} from '@angular/core';
import {UnitTestPlaygroundComponent} from './unit-test-playground.component';
import {AService} from './a.service';
import {UnitTestPlaygroundService} from './unit-test-playground.service';

@NgModule({
  declarations: [
    UnitTestPlaygroundComponent
  ],
  providers: [
    AService,
    UnitTestPlaygroundService,
  ],
  exports: [
    UnitTestPlaygroundComponent,
  ],
})
export class UnitTestPlaygroundModule {}
