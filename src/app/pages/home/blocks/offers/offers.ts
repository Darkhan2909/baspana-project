import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.html',
  styleUrl: './offers.scss'
})
export class Offers {
offers = [
    {
      image: 'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg',
      title: 'ЖК Asce Tec 2',
      price: 'от 390 000 тг за м²'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
      title: 'ЖК Тау Шапагат',
      price: 'от 570 000 тг за м²'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2024/03/07/15/57/houses-8618837_1280.jpg',
      title: 'ЖК OJET',
      price: 'от 300 000 тг за м²'
    }
  ];
}
