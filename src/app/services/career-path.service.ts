import { effect, Injectable, signal } from '@angular/core';
import type { CareerPath } from '../interfaces/career-ptah.interface';

@Injectable({
  providedIn: 'root',
})
export class CareerPathService {
  careerPaths = signal<CareerPath[]>([]);
  careerPath = signal<CareerPath | null>(null);

  #init = effect(() => this.#loadCareerPaths(), { allowSignalWrites: true });

  #loadCareerPaths() {
    let careerPaths = JSON.parse(localStorage.getItem('careerPaths') || '[]');

    if (careerPaths.length === 0) {
      careerPaths = [
        {
          id: 1,
          name: 'Web Development',
          description: 'Career path for Web developers.',
          skillTypes: [
            { id: 1, name: 'Technology Skills' },
            { id: 2, name: 'Team Player Skills' },
            { id: 3, name: 'Communication Skills' },
          ],
          skillLevels: [
            { id: 1, name: 'Junior Developer' },
            { id: 2, name: 'Mid-level Developer' },
            { id: 3, name: 'Senior Developer' },
          ],
          skillGroups: [
            {
              id: 1,
              skillTypeId: 1, // Technology Skills
              skillLevelId: 1, // Junior Developer
              skills: [
                { id: 1, name: 'HTML' },
                { id: 2, name: 'CSS' },
                { id: 3, name: 'JavaScript basics' },
                { id: 4, name: 'Version control (Git)' },
              ],
            },
            {
              id: 2,
              skillTypeId: 1, // Technology Skills
              skillLevelId: 2, // Mid-level Developer
              skills: [
                { id: 5, name: 'React/Vue/Angular' },
                { id: 6, name: 'Node.js' },
                { id: 7, name: 'RESTful APIs' },
                { id: 8, name: 'SQL/NoSQL databases' },
              ],
            },
            {
              id: 3,
              skillTypeId: 1, // Technology Skills
              skillLevelId: 3, // Senior Developer
              skills: [
                { id: 9, name: 'System design' },
                { id: 10, name: 'Performance optimization' },
                { id: 11, name: 'Security best practices' },
                { id: 12, name: 'CI/CD' },
              ],
            },
            {
              id: 4,
              skillTypeId: 2, // Team Player Skills
              skillLevelId: 1, // Junior Developer
              skills: [
                { id: 20, name: 'Pair programming' },
                { id: 21, name: 'Code reviews (participating)' },
              ],
            },
            {
              id: 5,
              skillTypeId: 2, // Team Player Skills
              skillLevelId: 2, // Mid-level Developer
              skills: [
                { id: 22, name: 'Mentoring juniors' },
                { id: 23, name: 'Sprint planning' },
                { id: 24, name: 'Estimating tasks' },
              ],
            },
            {
              id: 6,
              skillTypeId: 2, // Team Player Skills
              skillLevelId: 3, // Senior Developer
              skills: [
                { id: 25, name: 'Code reviews (leading)' },
                { id: 26, name: 'Architectural decisions' },
                { id: 27, name: 'Cross-team collaboration' },
              ],
            },
            {
              id: 7,
              skillTypeId: 3, // Communication Skills
              skillLevelId: 1, // Junior Developer
              skills: [
                { id: 34, name: 'Status updates' },
                { id: 35, name: 'Asking for help' },
              ],
            },
            {
              id: 8,
              skillTypeId: 3, // Communication Skills
              skillLevelId: 2, // Mid-level Developer
              skills: [
                { id: 36, name: 'Technical documentation' },
                { id: 37, name: 'Presenting in team meetings' },
              ],
            },
            {
              id: 9,
              skillTypeId: 3, // Communication Skills
              skillLevelId: 3, // Senior Developer
              skills: [
                { id: 38, name: 'Technical presentations' },
                { id: 39, name: 'Stakeholder management' },
                { id: 40, name: 'Writing proposals' },
              ],
            },
          ],
        },
        {
          id: 2,
          name: 'IT Management',
          description: 'Career path for IT Managers.',
          skillTypes: [
            { id: 1, name: 'Technology Skills' },
            { id: 2, name: 'Team Player Skills' },
            { id: 3, name: 'Communication Skills' },
          ],
          skillLevels: [
            { id: 4, name: 'Tech Lead' },
            { id: 5, name: 'Engineering Manager' },
          ],
          skillGroups: [
            {
              id: 1,
              skillTypeId: 1, // Technology Skills
              skillLevelId: 4, // Tech Lead
              skills: [
                { id: 13, name: 'Scalable architecture' },
                { id: 14, name: 'Multiple tech stacks' },
                { id: 15, name: 'Data modeling' },
                { id: 16, name: 'Cloud platforms (AWS/Azure/GCP)' },
              ],
            },
            {
              id: 2,
              skillTypeId: 1, // Technology Skills
              skillLevelId: 5, // Engineering Manager
              skills: [
                { id: 17, name: 'Technology trend analysis' },
                { id: 18, name: 'System integration' },
                { id: 19, name: 'Vendor evaluation' },
              ],
            },
            {
              id: 3,
              skillTypeId: 2, // Team Player Skills
              skillLevelId: 4, // Tech Lead
              skills: [
                { id: 28, name: 'Team leadership' },
                { id: 29, name: 'Mentoring seniors' },
                { id: 30, name: 'Project planning' },
              ],
            },
            {
              id: 4,
              skillTypeId: 2, // Team Player Skills
              skillLevelId: 5, // Engineering Manager
              skills: [
                { id: 31, name: 'Resource planning' },
                { id: 32, name: 'Conflict resolution' },
                { id: 33, name: 'Performance management' },
              ],
            },
            {
              id: 5,
              skillTypeId: 3, // Communication Skills
              skillLevelId: 4, // Tech Lead
              skills: [
                { id: 41, name: 'Technical strategy' },
                { id: 42, name: 'Negotiation skills' },
                { id: 43, name: 'Executive summaries' },
              ],
            },
            {
              id: 6,
              skillTypeId: 3, // Communication Skills
              skillLevelId: 5, // Engineering Manager
              skills: [
                { id: 44, name: 'Budget planning' },
                { id: 45, name: 'Company-wide presentations' },
                { id: 46, name: 'Policy making' },
              ],
            },
          ],
        },
      ];
      localStorage.setItem('careerPaths', JSON.stringify([]));
    }

    this.careerPaths.set(careerPaths);
  }

  loadCareerPath(id: number) {
    const careerPath =
      this.careerPaths().find((careerPath) => careerPath.id == id) || null;
    this.careerPath.set(careerPath);
  }
}
