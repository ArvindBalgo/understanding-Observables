import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderViewComponent } from './slider-view/slider-view.component';
import { ItemsListComponent } from './items-list/items-list.component';
import {TesterService} from "./services/tester.service";
import { ItemComponent } from './item/item.component';
import {ItemsService} from "./services/items.service";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SliderViewComponent,
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TesterService,ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
