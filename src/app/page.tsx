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
    console.log("Current Environment: ", process.env.NEXT_PUBLIC_NODE_ENV);
    console.log("Fetching From: ", currentEnvUrls);
    console.log("Res: ", data?.data[0]?.attributes?.sections);
    return data;
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

export default async function Home() {
  const data = await fetchHomePageData();
  console.log("DATA: ", data?.data[0]?.attributes?.sections);
  // console.log("DATA: ", data?.data[0]?.attributes?.sections);
  return (
    <main className={styles.container}>
      <Hero />
      <ColoredHeadingAside />
    </main>
  );
}
