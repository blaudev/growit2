export interface User {
  id: number;
  name: string;
  isManager: boolean;
  careerPathId: string;
  levelId: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  items: Item[];
}

export interface Item {
  name: string;
  description: string;
  completed: boolean;
}
