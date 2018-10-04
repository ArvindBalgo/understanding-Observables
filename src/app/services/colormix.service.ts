import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable()
export class ColorMixService {

  private color: string = "FFFFFF";
  private _color$: BehaviorSubject<string>;

  constructor() {
    this._color$ = new BehaviorSubject(this.color);
    this.broadCast();
  }

  private broadCast() {
    this._color$.next(this.color);
  }

  get color$(): Observable<string> {
    return this._color$.asObservable();
  }

  public decrement() {
    this.color = (parseInt(this.color, 16) - 1000).toString(16);
    this.broadCast();
  }

}
