import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe, CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import * as HousesActions from '../../../../store/houses/houses.actions'; // Ensure this path is correct and the file exists
import { selectAllHouses } from '../../../../store/houses/houses.selectors'; // Ensure this path is correct and the file exists
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [DecimalPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './houses.html',
  styleUrl: './houses.scss'
})
export class HousesComponent implements OnInit {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef); 
  houses$ = this.store.select(selectAllHouses);
  search = new FormControl('');

  ngOnInit(): void {
    // первая загрузка
    // this.store.dispatch(HousesActions.loadHouses({ query: '' }));

    // авто-поиск
    this.search.valueChanges
      .pipe(startWith(''), debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(q => {
        this.store.dispatch(HousesActions.loadHouses({ query: q || '' }));
      });
  }
}
