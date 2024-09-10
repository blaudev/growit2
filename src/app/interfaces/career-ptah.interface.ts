export interface CareerPath {
  id: number;
  name: string;
  description: string;
  skillTypes: SkillType[];
  skillLevels: SkillLevel[];
  skillGroups: SkillGroup[];
}

export interface Skill {
  id: number;
  name: string;
}

export interface SkillGroup {
  id: number;
  skillTypeId: number;
  skillLevelId: number;
  skills: Skill[];
}

export interface SkillType {
  id: number;
  name: string;
}

export interface SkillLevel {
  id: number;
  name: string;
}
