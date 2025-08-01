import type { SideBarLinks } from "../types/types";

export const SIDE_BAR_LINKS: SideBarLinks[] = [
  {
    links: [
      {
        icon: "/svg/icons/dashboard.svg",
        title: "Dashboard",
      },
    ],
  },
  {
    title: "CUSTOMERS",
    links: [
      {
        icon: "/svg/icons/users.svg",
        title: "Users",
        url: "/users",
      },
      {
        icon: "/svg/icons/guarantors.svg",
        title: "Guarantors",
      },
      {
        icon: "/svg/icons/loans.svg",
        title: "Loans",
      },
      {
        icon: "/svg/icons/dm.svg",
        title: "Decision Models",
      },
      {
        icon: "/svg/icons/savings.svg",
        title: "Savings",
      },
      {
        icon: "/svg/icons/lr.svg",
        title: "Loan Requests",
      },
      {
        icon: "/svg/icons/whitelist.svg",
        title: "Whitelist",
      },
      {
        icon: "/svg/icons/karma.svg",
        title: "Karma",
      },
    ],
  },
  {
    title: "BUSINESS",
    links: [
      {
        icon: "/svg/icons/briefcase.svg",
        title: "Organization",
      },
      {
        icon: "/svg/icons/lp.svg",
        title: "Loan Products",
      },
      {
        icon: "/svg/icons/sp.svg",
        title: "Savings Products",
      },
      {
        icon: "/svg/icons/fac.svg",
        title: "Fees and Charges",
      },
      {
        icon: "/svg/icons/transactions.svg",
        title: "Transactions",
      },
      {
        icon: "/svg/icons/services.svg",
        title: "Services",
      },
      {
        icon: "/svg/icons/sa.svg",
        title: "Service Accounts",
      },
      {
        icon: "/svg/icons/settlements.svg",
        title: "Settlements",
      },
      {
        icon: "/svg/icons/reports.svg",
        title: "Reports",
      },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      {
        icon: "/svg/icons/preferences.svg",
        title: "Preferences",
      },
      {
        icon: "/svg/icons/fees.svg",
        title: "Fees and Pricing",
      },
      {
        icon: "/svg/icons/audit.svg",
        title: "Audit Logs",
      },
    ],
  },
];
