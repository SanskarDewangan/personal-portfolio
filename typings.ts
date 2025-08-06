export interface IUrl {
  url: string;
}

export interface IText {
  text: string;
}

export interface IFormFields {
  name: string;
  email: string;
  message: string;
}

export interface IFormField {
  value: string;
  errorMessage: string;
}

export interface IFormData {
  name: IFormField;
  email: IFormField;
  message: IFormField;
}

export interface ISkills {
  id: string;
  uniqueId: number;
  proficient: boolean;
  skill: string;
  url: string;
  fieldType: string;
  image: IUrl;
}

export interface IProjects {
  id: string;
  title: string;
  uniqueId: number;
  description: string;
  demoLink: string;
  githubLink: string;
  techStack: IText[];
  image: IUrl;
}

export interface IJobs {
  id: string;
  company: string;
  designation: string;
  from: string;
  to?: string;
  logo?: IUrl;
  companyUrl?: string;
  companyLinkedin?: string;
}

export interface IJobCardProps {
  job: IJobs;
  index: number;
}

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export enum SECTION {
  ABOUT = "about",
  PROJECTS = "projects",
  SKILLS = "skills",
  EXPERIENCE = "experience",
  CONTACT = "contact",
}

export enum SKILLSET {
  LANGUAGES = "languages",
  FRONTEND = "frontend",
  UI_LIBRARIES = "uilibraries",
  TESTING = "testing",
  TOOLS = "tools",
}

export enum TECHSTACK {
  ALL = "all",
  REACT = "React",
  TYPESCRIPT = "TypeScript",
  JAVASCRIPT = "JavaScript",
  NODEJS = "Node.js",
  NEXTJS = "Next.js",
  TAILWIND = "Tailwind CSS",
  SASS = "Sass",
  GIT = "Git",
  MONGODB = "MongoDB",
  EXPRESS = "Express.js",
  REDUX = "Redux",
  APOLLO = "Apollo GraphQL",
  CPP = "C++",
}
