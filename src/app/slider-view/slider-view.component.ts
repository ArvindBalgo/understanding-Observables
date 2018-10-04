import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../services/items.service";
import {fromEvent} from "rxjs";
import {ColorMixService} from "../services/colormix.service";

@Component({
  selector: 'app-slider-view',
  templateUrl: './slider-view.component.html',
  styleUrls: ['./slider-view.component.css'],
  providers: [ColorMixService]
})
export class SliderViewComponent implements OnInit {

  public height: number;
  public background: string;

  constructor(public itemsServices: ItemsService, public colorMix: ColorMixService) {
  }

  ngOnInit() {
    // console.clear();
    this.height = window.outerHeight;
    const source = fromEvent(document, 'scroll');
    source.subscribe(() => this.onScroll());

    let bodyColour = document.querySelector('body');

    //Init background color of DIV

    this.colorMix.color$.subscribe({
      next: (colour) => {
        bodyColour.style.backgroundColor = '#' + colour;
      }
    });

    setInterval(() => {
      //this.colorMix.decrement();
    }, 1000);

    /*setInterval(() => {
      console.clear();
    }, 1000);*/
  }

  onScroll() {
    let docElement = document.documentElement;
    if (docElement.scrollHeight == docElement.scrollTop + window.innerHeight) {
      this.itemsServices.addItem();

    }
  }
}
