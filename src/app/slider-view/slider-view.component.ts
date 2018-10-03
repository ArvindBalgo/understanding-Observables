import {Component, OnInit } from '@angular/core';
import { ItemsService } from "../services/items.service";
import { fromEvent } from "rxjs";
@Component({
  selector: 'app-slider-view',
  templateUrl: './slider-view.component.html',
  styleUrls: ['./slider-view.component.css'],
  providers: []
})
export class SliderViewComponent implements OnInit {

  public height: number;

  constructor(public itemsServices: ItemsService) {
  }

  ngOnInit() {
    this.height = window.outerHeight;
    const source = fromEvent(document, 'scroll');
    source.subscribe(() => this.onScroll());
  }

  onScroll() {
    let docElement = document.documentElement;
    if (docElement.scrollHeight == docElement.scrollTop + window.innerHeight) {
      this.itemsServices.addItem();
    }
  }
}
