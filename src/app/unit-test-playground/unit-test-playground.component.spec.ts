import { TestBed, ComponentFixture } from "@angular/core/testing";
import { UnitTestPlaygroundComponent } from './unit-test-playground.component';
import { UnitTestPlaygroundService } from './unit-test-playground.service';
import { AService } from './a.service';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';


fdescribe('Unit test component', () => {

    let fixture: ComponentFixture<UnitTestPlaygroundComponent>
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UnitTestPlaygroundComponent,
            ],
            providers: [
                UnitTestPlaygroundService,
                AService,
            ],
        })

        fixture = TestBed.createComponent(UnitTestPlaygroundComponent);

    })
    it('should component able to render', () => {
        expect(fixture.componentInstance).toBeTruthy();
    })

    it('should render element correctly include CurrentResult, Value Input and Add Button', () => {
        expect(fixture.componentInstance.inputElement).toBeTruthy();
        expect(fixture.debugElement.query(By.css('button'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('div'))).toBeTruthy();
    })

    it('should render result attribute to ui correctly', () => {
        fixture.detectChanges();
        let resultDivElement: ElementRef<HTMLDivElement> = fixture.debugElement.query(By.css('div'))
        expect(resultDivElement.nativeElement.innerHTML).toContain("0");

        const service: UnitTestPlaygroundService = TestBed.get(UnitTestPlaygroundService);
        service.result = 10;
        fixture.detectChanges();
        resultDivElement = fixture.debugElement.query(By.css('div'))
        expect(resultDivElement.nativeElement.innerHTML).toContain("10");
    })

    it('should disable value input correclt reflect to isAllowUserToInputValue',()=>{
        fixture.detectChanges();
        const service: UnitTestPlaygroundService = TestBed.get(UnitTestPlaygroundService);
        service.isAllowUserToInputValue = false;
        fixture.detectChanges();
        expect(fixture.componentInstance.inputElement.nativeElement.disabled).toBeTruthy();
    })

    it('should call add on click on Add button', () => {

        const service: UnitTestPlaygroundService = TestBed.get(UnitTestPlaygroundService);
        spyOn(service, 'add');
        fixture.detectChanges();

        const addButtonElement: ElementRef<HTMLButtonElement> = fixture.debugElement.query(By.css('button'));
        const clickEvent = new Event('click');
        addButtonElement.nativeElement.dispatchEvent(clickEvent);
        fixture.detectChanges();
        expect(service.add).toHaveBeenCalledTimes(1);

    })

});