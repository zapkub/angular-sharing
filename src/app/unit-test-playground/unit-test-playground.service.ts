import {Component, Injectable} from '@angular/core';
import {AService} from './a.service';


@Injectable({
  providedIn: null
})
export class UnitTestPlaygroundService {


  constructor(
    private a: AService,
  ) { }

  // - result must be number
  // - result must initial default value = 0
  result = 0;
  isAllowUserToInputValue = true;

  currentSayHiMessage?: string

  public subtract(value: number) {
    this.result = this.result - value;
    this.currentSayHiMessage = this.a.sayMoo();
    if(this.result > 200) {
        this.isAllowUserToInputValue = false
    }
  }

  public add(value: number | string | boolean) {

    if (value < 0 || typeof value === 'boolean') {
      this.result = 0;
      return
    }

    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }


    this.result = this.result + value;
    this.currentSayHiMessage = this.a.sayHi();
    if(this.result > 200) {
        this.isAllowUserToInputValue = false
    }
  }


}
