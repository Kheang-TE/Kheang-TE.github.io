// Types pour les projets
export interface Project {
  title: string;
  image: string;
  description: string;
  stacks: string[];
  status: 'online' | 'done' | 'in_progress';
  url: string | ProjectUrl[] | null;
}

export interface ProjectUrl {
  url_name: string;
  url_link: string | null;
}

// Types pour le menu
export interface MenuItem {
  id: number;
  title: string;
  link: string;
  icon: React.ReactNode;
}

// Types pour les contacts
export interface ContactItem {
  icon: React.ReactNode;
  name: string;
  url: string;
}

// Types pour les icônes de technologies
export interface IconsMap {
  [key: string]: string;
}

// Types pour les sections
export interface SectionPosition {
  id: string;
  top: number;
}
