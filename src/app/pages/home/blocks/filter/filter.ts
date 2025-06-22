import { Component, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})

export class Filter {
  @Input() regions: string[] = [];
  @Input() types: string[] = [];
  @Input() rooms: string[] = [];
  @Input() prices: string[] = [];

  selectedRegion = '';
  selectedType = '';
  selectedRooms = '';
  selectedPrice = '';
}
