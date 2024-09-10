import { effect, Injectable, signal } from '@angular/core';
import type { CareerPath } from '../interfaces/career-ptah.interface';

@Injectable({
  providedIn: 'root',
})
export class CareerPathService {
  careerPaths = signal<CareerPath[]>([]);

  #init = effect(() => this.#loadCareerPaths(), { allowSignalWrites: true });

  #loadCareerPaths() {
    let careerPaths = JSON.parse(localStorage.getItem('careerPaths') || '[]');

    if (careerPaths.length === 0) {
      careerPaths = [
        {
          id: 1,
          name: 'Web Development',
          description: 'Career path for Web developers.',
        },
        {
          id: 2,
          name: 'IT Management',
          description: 'Career path for IT Managers.',
        },
      ];
      localStorage.setItem('careerPaths', JSON.stringify([]));
    }

    this.careerPaths.set(careerPaths);
  }
}
