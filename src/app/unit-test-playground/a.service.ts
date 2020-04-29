import {Injectable} from '@angular/core';


@Injectable({
  providedIn: null
})
export class AService {

  sayHi(): string {
    throw new Error('Unimplemented')
    return 'hi';
  }

  sayMoo() :string {
    return 'moo'
  }

  sayMeaw(): string {
    return 'meaw'
  }
}
