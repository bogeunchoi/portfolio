export type ProjectDetails = {
  overview?: {
    name?: string;
    period?: string;
    role?: string;
    goal?: string;
  };
  tech?: {
    frontend?: string[];
    uiux?: string[];
    infra?: string[];
    tools?: string[];
  };
  features?: {
    sections?: Array<{ title: string; items: string[] }>;
  };
  outcomes?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  coverImage?: string | null;
  featured?: boolean;
  body?: string | null;
  details?: ProjectDetails;
};
