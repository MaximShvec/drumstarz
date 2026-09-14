export type BranchSlug = "first" | "second";
export type RouteKind = "walking" | "driving";

export const BRANCHES = {
  first: {
    slug: "first",
    name: "Филиал 1",
    title: "Šarlotes",
    displayAddress: "Šarlotes 18a, 3 этаж",
    mapAddress: "Šarlotes iela 18A, Rīga, Latvia",
    number: "01",
    floors: [
      {
        key: "3-5",
        label: "3,5 этаж",
        videos: {
          walking: { id: "efcMEaAVnh4", tab: "Пешком" },
          driving: { id: "KET6uG6r-LM", tab: "На машине" },
        },
      },
      {
        key: "4",
        label: "4 этаж",
        videos: {
          walking: { id: "yVy2Y9bmoAY", tab: "Пешком" },
          driving: { id: "x-4Nf9RQGLQ", tab: "На машине" },
        },
      },
    ],
  },
  second: {
    slug: "second",
    name: "Филиал 2",
    title: "Tērbatas",
    displayAddress: "Tērbatas iela 76",
    mapAddress: "Tērbatas iela 76, Rīga, Latvia",
    number: "02",
    routes: [
      { key: "walking" as const, id: "CEkpDMRkMSk", tab: "Со стороны Matīsa" },
      { key: "driving" as const, id: "CE_9BAUPwig", tab: "Со стороны Artilērijas" },
    ],
  },
} as const;

export const BRANCH_LIST = [BRANCHES.first, BRANCHES.second] as const;
