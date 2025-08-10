import { Component } from '@angular/core';
import { Offers } from '../home/components/offers/offers';
import { QuickLinks } from '../home/components/quick-links/quick-links';
import { HousesComponent } from "../home/components/houses/houses";
// import { Houses } from '../home/components/houses/houses';
@Component({
  selector: 'app-search-pool',
  standalone: true,
  // imports: [Houses],
  templateUrl: './search-pool.html',
  styleUrls: ['./search-pool.scss'],
  imports: [HousesComponent]
})
export class SearchPool {

}

