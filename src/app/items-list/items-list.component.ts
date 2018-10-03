import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../services/items.service";
import {Item} from "../interfaces/item";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: []
})

export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  constructor(public itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.item$.subscribe(
      items => { this.items = items; },
      () => { console.log("Error Occured") },
      () => {console.log("Completed")}
      );
  }
}
