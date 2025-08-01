export type SideBarLinks = {
  title?: string;
  links: Link[];
};

export type Link = {
  icon: string;
  title: string;
  url?: string;
};
