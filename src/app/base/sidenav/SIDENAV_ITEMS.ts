import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Menu-item-1',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: '/products'

  },
  {
    id: 'Menu-item-2',
    labels: {
      en: "admin",
      fr: "admin"
    },
    link: '/admin/products'

  }

];