export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface ClientCategory {
  label: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
}

export interface OfficeLocation {
  city: string;
  region: string;
  isPrimary?: boolean;
}