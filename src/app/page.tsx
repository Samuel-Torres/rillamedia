import Image from "next/image";
import styles from "./page.module.scss";

// components:
import Hero from "./components/hero/hero";
import ColoredHeadingAside from "./components/coloredHeadingAside/coloredHeadingAside";

async function fetchHomePageData() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/main-pages?populate=*"
      : "https://rillamediastrapi.onrender.com/api/main-pages";

  try {
    const res = await fetch(currentEnvUrls, { next: { revalidate: 0 } });
    if (!res.ok) {
      return { error: `Failed with status: ${res.status}` };
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

export default async function Home() {
  const data = await fetchHomePageData();
  console.log("DATA: ", data);
  return (
    <main className={styles.container}>
      <Hero />
      <ColoredHeadingAside />
    </main>
  );
}
