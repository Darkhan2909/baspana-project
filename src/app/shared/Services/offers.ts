import { Injectable } from "@angular/core";
import { Offer } from "../interfaces/offer";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class OffersService {
    // Массив с предложениями
  // Каждое предложение содержит изображение, заголовок, цену и дату публикации
  // Дата в формате ISO для удобства сортировки и отображения
offers = [
    {
      image: 'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg',
      title: 'ЖК Asce Tec 2',
      price: 'от 390000 тг за м²',
      date: '2025-06-14T15:45:00'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
      title: 'ЖК Тау Шапагат',
      price: 'от 570000 тг за м²',
      date: '2025-07-01T10:30:00'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2024/03/07/15/57/houses-8618837_1280.jpg',
      title: 'ЖК OJET',
      price: 'от 300000 тг за м²',
      date: '2025-08-20T12:00:00'
    }
  ];

  addOffer(offer: Offer) {
    this.offers.push(offer);
  }

  getOffers() {
    return this.offers;
  }

  clearOffers() {
    this.offers = [];
  }
  private offersSubject = new BehaviorSubject<Offer[]>(this.offers);
  public offers$ = this.offersSubject.asObservable();

  searchOffers(query: string) {
    const filtered = this.offers.filter(offer =>
      offer.title.toLowerCase().includes(query.toLowerCase())
    );
    this.offersSubject.next(filtered);
  }
}