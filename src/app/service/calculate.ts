import {Injectable} from '@angular/core';

export function calculate(x: number, y: number) {
  // take 20 min
  return Math.pow(x, y);
}


@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  calculate(x: number, y: number) {
    // take 20 min
    return Math.pow(x, y);
  }
}


export class FakeCalculateService extends CalculateService {
  calculate(x: number, y: number): number {
    return 20;
  }
}
