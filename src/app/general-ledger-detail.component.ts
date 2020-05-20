import {Component} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  template: `
    <div>
      General Ledger Detail {{activatedRoute.snapshot.queryParams.id}}
      <a [routerLink]="['..']">Back to list</a>
    </div>
  `,
})
export class GeneralLedgerDetailComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }
}
