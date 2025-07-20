import { Component } from '@angular/core';
import { Filter } from './components/filter/filter';
import { QuickLinks } from './components/quick-links/quick-links';
import { Map } from './components/map/map';
import { Extras } from './components/extras/extras';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Offers } from './components/offers/offers';

@Component({
  selector: 'app-home',
  imports: [Filter, QuickLinks, Map, Extras,FormsModule, CommonModule,Offers],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  links = [
    {
      title: 'Новостройки',
      subtitle: 'Всего объявлений: 365',
      buttonText: 'Показать все'
    },
    {
      title: 'Прямая продажа',
      subtitle: 'Всего: 98',
      buttonText: 'Подробнее'
    },
    {
      title: 'Калькулятор кредита',
      subtitle: 'Рассчитать платежи',
      buttonText: 'Рассчитать'
    },
    {
      title: 'Новости',
      subtitle: 'Все новости от банка',
      buttonText: 'Читать'
    }
  ];

  regions = ['Алматы', 'Астана', 'Шымкент'];
  types = ['Новостройка', 'Вторичка'];
  rooms = ['1', '2', '3+'];
  prices = ['до 10 млн', '10–20 млн', '20+ млн'];

  onSearch(filters: any) {
    console.log('Поиск с фильтрами:', filters);
    // здесь будет логика фильтрации
  }
}
