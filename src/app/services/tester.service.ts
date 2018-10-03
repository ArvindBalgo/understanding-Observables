import { Injectable } from '@angular/core';

@Injectable()
export class TesterService {
  public foo: string;
  constructor() {
    console.log('TesterService construct')
  }
}
