import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {TableDataComponent} from './table-data.component';

export interface TableInputComponentValue {
  aliasName: string
}

@Component({
  template: `
    <input placeholder="search pattern name" (keyup)="onChange($event)"/>
    <input #alias placeholder="alias name"/>
  `,
  selector: 'app-table-input'
})
export class TableInputComponent {
  @Input() tableDataComponent: TableDataComponent;

  @ViewChild('alias', {static: true}) aliasNameInputElement: ElementRef<HTMLInputElement>;

  get value(): TableInputComponentValue {
    return {
      aliasName: this.aliasNameInputElement.nativeElement.value
    };
  }

  onChange($event: Event) {
    const source: HTMLInputElement = $event.target as HTMLInputElement;
    this.tableDataComponent.filter = source.value;
  }
}
