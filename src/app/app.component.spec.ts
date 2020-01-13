import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CalculateService, FakeCalculateService} from './service/calculate';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: CalculateService,
          // useClass: FakeCalculateService,
          // useValue: CalculateService.fakeWithValue(199),
          useFactory: () => {
            const fake = new FakeCalculateService();
            fake.resultValue = 199;
            return fake;
          }
        },
      ]
    }).compileComponents();
  }));

  it('should able to render appComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render 2 input field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.componentRef.instance.baseInput).toBeTruthy();
    expect(fixture.componentRef.instance.powerInput).toBeTruthy();

    fixture.componentRef.instance.baseInput.nativeElement.value = '12';
    fixture.componentRef.instance.baseInput.nativeElement.dispatchEvent(
      new Event('input')
    );
    fixture.componentRef.instance.powerInput.nativeElement.value = '2';
    fixture.componentRef.instance.powerInput.nativeElement.dispatchEvent(
      new Event('input')
    );
    fixture.detectChanges();
    fixture.componentRef.instance.handleCalculateButton();

    expect(fixture.componentRef.instance.result).toEqual(199);

  });

});
