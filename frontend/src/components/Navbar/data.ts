type NAV_SECTIONS_TYPE = {
  nameToDisplay: string;
  path: string;
};

export const NAV_SECTIONS: NAV_SECTIONS_TYPE[] = [
  { nameToDisplay: "All Products", path: "/all-products" },
  { nameToDisplay: "Favorites", path: "/favorites" },
  { nameToDisplay: "Cart", path: "/cart" },
];

export const DRAWER_SECTIONS: NAV_SECTIONS_TYPE[] = [
  {
    nameToDisplay: "Login",
    path: "/login",
  },
  ...NAV_SECTIONS,
];
