import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';


@Component({
  template: `
    <div>
      {{data | async | json}}
    </div>
  `,
})
class SomeComponent {
  get data() {
    return this.activatedRoute.params;
  }

  get dataSnapshot() {
    return this.activatedRoute.snapshot.params;
  }

  get dataFromQueryParams() {
    return this.activatedRoute.snapshot.queryParams;
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }
}

describe('InjectActivatedRoute', () => {
  it('should inject correctly', async () => {
    TestBed.configureTestingModule({
      declarations: [SomeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({something: 'Hello'}),
            snapshot: {
              params: {something: 'Hello'}
            }
          }
        },
      ]
    });
    const fixture = TestBed.createComponent(SomeComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.data).toBeTruthy();
    const data = await fixture.componentInstance.data.toPromise();
    expect(data.something).toEqual(('Hello'));
    expect(fixture.componentInstance.dataSnapshot.something).toEqual(('Hello'));

  });
});
