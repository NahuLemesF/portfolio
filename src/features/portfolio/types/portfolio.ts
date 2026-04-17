import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface HeroAction {
  href: string;
  label: string;
  icon: LucideIcon;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface HighlightItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

export interface QaItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface StudyItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface ProfileContent {
  name: string;
  brandMark: string;
  role: string;
  heroRole: string;
  heroDescription: string;
  shortBio: string;
  aboutParagraphs: string[];
  footerLabel: string;
  email: string;
}
