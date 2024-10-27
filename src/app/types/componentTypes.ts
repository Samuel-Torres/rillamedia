// HERO
export type List<T> = Array<T>;
export type SocialMediaList = List<SocialMediaItem>;
export type SocialMediaItem = {
  id: number;
  href: string;
  alt: string;
  images: {
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    large: {
      url: string;
    };
  };
};
export type heroProps = {
  __component: string;
  heroImages:
    | {
        small: {
          url: string;
          alt: string;
        };
        medium: {
          url: string;
          alt: string;
        };
        large: {
          url: string;
          alt: string;
        };
      }
    | undefined;
  highlightedHeading:
    | {
        id: number;
        firstText: string;
        highlightedText: string;
        remainingText: string;
      }
    | undefined;
  socialMediaList: SocialMediaList | undefined;
  numberAside:
    | {
        id: number;
        text: string;
        isRow: boolean;
      }
    | undefined;
};

// coloredHeadlineAside:

export type dblHighlightHeading = {
  id: number;
  highlightOne: string;
  textOne: string;
  highlightTwo: string;
  textTwo: string;
};

export type ctaBtn = {
  id: number;
  ctaText: string;
  routeDestination: string;
  borderColor: string;
  initialFontColor: string;
};

export type headlineAside = {
  __component: string;
  AsideHeading: string;
  TextBody: string;
  dblHighlightHeading: dblHighlightHeading;
  ctaBtn: ctaBtn;
};
