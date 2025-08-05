export type SideBarLinks = {
  title?: string;
  links: Links[];
};

export type Links = {
  icon: string;
  title: string;
  url: string;
};

export type UserStatus = "Active" | "Inactive" | "Pending" | "Blacklisted";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
  fullName: string;
  gender: string;
}
