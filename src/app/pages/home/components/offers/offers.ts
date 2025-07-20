import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../../../shared/pipes/date-format.pipe';
import { NumberSpacedPipe } from '../../../../shared/pipes/number-spaced.pipe';
import { OffersService } from '../../../../shared/Services/offers';
import { Offer } from '../../../../shared/interfaces/offer';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-offers',
  imports: [CommonModule, DateFormatPipe, NumberSpacedPipe, FormsModule],
  templateUrl: './offers.html',
  styleUrl: './offers.scss'
})
export class Offers implements OnInit {
  protected title = 'Лучшее предложение дня';
  offers: Offer[] = [];
  search = '';
  offerService = inject(OffersService);
  offers$ = this.offerService.offers$;

  constructor() {
    // this.offerService.offers$.subscribe(offer => (this.offers = offer));
  }

  ngOnInit(): void {
    this.loadoffer();
    // Вызываем метод загрузки предложений при инициализации компонента
  }
  loadoffer() {
    // Получаем предложения из сервиса
    this.offers = this.offerService.getOffers();
  }

  addoffer(offer: Offer) {
    this.offerService.addOffer(offer);
    // Добавляем новое предложение в сервис
  }
  onSearch() {
    this.offerService.searchOffers(this.search);
  }
}
