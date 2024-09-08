import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>
            Designing <span className={styles.highlight}>SEO Optimized</span>{" "}
            Websites With Your Business Needs In Mind!
          </h1>
          <h3>203-475-1263</h3>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725827406/rillamedia/freepik-export-20240908202902eHWG_e9dseo.png"
            alt="3d fractal"
            fill={true}
          />
        </div>
      </div>
    </main>
  );
}
