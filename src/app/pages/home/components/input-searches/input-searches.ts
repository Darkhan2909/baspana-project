import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-searches',
  imports: [CommonModule],
  templateUrl: './input-searches.html',
  styleUrl: './input-searches.scss'
})
export class InputSearches {
    @Output() filterChange = new EventEmitter<string>();

  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterChange.emit(value);
  }
}