import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CalculateService} from './service/calculate';
import {Store} from '@ngrx/store';
import {ConcatActionBegin, RootState} from '../store';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {


}
