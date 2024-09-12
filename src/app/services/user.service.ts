import { computed, effect, Injectable, signal } from '@angular/core';
import type { User } from '../interfaces/user.interface';

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    isManager: false,
    skillLevel: 'Senior Software Engineer',
  },
  {
    id: 2,
    name: 'Marisa Paredes',
    isManager: true,
    skillLevel: 'Engineering Manager',
  },
  {
    id: 3,
    name: 'Lars Nielsen',
    isManager: false,
    skillLevel: 'Mid Software Engineer',
  },
  {
    id: 4,
    name: 'Aiko Tanaka',
    isManager: false,
    skillLevel: 'Senior Software Engineer',
  },
  {
    id: 5,
    name: 'Carlos Monteiro',
    isManager: false,
    skillLevel: 'Junior Software Engineer',
  },
  {
    id: 6,
    name: 'Fatima Al-Hassan',
    isManager: false,
    skillLevel: 'Mid Software Engineer',
  },
  {
    id: 7,
    name: 'Ivan Petrov',
    isManager: false,
    skillLevel: 'Senior Software Engineer',
  },
  {
    id: 8,
    name: 'Lucia Rossi',
    isManager: false,
    skillLevel: 'Junior Software Engineer',
  },
  {
    id: 9,
    name: 'Youssef Abdallah',
    isManager: false,
    skillLevel: 'Mid Software Engineer',
  },
  {
    id: 10,
    name: 'Anya Kuznetsova',
    isManager: false,
    skillLevel: 'Junior Software Engineer',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUserId = signal<number | null>(null);
  currentUser = computed(() =>
    users.find((u) => u.id === this.currentUserId())
  );

  activeUserId = signal<number | null>(null);
  activeUser = computed(() =>
    this.users().find((u) => u.id == this.activeUserId())
  );

  users = signal(users);

  #init = effect(() => this.#loadCurrentUser(), { allowSignalWrites: true });

  #loadCurrentUser() {
    this.currentUserId.set(Number(localStorage.getItem('userId')));
  }

  setCurrentUser(user: 'manager' | 'employee') {
    const userId =
      user === 'manager'
        ? this.users().find((u) => u.isManager)!.id
        : this.users().find((u) => !u.isManager)!.id;

    localStorage.setItem('userId', userId.toString());
    this.#loadCurrentUser();
  }

  setActiveUser(id: number) {
    console.log('Setting active user', id);
    this.activeUserId.set(id);
  }
}
