import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon?: LucideIcon;
  highlight?: boolean;
  isExternal?: boolean;
}

export interface TipLink {
  platform: string;
  handle: string;
  url?: string;
  icon?: LucideIcon;
}