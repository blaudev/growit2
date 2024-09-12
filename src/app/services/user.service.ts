import { computed, effect, inject, Injectable, signal } from '@angular/core';
import type { User } from '../interfaces/user.interface';
import { CareerPathService } from './career-path.service';

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Senior Software Engineer',
    skills: [
      {
        name: 'Technology',
        items: [
          {
            name: 'System design',
            description:
              'Designing complex systems with scalability and maintainability in mind.',
            completed: true,
          },
          {
            name: 'Performance optimization',
            description:
              'Identifying and implementing ways to improve system performance.',
            completed: false,
          },
          {
            name: 'Security best practices',
            description:
              'Ensuring the software is secure by following best practices in security.',
            completed: false,
          },
          {
            name: 'CI/CD',
            description:
              'Setting up and maintaining continuous integration and continuous delivery pipelines.',
            completed: false,
          },
        ],
      },
      {
        name: 'Team Player',
        items: [
          {
            name: 'code reviews (leading)',
            description:
              'Leading code reviews and ensuring code quality across the team.',
            completed: false,
          },
          {
            name: 'Architectural decisions',
            description: 'Making high-level decisions on system architecture.',
            completed: false,
          },
          {
            name: 'Cross-team collaboration',
            description:
              'Working effectively with other teams to ensure project success.',
            completed: false,
          },
        ],
      },
      {
        name: 'Communication',
        items: [
          {
            name: 'Technical presentations',
            description:
              'Delivering presentations on technical topics to stakeholders and peers.',
            completed: false,
          },
          {
            name: 'Stakeholder management',
            description:
              'Managing expectations and communication with project stakeholders.',
            completed: false,
          },
          {
            name: 'writing proposals',
            description:
              'Creating proposals for new projects, technologies, or processes.',
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Marisa Paredes',
    isManager: true,
    careerPathId: '8aefb3f7-8b8d-4d7b-bd5f-6b2c91a76215',
    levelId: 'Engineering Manager',
    skills: [],
  },
  {
    id: 3,
    name: 'Lars Nielsen',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Mid. Software Engineer',
    skills: [],
  },
  {
    id: 4,
    name: 'Aiko Tanaka',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Junior Software Engineer',
    skills: [],
  },
  {
    id: 5,
    name: 'Carlos Monteiro',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Mid. Software Engineer',
    skills: [],
  },
  {
    id: 6,
    name: 'Fatima Al-Hassan',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Senior Software Engineer',
    skills: [],
  },
  {
    id: 7,
    name: 'Ivan Petrov',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Senior Software Engineer',
    skills: [],
  },
  {
    id: 8,
    name: 'Lucia Rossi',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Junior Software Engineer',
    skills: [],
  },
  {
    id: 9,
    name: 'Youssef Abdallah',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Mid. Software Engineer',
    skills: [],
  },
  {
    id: 10,
    name: 'Anya Kuznetsova',
    isManager: false,
    careerPathId: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    levelId: 'Junior Software Engineer',
    skills: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #careerPathService = inject(CareerPathService);

  currentUserId = signal<number | null>(null);
  currentUser = computed(() =>
    users.find((u) => u.id === this.currentUserId())
  );

  activeUser = signal<User | null>(null);

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
    const user = users.find((u) => u.id == id);
    this.activeUser.set(user!);
  }

  completeItem(skillName: string, itemName: string) {
    const user = this.activeUser();
    const skill = user!.skills.find((s) => s.name === skillName);
    const item = skill!.items.find((i) => i.name === itemName);
    item!.completed = true;

    this.activeUser.set(user);
  }
}
