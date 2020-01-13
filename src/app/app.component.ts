import {Component, ElementRef, ViewChild} from '@angular/core';
import {CalculateService, FakeCalculateService} from './service/calculate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sharing';

  @ViewChild('base', {static: true})
  public baseInput: ElementRef<HTMLInputElement>;

  @ViewChild('power', {static: true})
  public powerInput: ElementRef<HTMLInputElement>;

  result = 0;

  constructor(
    private calculateService: CalculateService,
  ) {
  }

  handleCalculateButton() {
    const x = parseInt(this.baseInput.nativeElement.value, 10);
    const y = parseInt(this.powerInput.nativeElement.value, 10);
    this.result = this.calculateService.calculate(x, y);
  }

}
