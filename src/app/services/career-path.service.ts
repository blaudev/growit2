import { computed, effect, Injectable, signal } from '@angular/core';
import type { CareerPath } from '../interfaces/career-path.interface';

const cp = [
  {
    id: '8aefb3f7-8b8d-4d7b-bd5f-6b2c91a76215',
    name: 'IT Management',
    description: 'Career path for IT Managers.',
    skillTypes: [
      { id: '9b37d7f2-2a93-4a0b-9d5f-5b6df55f5046', name: 'Technology' },
      { id: 'f2c2d51b-b32a-4a4a-bd27-6d2f4a1c742a', name: 'Team Player' },
      {
        id: 'a65b6a29-2b5c-4c4e-a8b7-9174b6b749c8',
        name: 'Communication',
      },
    ],
    skillLevels: [
      { id: 'd8c27e64-d9b0-4b9d-81e7-0594b2f5e19a', name: 'Tech Lead' },
      {
        id: 'c0b09a73-5b69-47c1-83c6-62b9a0f4e5cb',
        name: 'Engineering Manager',
      },
    ],
    skillGroups: [
      {
        id: '21b4e9d2-1a1d-4d3b-b5ed-d54e1a6b233e',
        skillTypeId: '9b37d7f2-2a93-4a0b-9d5f-5b6df55f5046',
        skillLevelId: 'd8c27e64-d9b0-4b9d-81e7-0594b2f5e19a',
        skills: [
          {
            id: 'e31b83a5-62e6-4e79-9d5d-f6c2d7f7d7b9',
            name: 'Scalable architecture',
          },
          {
            id: 'c3d2f2b2-4f1b-45e3-9a9d-9f4e5b4c7c6b',
            name: 'Multiple tech stacks',
          },
          {
            id: '2e4a65d5-56a1-4f8d-b7ae-2a5e74a6c890',
            name: 'Data modeling',
          },
          {
            id: '8d1a4e93-16a3-4f4d-8e36-df94a2c8d7c2',
            name: 'Cloud platforms (AWS/Azure/GCP)',
          },
        ],
      },
      {
        id: 'f4b6c5d2-1e32-4a9d-bebc-dc4a7e8a6d9a',
        skillTypeId: '9b37d7f2-2a93-4a0b-9d5f-5b6df55f5046',
        skillLevelId: 'c0b09a73-5b69-47c1-83c6-62b9a0f4e5cb',
        skills: [
          {
            id: 'e98a9f8c-7f9e-4b5b-81d6-3d1b3f7d2a8e',
            name: 'Technology trend analysis',
          },
          {
            id: '5a1b3f5e-8c2a-4e3c-8d4b-1c9e7f0a1d5b',
            name: 'System integration',
          },
          {
            id: 'a43c6b2e-0e7b-4f9a-91b8-9d7a7b9d2d1c',
            name: 'Vendor evaluation',
          },
        ],
      },
      {
        id: '7c9e4d4a-7d5a-43b8-b4d2-9e7b4b3c6d0b',
        skillTypeId: 'f2c2d51b-b32a-4a4a-bd27-6d2f4a1c742a',
        skillLevelId: 'd8c27e64-d9b0-4b9d-81e7-0594b2f5e19a',
        skills: [
          {
            id: '8e7b1b2f-8d4e-4a92-a9d5-6c1e8e6a3b5d',
            name: 'Team leadership',
          },
          {
            id: '1c4b7b12-2c4e-4d9b-a9b8-0f7b5a1d2b4e',
            name: 'Mentoring seniors',
          },
          {
            id: 'a4b1c5e7-8e3d-4e5a-87c9-2d4a5f6e7d2a',
            name: 'Project planning',
          },
        ],
      },
      {
        id: 'b5c6e1d3-2e4d-4c7b-9f4d-d1e5c8a7f6b9',
        skillTypeId: 'f2c2d51b-b32a-4a4a-bd27-6d2f4a1c742a',
        skillLevelId: 'c0b09a73-5b69-47c1-83c6-62b9a0f4e5cb',
        skills: [
          {
            id: 'b8d4c6e9-8f5b-4d7e-94d7-d4c6b5a1e2f3',
            name: 'Resource planning',
          },
          {
            id: '5c9d8e7f-7d6e-4d5b-b6e1-8f3b7c2d6e7a',
            name: 'Conflict resolution',
          },
          {
            id: 'c4e5b8d7-1a2b-4f6a-9e4c-6b7d8a2c5f6a',
            name: 'Performance management',
          },
        ],
      },
      {
        id: '4e7c6b9a-2d8b-4e6c-9f8b-1a2c7d5e6a4b',
        skillTypeId: 'a65b6a29-2b5c-4c4e-a8b7-9174b6b749c8',
        skillLevelId: 'd8c27e64-d9b0-4b9d-81e7-0594b2f5e19a',
        skills: [
          {
            id: 'b9f8c2d1-4e5b-4d8e-b5c7-3d8e7b2c9a1e',
            name: 'Technical strategy',
          },
          {
            id: 'a7b8c9d1-5c6e-4d9f-92b5-1c9d7f3a2e4e',
            name: 'Negotiation skills',
          },
          {
            id: 'e6d5b8c3-9f0e-4a2e-9b7d-6e7f8a1b5d4c',
            name: 'Executive summaries',
          },
        ],
      },
      {
        id: '6f8d2b9e-4e5c-4d7a-9e8b-3d5c6a1b7f2e',
        skillTypeId: 'a65b6a29-2b5c-4c4e-a8b7-9174b6b749c8',
        skillLevelId: 'c0b09a73-5b69-47c1-83c6-62b9a0f4e5cb',
        skills: [
          {
            id: 'b4e7d5c8-6a9e-4b2d-9f3c-8e1d5b7a2c6e',
            name: 'Budget planning',
          },
          {
            id: 'd5e8c2f1-9a1b-4c7b-8d2e-6f8a1b5c9d7e',
            name: 'Company-wide presentations',
          },
          {
            id: 'c3d6b5e8-7d9a-4c8b-9e1d-5a6b7c8e9f4a',
            name: 'Policy making',
          },
        ],
      },
    ],
  },
  {
    id: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    name: 'Software Engineering',
    description: 'Career path of Software Engineers.',
    skillTypes: [
      { id: '6b21c452-5b9d-4c88-8a92-74c2748a4e6b', name: 'Technology' },
      { id: '2e4d7cb5-51a5-4e2a-9a77-f84d27e92d0c', name: 'Team Player' },
      {
        id: 'b645e0c8-2d3a-4c51-92c7-cdcd348c9a8d',
        name: 'Communication',
      },
    ],
    skillLevels: [
      {
        id: 'b39b9ec4-32e6-4ac6-a7d4-0b24d0e8d1f5',
        name: 'Junior Developer',
      },
      {
        id: 'cc0d9299-51eb-4c48-8a52-1b2d6a35d6d3',
        name: 'Mid-level Developer',
      },
      {
        id: 'bb0b74d2-7dbe-4c63-b07d-bb865a8fcd4a',
        name: 'Senior Developer',
      },
    ],
    skillGroups: [
      {
        id: '3b8b6d5e-960c-4a6f-9f47-c1b2e5e9c6d7',
        skillTypeId: '6b21c452-5b9d-4c88-8a92-74c2748a4e6b',
        skillLevelId: 'b39b9ec4-32e6-4ac6-a7d4-0b24d0e8d1f5',
        skills: [
          { id: 'f4d7e5e4-9e9f-4a7c-9a94-c3a5cf0a9e66', name: 'HTML' },
          { id: 'c24b2d22-47d2-4fc3-b8d5-91d4c3d25f93', name: 'CSS' },
          {
            id: 'b0f9c0ae-8b74-45f2-86d8-2e457b434e60',
            name: 'JavaScript basics',
          },
          {
            id: 'e4cb7a9f-b8d1-4a2f-9b71-8a4f87edb2b4',
            name: 'Version control (Git)',
          },
        ],
      },
      {
        id: 'cde7b8e7-2b8d-4f1d-b5d1-0c45608ea70e',
        skillTypeId: '6b21c452-5b9d-4c88-8a92-74c2748a4e6b',
        skillLevelId: 'cc0d9299-51eb-4c48-8a52-1b2d6a35d6d3',
        skills: [
          {
            id: 'ef5aeb5d-0b8c-4d76-8979-2fca34e2c7ec',
            name: 'React/Vue/Angular',
          },
          { id: 'ef23d507-2c4e-4e4c-b7e7-4b7edda69199', name: 'Node.js' },
          {
            id: 'b8c00334-6d8e-42f5-b1c7-c3f7fc7eb84b',
            name: 'RESTful APIs',
          },
          {
            id: 'f75f7b37-9e77-4b3c-a3a4-bf41ed4b8929',
            name: 'SQL/NoSQL databases',
          },
        ],
      },
      {
        id: 'f564bde4-31d1-4e4e-9b9e-c1cf0f54b53a',
        skillTypeId: '6b21c452-5b9d-4c88-8a92-74c2748a4e6b',
        skillLevelId: 'bb0b74d2-7dbe-4c63-b07d-bb865a8fcd4a',
        skills: [
          {
            id: 'c548b9e6-54e0-4db7-b582-4769c7c7edb4',
            name: 'System design',
          },
          {
            id: 'd2c5e7d0-5c7e-4c48-8b9c-873f342529d0',
            name: 'Performance optimization',
          },
          {
            id: '6e8c7e77-93f3-4b08-a462-499b72b0e6b6',
            name: 'Security best practices',
          },
          { id: 'c57e4e80-f4a5-4b9f-bf7d-7a2b79c2a5a4', name: 'CI/CD' },
        ],
      },
      {
        id: '54b07b3d-b59d-41d6-92a6-0bfc6b4b7f64',
        skillTypeId: '2e4d7cb5-51a5-4e2a-9a77-f84d27e92d0c',
        skillLevelId: 'b39b9ec4-32e6-4ac6-a7d4-0b24d0e8d1f5',
        skills: [
          {
            id: '4e7a9f33-f7b2-44cb-9d22-f4854b33e237',
            name: 'Pair programming',
          },
          {
            id: 'd095e2d1-2fbd-4e0c-b5d4-d1d0f54237c7',
            name: 'Code reviews (participating)',
          },
        ],
      },
      {
        id: 'b4d715d5-fb68-4b1d-9f93-f2298d4a9a8f',
        skillTypeId: '2e4d7cb5-51a5-4e2a-9a77-f84d27e92d0c',
        skillLevelId: 'cc0d9299-51eb-4c48-8a52-1b2d6a35d6d3',
        skills: [
          {
            id: 'c6e5d8f4-8d4c-4c3f-b9bb-eed0a96715d1',
            name: 'Mentoring juniors',
          },
          {
            id: 'fd3d6d2b-6e0b-4c3d-87bb-1b377b97c639',
            name: 'Sprint planning',
          },
          {
            id: 'e279e61e-f95b-45d1-a7f1-d7d4e5d27b53',
            name: 'Estimating tasks',
          },
        ],
      },
      {
        id: 'c6b2d2e3-f7b1-4e9d-9040-12f0c2f2d0f6',
        skillTypeId: '2e4d7cb5-51a5-4e2a-9a77-f84d27e92d0c',
        skillLevelId: 'bb0b74d2-7dbe-4c63-b07d-bb865a8fcd4a',
        skills: [
          {
            id: '9d65d2f0-5db7-4c0d-baf3-7591a2eaf2d3',
            name: 'Code reviews (leading)',
          },
          {
            id: '3b8a9f55-3391-4d62-90c4-7a67c24f7b8b',
            name: 'Architectural decisions',
          },
          {
            id: 'e2f6d6d2-3d9b-4c4e-b3fc-5b3d1c9c25e6',
            name: 'Cross-team collaboration',
          },
        ],
      },
      {
        id: '3c776cd5-c8f2-4f6e-8f7a-4e1dbe1d9c5b',
        skillTypeId: 'b645e0c8-2d3a-4c51-92c7-cdcd348c9a8d',
        skillLevelId: 'b39b9ec4-32e6-4ac6-a7d4-0b24d0e8d1f5',
        skills: [
          {
            id: 'a9e9f3c7-f58e-4f3d-9f0a-8d865f3d6b8a',
            name: 'Status updates',
          },
          {
            id: 'b2b7a1e3-c7c3-4e1b-9b64-2e4a2c8e5b3f',
            name: 'Asking for help',
          },
        ],
      },
      {
        id: 'd9f7b6c0-29a8-4e1e-80d6-5dbb7f4c4d5e',
        skillTypeId: 'b645e0c8-2d3a-4c51-92c7-cdcd348c9a8d',
        skillLevelId: 'cc0d9299-51eb-4c48-8a52-1b2d6a35d6d3',
        skills: [
          {
            id: '1e2d8d5e-2f4e-4c5e-9b89-57cbbf5b2f78',
            name: 'Technical documentation',
          },
          {
            id: '4e6b8b9f-6d0b-4d7e-87e8-4d8d9e2f6b4d',
            name: 'Presenting in team meetings',
          },
        ],
      },
      {
        id: 'a6e4b4e0-0d5a-4e3f-9f55-fb86b5d5b3d2',
        skillTypeId: 'b645e0c8-2d3a-4c51-92c7-cdcd348c9a8d',
        skillLevelId: 'bb0b74d2-7dbe-4c63-b07d-bb865a8fcd4a',
        skills: [
          {
            id: 'd8d87d8f-5b2e-4e8f-8e89-3d5b2a6c3c1b',
            name: 'Technical presentations',
          },
          {
            id: '3f8f6b5e-2d3a-4d5e-9d12-9e7c7f1d3e9a',
            name: 'Stakeholder management',
          },
          {
            id: '5c9f5b8d-0b2e-4c6e-a8d2-5f5a2c7d6f1a',
            name: 'Writing proposals',
          },
        ],
      },
    ],
  },
];

