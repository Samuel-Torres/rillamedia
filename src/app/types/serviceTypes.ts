export type ServiceCardType = {
  id: number;
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
};

export type serviceList = {
  services: Array<ServiceCardType>;
};
