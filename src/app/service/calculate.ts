import {Injectable} from '@angular/core';

export function calculate(x: number, y: number) {
  // take 20 min
  return Math.pow(x, y);
}


export interface CalculateService {
  calculate(x: number, y: number);
}

@Injectable({
  providedIn: null,
})
export class CalculateService {

  public static fakeWithValue(value: number) {
    const fake = new FakeCalculateService();
    fake.resultValue = value;
    return fake;
  }

  calculate(x: number, y: number) {
    // take 20 min
    return Math.pow(x, y);
  }
}


export class FakeCalculateService implements CalculateService {
  resultValue = 20;
  id = Math.random();

  calculate(x: number, y: number): number {
    console.log('log from fake calculate ' + this.id);
    return this.resultValue;
  }
}
