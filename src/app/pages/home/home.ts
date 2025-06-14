import { Component } from '@angular/core';
import { Filter } from './blocks/filter/filter';
import { QuickLinks } from './blocks/quick-links/quick-links';
import { Offers } from './blocks/offers/offers';
import { Map } from './blocks/map/map';
import { RouterOutlet } from '@angular/router';
import { Extras } from './blocks/extras/extras';

@Component({
  selector: 'app-home',
  imports: [Filter, QuickLinks, Offers, Map, Extras],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
