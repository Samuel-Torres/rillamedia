export async function fetchHomePageData() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/main-pages?populate=deep"
      : "https://rillamediastrapi.onrender.com/api/main-pages?populate=deep";

  try {
    const res = await fetch(currentEnvUrls, { next: { revalidate: 0 } });
    if (!res.ok) {
      return { error: `Failed with status: ${res.status}` };
    }
    const data = await res.json();
    const sections = data?.data[0]?.attributes?.sections;
    const heroImages = sections[0]?.heroImage?.data?.attributes?.formats;

    // console.log("uekqrgckugyh: ", sections);

    // console.log("IMAGES: ", heroImages);

    const socialMediaList = sections[1]?.socialMediaLinks.map((link: any) => {
      return {
        id: link?.id,
        href: link.href,
        alt: link.alt,
        images: {
          small: {
            url: link?.imageSrc?.data?.attributes?.formats?.small?.url,
          },
          medium: {
            url: link?.imageSrc?.data?.attributes?.formats?.medium?.url,
          },
          large: {
            url: link?.imageSrc?.data?.attributes?.formats?.large?.url,
          },
        },
      };
    });

    const serviceList = sections[3]?.serviceCard?.map((card: any) => {
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
    };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}
