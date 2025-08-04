import type { SideBarLinks } from "../types/types";

export const SIDE_BAR_LINKS: SideBarLinks[] = [
  {
    links: [
      {
        icon: "/svg/icons/dashboard.svg",
        title: "Dashboard",
        url: "/dashboard",
      },
    ],
  },
  {
    title: "CUSTOMERS", 
    links: [
      {
        icon: "/svg/icons/users.svg",
        title: "Users",
        url: "/dashboard/users",
      },
      {
        icon: "/svg/icons/guarantors.svg",
        title: "Guarantors",
        url: "",
      },
      {
        icon: "/svg/icons/loans.svg",
        title: "Loans",
        url: "",
      },
      {
        icon: "/svg/icons/dm.svg",
        title: "Decision Models",
        url: "",
      },
      {
        icon: "/svg/icons/savings.svg",
        title: "Savings",
        url: "",
      },
      {
        icon: "/svg/icons/lr.svg",
        title: "Loan Requests",
        url: "",
      },
      {
        icon: "/svg/icons/whitelist.svg",
        title: "Whitelist",
        url: "",
      },
      {
        icon: "/svg/icons/karma.svg",
        title: "Karma",
        url: "",
      },
    ],
  },
  {
    title: "BUSINESS",
    links: [
      {
        icon: "/svg/icons/briefcase.svg",
        title: "Organization",
        url: "",
      },
      {
        icon: "/svg/icons/lp.svg",
        title: "Loan Products",
        url: "",
      },
      {
        icon: "/svg/icons/sp.svg",
        title: "Savings Products",
        url: "",
      },
      {
        icon: "/svg/icons/fac.svg",
        title: "Fees and Charges",
        url: "",
      },
      {
        icon: "/svg/icons/transactions.svg",
        title: "Transactions",
        url: "",
      },
      {
        icon: "/svg/icons/services.svg",
        title: "Services",
        url: "",
      },
      {
        icon: "/svg/icons/sa.svg",
        title: "Service Accounts",
        url: "",
      },
      {
        icon: "/svg/icons/settlements.svg",
        title: "Settlements",
        url: "",
      },
      {
        icon: "/svg/icons/reports.svg",
        title: "Reports",
        url: "",
      },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      {
        icon: "/svg/icons/preferences.svg",
        title: "Preferences",
        url: "",
      },
      {
        icon: "/svg/icons/fees.svg",
        title: "Fees and Pricing",
        url: "",
      },
      {
        icon: "/svg/icons/audit.svg",
        title: "Audit Logs",
        url: "",
      },
    ],
  },
];
