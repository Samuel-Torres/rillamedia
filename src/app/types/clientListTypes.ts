export type ClientListType = {
  id: number;
  companyName: string;
  alt: string;
  websiteUrl: string;
  logo: string;
  className: string;
};

export type ClientListComponentType = {
  id: number;
  __component: string;
  clientList: ClientListType[];
};
