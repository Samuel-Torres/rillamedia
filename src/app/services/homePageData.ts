export async function fetchHomePageData() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/main-page?populate=deep"
      : "https://rillamediastrapi.onrender.com/api/main-page?populate=deep";

  try {
    const res = await fetch(currentEnvUrls, { next: { revalidate: 0 } });
    // const errorResponse = await res.json();
    // console.log("ERROR RES: ", errorResponse?.data?.attributes);
    const data = await res.json();
    const sections = data?.data?.attributes?.sections;
    const heroImages = sections[0]?.heroImage?.data?.attributes?.formats;

    if (!res.ok) {
      // console.log("ERROR RES: ", res);
      return { error: `Failed with status: ${res.status}` };
    }

    const socialMediaList = sections[1]?.socialMediaLinks.map((link: any) => {
      return {
        id: link?.id,
        href: link.href,
        alt: link.alt,
        images: {
          small: {
            url: link?.imageSrc?.data?.attributes?.url,
          },
          // small: {
          //   url: link?.imageSrc?.data?.attributes?.formats?.small?.url,
          // },
          // medium: {
          //   url: link?.imageSrc?.data?.attributes?.formats?.medium?.url,
          // },
          // large: {
          //   url: link?.imageSrc?.data?.attributes?.formats?.large?.url,
          // },
        },
      };
    });

    const serviceList = sections[3]?.serviceCard?.map((card: any) => {
      // console.log("CARD: ", card?.iconImage?.data?.attributes?.formats);
      return {
        ...card,
        __component: "service-list.service-list",
        iconImage: {
          small: {
            url: card?.iconImage?.data?.attributes.formats?.small?.url,
            alt: card?.alt,
          },
          medium: {
            url: card?.iconImage?.data?.attributes.formats?.medium?.url,
            alt: card?.alt,
          },
          large: {
            url: card?.iconImage?.data?.attributes.formats?.large?.url,
            alt: card?.alt,
          },
        },
      };
    });

    const headlineAside = sections[2];

    const cleansedInfoCardImage = sections[4]?.infoCard?.map((card: any) => {
      return {
        ...card,
        iconImage: card?.iconImage?.data?.attributes?.url,
      };
    });

    const infoCardsList = {
      __component: sections[4]?.__component,
      infoCardsList: cleansedInfoCardImage,
    };

    return {
      hero: {
        __component: "hero.hero",
        heroImages: {
          small: {
            url: heroImages?.small?.url,
            alt: "small hero",
          },
          medium: {
            url: heroImages?.medium?.url,
            alt: "medium hero",
          },
          large: {
            url: heroImages?.large?.url,
            alt: "large hero",
          },
        },
        highlightedHeading: {
          ...sections[0]?.highlightedText,
        },
        socialMediaList: socialMediaList,
        numberAside: {
          ...sections[0]?.numberAside,
        },
      },
      headlineAside: headlineAside,
      serviceList: {
        __component: "service-list.service-list",
        serviceList: serviceList,
      },
      infoCardsList: infoCardsList,
      contact: sections[5],
    };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}
