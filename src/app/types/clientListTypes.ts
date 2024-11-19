export type ClientListType = {
  id: number;
  companyName: string;
  alt: string;
  websiteUrl: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
};

export type ClientListComponentType = {
  id: number;
  __component: string;
  clientList: ClientListType[];
};
