import {Component} from '@angular/core';
import {UnitTestPlaygroundService} from './unit-test-playground.service';


@Component({
  selector: 'app-add',
  template: `

    <div>
      {{unitTestPlaygroundService.result}}
    </div>

    <input #inputElement />
    <button (click)="unitTestPlaygroundService.add(inputElement.value)">Add</button>
  `,
  providers: [
    UnitTestPlaygroundService
  ]
})
export class UnitTestPlaygroundComponent {


  constructor(private unitTestPlaygroundService: UnitTestPlaygroundService) { }

}
