import {Component} from '@angular/core';
import {FacadePatternFacade, ServiceA, ServiceB} from './facade-pattern.facade';


@Component({
  template: `
    <div>
      {{data}}
    </div>
  `,
})
export class FacadePatternComponent {
  get data() {
    this.facade.getCartItems();
    this.facade.getUserInfo();
    return '';
  }

  constructor(private facade: FacadePatternFacade) { }

}

