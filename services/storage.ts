
import { Project, SectionType, SectionData, ThemeConfig } from '../types';
import { DEFAULT_CONTENT } from '../data/defaults';

const STORAGE_KEY = 'media_kit_projects';

export const DEFAULT_THEME: ThemeConfig = {
  primaryColor: '#FD8812', // Orange
  secondaryColor: '#BF03C3', // Purple
  accentColor: '#C5A059', // Gold
  backgroundColor: '#050505'
};

const DEFAULT_SECTIONS: SectionData[] = [
    { id: '1', type: SectionType.HERO, content: DEFAULT_CONTENT[SectionType.HERO] },
    { id: '2', type: SectionType.ABOUT, content: DEFAULT_CONTENT[SectionType.ABOUT] },
    { id: '3', type: SectionType.DETAILS, content: DEFAULT_CONTENT[SectionType.DETAILS] },
    { id: '4', type: SectionType.METRICS, content: DEFAULT_CONTENT[SectionType.METRICS] },
    { id: '5', type: SectionType.ISRAEL_PROJECT, content: DEFAULT_CONTENT[SectionType.ISRAEL_PROJECT] },
    { id: '6', type: SectionType.SERVICES, content: DEFAULT_CONTENT[SectionType.SERVICES] },
    { id: '7', type: SectionType.GALLERY, content: DEFAULT_CONTENT[SectionType.GALLERY] },
    { id: '8', type: SectionType.SPONSOR, content: DEFAULT_CONTENT[SectionType.SPONSOR] },
    { id: '9', type: SectionType.OPPORTUNITIES, content: DEFAULT_CONTENT[SectionType.OPPORTUNITIES] },
    { id: '10', type: SectionType.CONTACT, content: DEFAULT_CONTENT[SectionType.CONTACT] }
];

export const getProjects = (): Project[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to load projects", e);
    return [];
  }
};

export const saveProject = (project: Project): void => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === project.id);
  
  if (index >= 0) {
    projects[index] = project;
  } else {
    projects.push(project);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const deleteProject = (id: string): void => {
    const projects = getProjects();
    const filtered = projects.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const createNewProject = (name: string): Project => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    lastModified: Date.now(),
    sections: JSON.parse(JSON.stringify(DEFAULT_SECTIONS)), // Deep copy defaults
    theme: { ...DEFAULT_THEME }
  };
};
