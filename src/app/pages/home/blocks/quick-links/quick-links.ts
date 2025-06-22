import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-links',
  imports: [CommonModule],
  templateUrl: './quick-links.html',
  styleUrl: './quick-links.scss'
})
export class QuickLinks {
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
}
