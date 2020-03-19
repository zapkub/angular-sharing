import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormControl} from '@angular/forms';









@Component({
  template: `
    <input [formControl]="control" (keydown.shift.tab)="navigate.emit('down')" style="width: 320px"/>
  `,
  selector: 'app-sub-account-input'
})
export class SubAccountInputComponent {
  public control = new FormControl('test initial data', {});
  public navigate = new EventEmitter<'up' | 'down'>();
}

@Component({
  template: `
    <input [formControl]="control" (keydown.shift.tab)="navigate.emit('down')" style="width: 320px"/>
  `,
  selector: 'app-amount-input'
})
export class AmountInputComponent implements AfterViewInit {
  @Input() subAccountInputComponent: SubAccountInputComponent;
  public control = new FormControl('1000', {});
  public navigate = new EventEmitter<'up' | 'down'>();

  ngAfterViewInit(): void {
    console.log('view init')
    console.log(this.subAccountInputComponent.control.value);
  }
}

@Component({
  template: `
    <div style="padding:20px">
      <app-sub-account-input></app-sub-account-input>
    </div>
    <app-amount-input></app-amount-input>
  `,
  selector: 'app-default-layoutable'
})
export class DefaultLayoutComponent {
}

export abstract class LayoutableComponentMessageProvider {
  public abstract getMessage(): string;
}



@Component({
  template: `
    <ng-content></ng-content>
  `,
  selector: `app-layoutable-component`
})
export class LayoutableComponent implements AfterViewInit {

  @ContentChild(SubAccountInputComponent, {static: false}) subAccountInputComponent: SubAccountInputComponent;
  @ContentChild(AmountInputComponent, {static: false}) amountInputComponent: AmountInputComponent;

  @Input() messageProvider: LayoutableComponentMessageProvider;

  ngAfterViewInit(): void {
    this.subAccountInputComponent.navigate.subscribe((direction) => {
      console.log('navigate' + direction);
    });

    if (!this.amountInputComponent) {
      throw new Error('<app-amount-input> is not found');
    }

  }

}

@Component({
  template: `
    <app-sub-account-input #subAccountInputComponent></app-sub-account-input>
    <app-amount-input [subAccountInputComponent]="subAccountInputComponent"></app-amount-input>
  `,
  selector: `app-default-layoutable-component`
})
export class DefaultLayoutableComponent extends LayoutableComponent {
  @ViewChild(SubAccountInputComponent, {static: false}) subAccountInputComponent: SubAccountInputComponent;
  @ViewChild(AmountInputComponent, {static: false}) amountInputComponent: AmountInputComponent;
}
