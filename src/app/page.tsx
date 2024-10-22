import Image from "next/image";
import styles from "./page.module.scss";
import { fetchHomePageData } from "./components/services/homePageData";

// components:
import Hero from "./components/hero/hero";
import ColoredHeadingAside from "./components/coloredHeadingAside/coloredHeadingAside";

export default async function Home() {
  const data = await fetchHomePageData();
  console.log("DATA: ", data?.headlineAside);
  return (
    <main className={styles.container}>
      <Hero
        heroImages={data?.hero?.heroImages}
        highlightedHeading={data?.hero?.highlightedHeading}
        socialMediaList={data?.hero?.socialMediaList}
        numberAside={data?.hero?.numberAside}
      />
      <ColoredHeadingAside
        AsideHeading={data?.headlineAside?.AsideHeading}
        TextBody={data?.headlineAside?.TextBody}
        dblHighlightHeading={data?.headlineAside?.dblHighlightHeading}
        ctaBtn={data?.headlineAside?.ctaBtn}
      />
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
