import { computed, effect, Injectable, signal } from '@angular/core';

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
  skillLevel: string;
}
