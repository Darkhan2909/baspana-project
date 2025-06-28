import { Component } from '@angular/core';
import { Offers } from '../home/blocks/offers/offers';
import { QuickLinks } from '../home/blocks/quick-links/quick-links';

@Component({
  selector: 'app-search-pool',
  imports: [Offers],
  templateUrl: './search-pool.html',
  styleUrl: './search-pool.scss'
})
export class SearchPool {

}
