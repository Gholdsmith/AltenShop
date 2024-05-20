import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Menu-item-1',
    labels: {
      en: "Products",
      fr: "Products"
    },
    icon: 'shopping-cart',
    link: '/products'

  },
  {
    id: 'Menu-item-2',
    labels: {
      en: "admin",
      fr: "admin",
    },
    icon: 'users',
    link: '/admin/products'

  },
  {
    id: 'Menu-item-3',
    labels: {
      en: "logout",
      fr: "logout"
    },
    icon: 'sign-out',
    link: '/login'

  },

];