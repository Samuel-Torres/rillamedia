import Image from "next/image";
import styles from "./page.module.scss";

// components:
import Hero from "./components/hero/hero";
import ColoredHeadingAside from "./components/coloredHeadingAside/coloredHeadingAside";

async function fetchHomePageData() {
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
    const heroImages = sections?.heroImage?.data?.attributes?.formats;

    // console.log(sections[1]?.socialMediaLinks);

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

    return {
      hero: {
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
    };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

export default async function Home() {
  const data = await fetchHomePageData();
  // console.log("THE DATA: ", data?.hero?.socialMediaList[0]?.images);
  return (
    <main className={styles.container}>
      <Hero
        heroImages={data?.hero?.heroImages}
        highlightedHeading={data?.hero?.highlightedHeading}
        socialMediaList={data?.hero?.socialMediaList}
        numberAside={data?.hero?.numberAside}
      />
      <ColoredHeadingAside />
      {/* Needed Sections:
        • Selling Point 1: Get Leads -> Sell the result of working with us. 
        • How We Do It: After Learning Marketing Give Insights on How. 
        • Reviews & Testimonials. 
        • Ready? Let's Do Business section. 
        • Footer. 
      */}
    </main>
  );
}
