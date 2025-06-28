import { Component, Input, Output, EventEmitter } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [FormsModule, CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class Select {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() model: string | null = null;
  @Output() modelChange = new EventEmitter<string>();

  onChange(value: string) {
    this.modelChange.emit(value);
  }
}
