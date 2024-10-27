export type ServiceCardType = {
  id: number;
  __component: string;
  title: string;
  subheading: string;
  bulletOne: string;
  bulletTwo: string;
  bulletThree: string;
  iconImage: {
    small: {
      url: string;
      alt: string;
    };
    medium: {
      url: string | undefined;
      alt: string;
    };
    large: {
      url: string | undefined;
      alt: string;
    };
  };
  alt: string;
  sellingPoint: string;
};

export type serviceList = {
  __component: string;
  serviceList: ServiceCardType[];
};
