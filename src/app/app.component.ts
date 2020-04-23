import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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
    private store: Store<RootState>,
  ) { }

  ngAfterViewInit(): void {
  }


}
