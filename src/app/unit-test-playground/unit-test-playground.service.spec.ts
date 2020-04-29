import {TestBed} from '@angular/core/testing';
import {UnitTestPlaygroundService} from './unit-test-playground.service';
import {UnitTestPlaygroundModule} from './unit-test-playground.module';
import { AService } from './a.service';



describe('Unit test playground', () => {
  let service: UnitTestPlaygroundService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        UnitTestPlaygroundModule,
      ]
    });

    service = TestBed.get(UnitTestPlaygroundService);
  });

  it('should result property initial with 0', () => {
    expect(service).toBeTruthy();
    expect(service.result).toEqual(0);
  });

  it('should add calculate result correctly', () => {
    const aService: AService = TestBed.get(AService);

    spyOn(aService, 'sayHi').and.returnValue("Hello");

    const currentResult = service.result;
    service.add(5);
    expect(service.result).toEqual(currentResult + 5);
    expect(service.currentSayHiMessage).toBeTruthy();
    expect(aService.sayHi).toHaveBeenCalled();


    // input is string
    service.add("10");
    expect(service.result).toEqual(currentResult + 15);

    service.add(-1);
    expect(service.result).toEqual(0);

    service.add(12);
    service.add(true);
    expect(service.result).toEqual(0);

  });


});
