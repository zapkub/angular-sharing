import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentRef,
  ContentChild,
  ElementRef, Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {FormControl} from '@angular/forms';
import {Content} from '@angular/compiler/src/render3/r3_ast';


// @Component(({
//   selector: 'app-dynamic-layout-input-portal',
//   template: `
//     <ng-container [cdkPortalOutlet]></ng-container>
//   `
// }))
// export class DynamicLayoutInputPortalComponent {
//   @ViewChild(CdkPortalOutlet, {static: true}) cdkPortalOutlet: CdkPortalOutlet;
// }

@Component({
  selector: 'app-another-email-input-portal',
  template: `
    <ng-container [cdkPortalOutlet]></ng-container>
  `
})
export class AnotherEmailInputPortal {
  @ViewChild(CdkPortalOutlet, {static: true}) cdkPortalOutlet: CdkPortalOutlet;
}

@Component({
  selector: 'app-another-name-input-portal',
  template: `
    <ng-container [cdkPortalOutlet]></ng-container>
  `
})
export class AnotherNameInputPortal {
  @ViewChild(CdkPortalOutlet, {static: true}) cdkPortalOutlet: CdkPortalOutlet;
}

@Component({
  template: `
    <input placeholder="email" #email/>
    <input placeholder="name" #name/>
    <ng-content></ng-content>
  `,
  selector: 'app-another-reuse'
})
export class AnotherReuseComponent implements AfterContentInit {

  @ViewChild('name', {static: true}) nameInputElement: ElementRef<HTMLInputElement>;

  @ContentChild(AnotherNameInputPortal, {static: true}) namePortal: AnotherNameInputPortal;
  @ContentChild(AnotherEmailInputPortal, {static: true}) emailPortal: AnotherEmailInputPortal;

  ngAfterContentInit(): void {
    if (this.namePortal) {
      this.namePortal.cdkPortalOutlet
        .attachDomPortal(new DomPortal<HTMLElement>(this.nameInputElement));
    }
  }
}

@Component(({
  selector: 'app-dynamic-layout-text-portal',
  template: `
    <ng-container [cdkPortalOutlet]></ng-container>
  `
}))
export class DynamicLayoutTextPortalComponent {
  @Input() name: 'text' | 'input'
  @ViewChild(CdkPortalOutlet, {static: true}) cdkPortalOutlet: CdkPortalOutlet;
}

@Component({
  template: `
    <div #textElement>
      Just text {{number}}
    </div>
    <input placeholder="accountNumber" #inputElement [formControl]="inputFormControl"/>
    <ng-content></ng-content>
  `,
  selector: 'app-dynamic-layout'
})
export class DynamicLayoutComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() number = 0;
  @ViewChild('inputElement', {static: true}) inputElement: ElementRef<HTMLInputElement>;
  @ViewChild('textElement', {static: true}) textElement: ElementRef<HTMLDivElement>;

  private inputFormControl = new FormControl('', {});

  @ViewChild('defaultInputPortal', {static: true}) defaultInputPortal: CdkPortalOutlet;
  @ViewChild('defaultTextPortal', {static: true}) defaultTextPortal: CdkPortalOutlet;

  @ContentChild(DynamicLayoutTextPortalComponent, {static: true}) customTextPortal: DynamicLayoutTextPortalComponent;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit(): void {
    // apply layout
    if (this.customInputPortal) {
      this.customInputPortal.cdkPortalOutlet
        .attachDomPortal(new DomPortal<HTMLElement>(this.inputElement));
    }
    if (this.customTextPortal) {
      this.customTextPortal.cdkPortalOutlet.attachDomPortal(new DomPortal(this.textElement));
    }
    console.log( this.inputElement );
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-another-dynamic-layout',
  template: `
    <div #textElement>
      Just text {{number}}
    </div>
    <ng-content></ng-content>
  `,
})
export class AnotherDynamicLayoutComponent extends DynamicLayoutComponent implements AfterContentInit {
  @ContentChild('inputElement', {static: true}) inputElement: ElementRef<HTMLInputElement>;
}
