export interface HeaderAction {
  slug: string;
  label?: string;
  href?: string;
  ariaLabel: string;
}

export interface HeaderData {
  logo: {
    alt: string;
    width: number;
    height: number;
  };
  actions: {
    search: HeaderAction;
    portal: HeaderAction;
    menuButton: HeaderAction;
  };
}

export const navbarHeaderData: HeaderData = {
  logo: {
    alt: "DigitalsDaddy Logo",
    width: 130,
    height: 65,
  },
  actions: {
    search: {
      slug: "search",
      ariaLabel: "Search",
    },
    portal: {
      slug: "login",
      href: "/login",
      ariaLabel: "User Login",
    },
    menuButton: {
      slug: "menu-trigger",
      label: "MENU",
      ariaLabel: "Open Main Menu",
    },
  },
};