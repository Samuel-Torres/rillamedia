import Image from "next/image";
import styles from "./page.module.scss";

// components:
import Hero from "./components/hero/hero";
import ColoredHeadingAside from "./components/coloredHeadingAside/coloredHeadingAside";

async function fetchHomePageData() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/main-pages?populate[sections]*[populate]=*"
      : "https://rillamediastrapi.onrender.com/api/main-pages?populate[sections]*[populate]=*";

  try {
    const res = await fetch(currentEnvUrls, { next: { revalidate: 0 } });
    if (!res.ok) {
      return { error: `Failed with status: ${res.status}` };
    }
    const data = await res.json();
    const sections = data?.data[0]?.attributes?.sections[0];
    const heroImages = sections?.heroImage?.data?.attributes?.formats;

    console.log("Res: ", sections?.socialMediaList);
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
          ...sections?.highlightedText,
        },
        socialMediaList: sections?.socialMediaList,
        numberAside: {
          ...sections?.numberAside,
        },
      },
    };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

export default async function Home() {
  const data = await fetchHomePageData();
  // console.log("DATA: ", data);
  return (
    <main className={styles.container}>
      <Hero
        heroImages={data?.hero?.heroImages}
        highlightedHeading={data?.hero?.highlightedHeading}
        socialMediaList={data?.hero?.socialMediaList}
        numberAside={data?.hero?.numberAside}
      />
      <ColoredHeadingAside />
    </main>
  );
}
