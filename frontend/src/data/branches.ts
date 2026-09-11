export const BRANCHES = {
  first: {
    slug: "first",
    name: "Филиал 1",
    displayAddress: "Šarlotes 18a, 3 этаж",
    mapAddress: "Šarlotes iela 18A, Rīga, Latvia",
  },
  second: {
    slug: "second",
    name: "Филиал 2",
    displayAddress: "Tērbatas iela 76",
    mapAddress: "Tērbatas iela 76, Rīga, Latvia",
  },
} as const;

export type BranchSlug = keyof typeof BRANCHES;