const careerPaths: CareerPath[] = [
  {
    id: 'b3a0d5f0-7d4c-4f1b-8b95-5939305287b4',
    name: 'Software Engineering',
    description: 'Career path of Software Engineers.',
    levels: [
      {
        name: 'Senior Software Engineer',
        skills: [
          {
            name: 'Technology',
            items: [
              {
                name: 'System design',
                description:
                  'Designing complex systems with scalability and maintainability in mind.',
              },
              {
                name: 'Performance optimization',
                description:
                  'Identifying and implementing ways to improve system performance.',
              },
              {
                name: 'Security best practices',
                description:
                  'Ensuring the software is secure by following best practices in security.',
              },
              {
                name: 'CI/CD',
                description:
                  'Setting up and maintaining continuous integration and continuous delivery pipelines.',
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
              },
              {
                name: 'Architectural decisions',
                description:
                  'Making high-level decisions on system architecture.',
              },
              {
                name: 'Cross-team collaboration',
                description:
                  'Working effectively with other teams to ensure project success.',
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
              },
              {
                name: 'Stakeholder management',
                description:
                  'Managing expectations and communication with project stakeholders.',
              },
              {
                name: 'writing proposals',
                description:
                  'Creating proposals for new projects, technologies, or processes.',
              },
            ],
          },
        ],
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CareerPathService {
  careerPaths = signal<CareerPath[]>([]);
  #currentCareerPathId = signal<string | null>(null);
  currentCareerPath = computed(() =>
    this.careerPaths().find((f) => f.id === this.#currentCareerPathId())
  );

  #init = effect(() => this.careerPaths.set(careerPaths), {
    allowSignalWrites: true,
  });

  setCurrentCareerPathId(id: string) {
    this.#currentCareerPathId.set(id);
  }
}
