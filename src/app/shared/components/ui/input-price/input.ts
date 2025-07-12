import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberSpacedPipe } from '../../../pipes/number-spaced.pipe';
@Component({
  selector: 'app-input',
  imports: [FormsModule,NumberSpacedPipe],
  templateUrl: './input.html',
  providers: [DecimalPipe],
  standalone: true,
  styleUrl: './input.scss'
})
export class AppInputComponent {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let raw = input.value.replace(/\D/g, ''); // убираем всё кроме цифр
   
    // const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    this.valueChange.emit(raw); // отдаём "чистое" число
    input.value = raw;    // показываем отформатированное
  }
}
