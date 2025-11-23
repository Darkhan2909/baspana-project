import { Component, DestroyRef, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../../../../shared/Services/users';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UsersStore } from '../../../../shared/signalStore/userStore';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSearches } from "../input-searches/input-searches";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, InputSearches],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users implements OnInit, OnChanges {
  store = inject(UsersStore);
  private destroyRef = inject(DestroyRef);

  @Input() searchTerm: string = '';   // сюда прилетает строка от child
  filteredUsers: any[] = [];          // массив для отображения

  ngOnInit() {
    // this.store.loadUsers(); // авто-загрузка при входе
    this.filteredUsers = this.store.users(); // сначала полный список
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      console.log('ngOnChanges: searchTerm изменился', changes['searchTerm']);
      const term = this.searchTerm.toLowerCase();
      this.filteredUsers = this.store.users().filter((u: any) =>
        u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term)
      );
    }
  }

  // --- ngAfterContentInit ---
  ngAfterContentInit() {
    console.log('ngAfterContentInit: <ng-content> вставлен (если был)');
  }

  // --- ngAfterViewChecked ---
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: шаблон проверен и обновлён');
    // например можно залогировать количество отфильтрованных пользователей
    console.log('Фильтрованных пользователей:', this.filteredUsers.length);
  }

  // --- ngOnDestroy ---
  ngOnDestroy() {
    console.log('ngOnDestroy: компонент уничтожен');
    // здесь делаем очистку: отписки, закрытие соединений и т.д.
  }

  setFilter(value: string) {
    this.searchTerm = value; // обновляем searchTerm
    this.ngOnChanges({ searchTerm: { currentValue: value, previousValue: null, firstChange: false, isFirstChange: () => false } });
  }
}
