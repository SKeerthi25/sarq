export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  iconName: string;
  durationAvg: string;
  startingCost: string;
  keyFeatures: string[];
  scope: string[];
  processSteps: { title: string; desc: string }[];
  complianceNotes: string[];
  typicalTimelineWeeks: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Extension' | 'Loft Conversion' | 'New Build' | 'Refurbishment' | 'Basement' | 'Kitchen & Bathroom';
  location: string;
  postcode: string;
  year: number;
  duration: string;
  budgetRange: string;
  coverImage: string;
  beforeImage?: string;
  afterImage?: string;
  galleryImages: string[];
  summary: string;
  clientBrief: string;
  structuralChallenge: string;
  sarqSolution: string;
  specifications: { label: string; value: string }[];
  clientQuote?: {
    text: string;
    author: string;
    area: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Planning & Permissions' | 'Costs & Contracts' | 'Timescales & Process' | 'Guarantees & Insurance' | 'Technical & Structural';
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  date: string;
  rating: number;
  quote: string;
  verified: boolean;
  projectSlug?: string;
}

export interface AreaInfo {
  borough: string;
  postcodes: string[];
  headline: string;
  description: string;
  popularProjects: string[];
  planningOffice: string;
  recentProjectsCount: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: 'Planning & Permits' | 'Cost Guides' | 'Case Studies' | 'Design & Architecture';
  coverImage: string;
  content: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  qualifications: string[];
  bio: string;
  image: string;
}

export interface Accreditation {
  name: string;
  code?: string;
  type: 'statutory' | 'trade' | 'insurance' | 'warranty';
  description: string;
  benefitToHomeowner: string;
  iconName: string;
}
