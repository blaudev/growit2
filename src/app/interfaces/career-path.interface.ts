export interface CareerPath {
  id: string;
  name: string;
  description: string;
  levels: Level[];
}

export interface Level {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  items: Item[];
}

export interface Item {
  name: string;
  description: string;
}
