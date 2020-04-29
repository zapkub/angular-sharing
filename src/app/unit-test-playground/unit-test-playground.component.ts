import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {UnitTestPlaygroundService} from './unit-test-playground.service';
import { AService } from './a.service';


@Component({
  selector: 'app-add',
  template: `

    <div>
      {{unitTestPlaygroundService.result}}
    </div>

    <input #inputElement [disabled]='!unitTestPlaygroundService.isAllowUserToInputValue' />
    <button (click)="unitTestPlaygroundService.add(inputElement.value)">Add</button>
  `,
})
export class UnitTestPlaygroundComponent {

  @ViewChild('inputElement', {static: true}) inputElement: ElementRef<HTMLInputElement>

  get value() {
    return this.inputElement.nativeElement.value;
  }

  constructor(
    public unitTestPlaygroundService: UnitTestPlaygroundService,
    public aService: AService,
  ) { }


}
