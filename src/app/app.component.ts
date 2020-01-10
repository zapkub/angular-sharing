import {Component, ElementRef, ViewChild} from '@angular/core';
import {CalculateService, FakeCalculateService} from './service/calculate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sharing';

  @ViewChild('base', {static: true}) baseInput: ElementRef<HTMLInputElement>;
  @ViewChild('power', {static: true}) powerInput: ElementRef<HTMLInputElement>;

  result = 0;

  constructor(
    private calculateService: CalculateService,
  ) {
    console.log(this.calculateService);
  }

  handleCalculateButton() {
    const x = parseInt(this.baseInput.nativeElement.value, 10);
    const y = parseInt(this.powerInput.nativeElement.value, 10);
    this.result = this.calculateService.calculate(x, y);
  }


  // doCalculate() {
  //   const result = Math.pow(parseInt(
  //     this.baseInput.nativeElement.value, 10),
  //     parseInt(this.powerInput.nativeElement.value, 10));
  //   this.result = result;
  //
  // }

}

@Component({
  template: 'something',
  selector: 'app-something',
  providers: [
    {
      provide: CalculateService,
      useClass: FakeCalculateService,
    },
  ]
})
export class SomeComponent {
  constructor(
    private calculateService: CalculateService
  ) {
    console.log("HI2")
    console.log(calculateService.calculate(12, 12));
  }
}

@Component({
  template: 'something2',
  selector: 'app-something2',
  providers: [
    {
      provide: CalculateService,
      useClass: CalculateService,
    },
  ]
})
export class SomeComponent2 {
  constructor(
    private calculateService: CalculateService
  ) {
    console.log("HI")
    console.log(calculateService.calculate(12, 12));
  }
}
