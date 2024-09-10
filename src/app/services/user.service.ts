import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  username = signal<string>('');

  #init = effect(() => this.#loadUsername(), { allowSignalWrites: true });

  setUser(username: string) {
    localStorage.setItem('username', username);
    this.#loadUsername();
  }

  #loadUsername() {
    this.username.set(localStorage.getItem('username') || '');
  }
}
