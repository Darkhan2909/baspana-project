import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  providers: [DecimalPipe],
  standalone: true,
  styleUrl: './input.scss'
})
export class Input {
price: number | null = null;
  formattedPrice: string = '';

  constructor(private decimalPipe: DecimalPipe) {}

  onInputChange(value: string): void {
    // Удалить всё, кроме цифр
    const cleaned = value.replace(/\D/g, '');

    this.price = cleaned ? Number(cleaned) : null;

    // Применить форматирование через DecimalPipe (пример: "1 000 000")
    this.formattedPrice = this.price !== null
      ? this.decimalPipe.transform(this.price, '1.0-0', 'ru-RU') || ''
      : '';
  }
}
