import { computed, effect, Injectable, signal } from '@angular/core';

const users: User[] = [
  {
    id: 1,
    name: 'Marisa Paredes',
    isManager: true,
  },
  {
    id: 2,
    name: 'John Doe',
    isManager: false,
  },
  {
    id: 3,
    name: 'Lars Nielsen',
    isManager: false,
  },
  {
    id: 4,
    name: 'Aiko Tanaka',
    isManager: false,
  },
  {
    id: 5,
    name: 'Carlos Monteiro',
    isManager: false,
  },
  {
    id: 6,
    name: 'Fatima Al-Hassan',
    isManager: false,
  },
  {
    id: 7,
    name: 'Ivan Petrov',
    isManager: false,
  },
  {
    id: 8,
    name: 'Lucia Rossi',
    isManager: false,
  },
  {
    id: 9,
    name: 'Youssef Abdallah',
    isManager: false,
  },
  {
    id: 10,
    name: 'Anya Kuznetsova',
    isManager: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  activeUserId = signal<number | null>(null);
  user = computed(() => users.find((u) => u.id === this.activeUserId()));
  users = signal(users);

  #init = effect(() => this.#loadUser(), { allowSignalWrites: true });

  setActiveUser(user: 'manager' | 'employee') {
    if (user === 'manager') {
      this.activeUserId.set(this.users().find((u) => u.isManager)!.id);
    } else {
      this.activeUserId.set(this.users().find((u) => !u.isManager)!.id);
    }

    localStorage.setItem('userId', this.activeUserId()!.toString());
    this.#loadUser();
  }

  #loadUser() {
    this.activeUserId.set(Number(localStorage.getItem('userId')));
  }
}

interface User {
  id: number;
  name: string;
  isManager: boolean;
}
