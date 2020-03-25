import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div
      [ngStyle]="{backgroundColor: this.color, marginTop: '8px'}"
    >
      {{value}}
    </div>
  `,
})
export class ItemComponent {
  @Input() value: string;
  @Input() selected = false;

  get color() {
    return this.selected ? 'blue' : 'crimson';
  }
}

@Component({
  selector: 'app-list',
  template: `

    <div>
      <app-item
        *ngFor="let v of values;let i = index" [value]="v"
        [selected]="currentSelectedIndex === i"
        (click)="onItemSelected(i)"
      >

      </app-item>
    </div>

  `,
})
export class ListComponent {
  values = ['Jeffer', 'Starbuck', 'KFC'];
  currentSelectedIndex = 0;

  onItemSelected(selectedIndex: number) {
    this.currentSelectedIndex = selectedIndex;
  }
}
