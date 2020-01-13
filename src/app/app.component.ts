import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CalculateService} from './service/calculate';
import {Store} from '@ngrx/store';
import {ConcatActionBegin, RootState} from '../store';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-sharing';

  @ViewChild('base', {static: true})
  public baseInput: ElementRef<HTMLInputElement>;

  @ViewChild('power', {static: true})
  public powerInput: ElementRef<HTMLInputElement>;

  result = 0;

  concatResult: Observable<string> = of('');

  constructor(
    private calculateService: CalculateService,
    private store: Store<RootState>,
  ) {
  }

  handleCalculateButton() {
    const x = parseInt(this.baseInput.nativeElement.value, 10);
    const y = parseInt(this.powerInput.nativeElement.value, 10);
    this.result = this.calculateService.calculate(x, y);
  }

  ngAfterViewInit(): void {
    this.handleConcatString();
  }

  handleConcatString() {

    this.concatResult = this.store.select((rootState) => {
      return rootState.concat.result;
    });

    this.store.dispatch(ConcatActionBegin({secondValue: 'world', firstValue: 'hello'}));
    this.store.dispatch(ConcatActionBegin({secondValue: 'world', firstValue: 'hello2'}));
  }

}
