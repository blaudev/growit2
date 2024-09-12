export interface CareerPath {
  id: string;
  name: string;
  description: string;
  skillTypes: SkillType[];
  skillLevels: SkillLevel[];
  skillGroups: SkillGroup[];
}

export interface Skill {
  id: string;
  name: string;
}

export interface SkillGroup {
  id: string;
  skillTypeId: string;
  skillLevelId: string;
  skills: Skill[];
}

export interface SkillType {
  id: string;
  name: string;
}

export interface SkillLevel {
  id: string;
  name: string;
}
