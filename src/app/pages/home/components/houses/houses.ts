import { Component,OnInit } from '@angular/core';
import {HousesService} from '../../../../shared/Services/houses';
import { House } from '../../../../shared/interfaces/house';
import {DecimalPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-houses',
  imports: [DecimalPipe, CommonModule],
  templateUrl: './houses.html',
  styleUrl: './houses.scss'
})
export class Houses implements OnInit{
  houses: House[] = [];
  constructor(private service: HousesService) {}

  ngOnInit(): void {
    this.service.getHouses().subscribe(list => this.houses = list.slice(0, 10));
  }
}
