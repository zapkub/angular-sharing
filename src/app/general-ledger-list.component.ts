import {Component} from '@angular/core';


@Component({
  template: `
    <div>
      General Ledger List
      <a [routerLink]="['detail']" [queryParams]="{id: '0018882'}">Go to detail page for id = 0018882</a>
    </div>
  `
})
export class GeneralLedgerListComponent {}
