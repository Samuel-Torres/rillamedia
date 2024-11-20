import {
  ClientListComponentType,
  ClientListType,
} from "../types/clientListTypes";
import { heroProps } from "../types/componentTypes";
import { headlineAside } from "../types/componentTypes";
import { infoCardList } from "../types/infoCardTypes";
import { serviceList } from "../types/serviceTypes";

export async function fetchHomePageData() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/main-page?populate=deep"
      : "https://rillamediastrapi.onrender.com/api/main-page?populate=deep";

  try {
    const res = await fetch(currentEnvUrls, { next: { revalidate: 0 } });
    const data = await res.json();
    const sections = data?.data?.attributes?.sections;
    // console.log("PRE: ", sections);

    if (!res.ok) {
      return { error: `Failed with status: ${res.status}` };
    }

    let cleansedData: { [key: string]: any } = {};
    let heroCleansed: heroProps | undefined;
    let headlineAsideData: headlineAside | undefined;
    let cleansedServiceList: serviceList | undefined;
    let cleansedInfoCard: infoCardList | undefined;
    let pastClientList: ClientListComponentType | undefined;

    // console.log("START: ", cleansedData);

    sections?.forEach((section: any) => {
      const id = section?.__component;
      console.log("HERO: ", section);
      if (id === "hero.hero") {
        heroCleansed = {
          __component: section?.__component,
          heroImages: {
            small: {
              url: section?.heroImage?.data?.attributes?.formats?.small?.url,
              alt: "small hero",
            },
            medium: {
              url: section?.heroImage?.data?.attributes?.formats?.medium?.url,
              alt: "medium hero",
            },
            large: {
              url: section?.heroImage?.data?.attributes?.formats?.large?.url,
              alt: "large hero",
            },
          },
          highlightedHeading: {
            ...section?.highlightedText,
          },
          socialMediaList: section?.socials.map((link: any) => {
            return {
              id: link?.id,
              href: link.href,
              alt: link.alt,
              images: {
                small: {
                  url: link?.imageSrc?.data?.attributes?.url,
                },
              },
            };
          }),
          numberAside: { ...section?.numberAside },
          clientList: {
            id: section?.id,
            __component: section?.__component,
            clientList: section?.clientList?.map(
              (card: ClientListType, index: number) => {
                return {
                  id: card?.id,
                  companyName: card?.companyName,
                  alt: card?.alt,
                  websiteUrl: card?.websiteUrl,
                  // @ts-ignore
                  logo: card?.logo?.data[0]?.attributes?.url,
                  className: card?.className,
                };
              }
            ),
          },
        };
        Object.assign(cleansedData, { ...cleansedData, hero: heroCleansed });
      }
      if (id === "headling-aside.headling-aside") {
        headlineAsideData = section;
        Object.assign(cleansedData, {
          ...cleansedData,
          headlineAside: headlineAsideData,
        });
      }
      if (id === "service-list.service-list") {
        cleansedServiceList = section?.serviceCard?.map((card: any) => {
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
        Object.assign(cleansedData, {
          ...cleansedData,
          serviceList: {
            __component: "service-list.service-list",
            serviceList: cleansedServiceList,
          },
        });
      }
      if (id === "info-cards-list.info-cards-list") {
        cleansedInfoCard = section?.infoCard?.map((card: any) => {
          return {
            ...card,
            iconImage: card?.iconImage?.data?.attributes?.url,
          };
        });
        Object.assign(cleansedData, {
          ...cleansedData,
          infoCardsList: {
            __component: section?.__component,
            infoCardsList: cleansedInfoCard,
          },
        });
      }
      if (id === "contact-form.contact-form") {
        Object.assign(cleansedData, {
          ...cleansedData,
          contact: section,
        });
      }
      if (id === "past-client-list.past-client-list") {
        pastClientList = sections[5]?.companyCard?.map(
          (card: ClientListType, index: number) => {
            return {
              id: card?.id,
              companyName: card?.companyName,
              alt: card?.alt,
              websiteUrl: card?.websiteUrl,
              logo: card?.logo?.data[index]?.attributes?.url,
            };
          }
        );
        Object.assign(cleansedData, {
          ...cleansedData,
          clientList: {
            id: section?.id,
            __component: section?.__component,
            clientList: pastClientList,
          },
        });
      }
    });
    // console.log("CLEANSED: ", cleansedData);
    return cleansedData;
  } catch (error) {
    return { error: "Error fetching data" };
  }
}
