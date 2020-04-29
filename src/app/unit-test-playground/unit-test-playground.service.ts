import {Component, Injectable} from '@angular/core';

@Injectable({
  providedIn: null
})
export class UnitTestPlaygroundService {

  result = 0;

  public add(value: number | string) {

    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }
    this.result = this.result + value;
  }


}
