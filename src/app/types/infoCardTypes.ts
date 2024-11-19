export type bulletType = {
  id: number;
  bullet: string;
  iconIsVisible: boolean;
};

export type infoCardList = {
  id: number;
  heading: string;
  iconImage: string;
  bullets: bulletType[];
};

export type infoCardType = {
  __component: string;
  infoCardsList: infoCardList[];
};
