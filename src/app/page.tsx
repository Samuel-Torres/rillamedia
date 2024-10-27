import Image from "next/image";
import styles from "./page.module.scss";
import { fetchHomePageData } from "./services/homePageData";
import { getReviews } from "./services/getReviews";

import ComponentPicker from "./components/componentPicker/componentPicker";

export default async function Home() {
  const data = await fetchHomePageData();
  // const reviews = await getReviews(); // need actual bank account to fetch reviews.
  // console.log("CHECK: ", data);
  return (
    <main className={styles.container}>
      {Object.entries(data).map(([key, val]) => (
        <ComponentPicker key={val?.__component} {...val} />
      ))}

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
