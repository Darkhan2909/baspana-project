import { Component,inject,OnInit } from '@angular/core';
import {HousesService} from '../../../../shared/Services/houses';
import { House } from '../../../../shared/interfaces/house';
import {DecimalPipe, CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [DecimalPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './houses.html',
  styleUrl: './houses.scss'
})
export class Houses implements OnInit{
  service = inject(HousesService);
  interval$ = interval(1000);
  house$ = this.service.house$;
  search = new FormControl('');
  ngOnInit(): void {
    // при вводе — debounceTime, затем switchMap к API
    this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.service.getHouses(query || ''))
    ).subscribe();
    // при первом открытии — без фильтра
    this.service.getHouses().subscribe();
  }
}
