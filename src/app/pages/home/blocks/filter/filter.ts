import { Component, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { Select } from '../../../../shared/components/ui/select/select';
import { Input as InputComponent } from '../../../../shared/components/ui/input-price/input';

@Component({
  selector: 'app-filter',
  imports: [RouterLink, FormsModule, CommonModule, Select],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})

export class Filter {
  // @Input() placeholder: string = '';
  filters = [
  {
    key: 'region',
    label: 'Регион',
    options: ['Алматы', 'Астана', 'Шымкент'],
    model: ''
  },
  {
    key: 'type',
    label: 'Тип жилья',
    options: ['Квартира', 'Дом', 'Комната'],
    model: ''
  },
  {
    key: 'rooms',
    label: 'Комнат',
    options: ['1', '2', '3', '4+'],
    model: ''
  },
  {
    key: 'price',
    label: 'Цена',
    options: ['до 10 млн', '10–20 млн', '20+ млн'],
    model: ''
  }
];

}
