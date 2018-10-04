import {Item} from "../interfaces/item";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable()
export class ItemsService {

  private items: Array<Item> = [];
  private _items$: BehaviorSubject<Item[]>;

  constructor() {
    this._items$ = new BehaviorSubject([]);
    //this.initialState();
    //this.notify();
  }

  addItem(): void {
    this.items.push(this.craftItem());
    this.notify();
  }

  get item$(): Observable<Item[]> {
    return this._items$.asObservable();
  }

  private notify() {
    this._items$.next(this.items);
  }

  private craftItem(): Item {
    let description = Math.random().toString(36).substr(2, 9);
    return {description, dateTime: Date.now()};
  }

  private initialState() {
    for(let i = 0; i < 100; i++)
      this.items.push(this.craftItem());
  }
}


