
export enum SectionType {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  DETAILS = 'DETAILS',
  METRICS = 'METRICS',
  ISRAEL_PROJECT = 'ISRAEL_PROJECT',
  SERVICES = 'SERVICES',
  GALLERY = 'GALLERY',
  SPONSOR = 'SPONSOR',
  OPPORTUNITIES = 'OPPORTUNITIES',
  CONTACT = 'CONTACT'
}

export interface ThemeConfig {
  primaryColor: string; // Used for rs-orange
  secondaryColor: string; // Used for rs-purple
  accentColor: string; // Used for Gold
  backgroundColor: string;
}

export interface SectionData {
  id: string;
  type: SectionType;
  content: any;
}

export interface Project {
  id: string;
  name: string;
  lastModified: number;
  sections: SectionData[];
  theme: ThemeConfig;
}

// Content Types
export interface HeroContent {
  bgImage: string;
  logoImage: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  tags: string[];
}

export interface AboutContent {
  mainImage: string;
  bgImage: string;
  subtitle: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
}

export interface DetailsContent {
  bgImage: string;
  mainImage: string;
  title: string;
  titleHighlight: string;
  techSpecs: { label: string; value: string }[];
  audienceTitle: string;
  audienceText: string;
  socials: { icon: string; text: string }[]; // icon name from Lucide
}

export interface MetricsContent {
  bgImage: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  youtubeStats: { value: string; label: string; sub?: string }[];
  instagramStats: { value: string; label: string; sub?: string }[];
  mainStatValue: string;
  mainStatLabel: string;
  mainStatSub1: string;
  mainStatSub2: string;
}

export interface IsraelProjectContent {
  mainImage: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  projectYear: string;
  quote: string;
  description: string;
  highlights: { icon: string; text: string }[];
}

export interface ServicesContent {
  bgImage: string;
  title: string;
  titleHighlight: string;
  description: string;
  cards: { icon: string; title: string; description: string }[];
}

export interface GalleryContent {
  title: string;
  titleHighlight: string;
  description: string;
  images: string[]; // Array of 8 images for the grid
}

export interface SponsorContent {
  mainImage: string;
  secondaryImage: string;
  title: string;
  titleHighlight: string;
  reasons: { number: string; title: string; description: string }[];
}

export interface OpportunitiesContent {
  title: string;
  titleHighlight: string;
  tiers: { name: string; icon: string; subtitle: string; features: string[]; colorClass: string }[];
}

export interface ContactContent {
  bgImage: string;
  logoImage: string;
  email: string;
  phone: string;
  instagram: string;
}
