export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  link: {
    x: string;
    github: string;
  };
};

export type marketingConfig = {
  mainNav: NavItem[];
};
