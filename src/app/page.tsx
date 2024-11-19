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

      {/* <svg
        width="100%"
        height="100"
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 15 Q 1 13, 3 14 T 5 16 Q 6 12, 8 15 T 10 17 Q 11 13, 13 15 T 15 13 T 18 16 Q 20 14, 22 16 T 25 12 T 28 15 T 30 13 Q 32 17, 34 15 T 36 13 T 38 15 T 40 16 Q 42 12, 44 15 T 46 13 T 48 15 T 50 14 Q 52 12, 54 15 T 56 16 T 58 14 T 60 13 Q 62 16, 64 15 T 66 12 T 68 17 T 70 14 Q 72 12, 74 15 T 76 14 T 78 13 T 80 15 Q 82 12, 84 15 T 86 17 T 88 14 T 90 15 T 92 13 T 94 16 T 96 15 T 98 13 T 100 15 V20 H0 Z"
          fill="#f4f4f4"
          stroke="#ddd"
          stroke-width="0.5"
        />
      </svg>

      <svg
        width="100%"
        height="100"
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 Q 1 7, 3 6 T 5 4 Q 6 8, 8 5 T 10 3 Q 11 7, 13 5 T 15 7 T 18 4 Q 20 6, 22 4 T 25 8 T 28 5 T 30 7 Q 32 3, 34 5 T 36 7 T 38 5 T 40 4 Q 42 8, 44 5 T 46 7 T 48 5 T 50 6 Q 52 8, 54 5 T 56 4 T 58 6 T 60 7 Q 62 4, 64 5 T 66 8 T 68 3 T 70 6 Q 72 8, 74 5 T 76 6 T 78 7 T 80 5 Q 82 8, 84 5 T 86 3 T 88 6 T 90 5 T 92 7 T 94 4 T 96 5 T 98 7 T 100 5 V0 H0 Z"
          fill="#f4f4f4"
          stroke="#ddd"
          stroke-width="0.5"
        />
      </svg> */}

      {/* Needed Sections:
        • Reviews & Testimonials. 
        • Why Choose Us
        • Ready? Let's Do Business section. 
        • Footer. 
      */}
    </main>
  );
}
