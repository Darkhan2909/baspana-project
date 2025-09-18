import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/Services/users';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UsersStore } from '../../../../shared/signalStore/userStore';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users implements OnInit {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  store = inject(UsersStore);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    // this.store.loadUsers(); // авто-загрузка при входе
  }
}
