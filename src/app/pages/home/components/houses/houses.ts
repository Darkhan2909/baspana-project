import { Component,inject,OnInit } from '@angular/core';
import {HousesService} from '../../../../shared/Services/houses';
import { House } from '../../../../shared/interfaces/house';
import {DecimalPipe, CommonModule } from '@angular/common';
import { interval, Observable } from 'rxjs';
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
   // итоговый поток домов
  filteredHouses$!: Observable<House[]>;
  ngOnInit(): void {
    const houses$ = this.service.getHouses(); // получаем все дома один раз
    // при вводе — debounceTime, затем switchMap к API
    this.filteredHouses$ = combineLatest([
      houses$,
      this.search.valueChanges.pipe(startWith(''), debounceTime(300), distinctUntilChanged())
    ]).pipe(
      map(([houses, query]) => {
        const q = (query || '').toLowerCase();
        return houses.filter(h => h.name.toLowerCase().includes(q)).slice(0, 7);
      })
    );
  }
}
