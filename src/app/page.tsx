import Image from "next/image";
import styles from "./page.module.scss";

// components:
import Hero from "./components/navbar/hero/hero";
import ContactRouterBtn from "./components/contactRouterBtn/contactRouterBtn";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <div className={styles.landingAboutUs}>
        <div className={styles.textContainer}>
          <div className={styles.leftSide}>
            <h2>
              <span className={styles.highlight}>Empowering</span> brands,
            </h2>
            <h2>
              While <span className={styles.highlight}>Fueling Growth!</span>
            </h2>
          </div>
          <div className={styles.rightSide}>
            <h3>Who We Are</h3>
            <p>
              We are a dynamic web design agency—a team of visionaries and
              disruptors poised to tackle your brand’s toughest challenges. Our
              mission is to break away from the ordinary and collaborate with
              you to reach ambitious goals. We excel in helping brands assert
              their unique presence and drive continuous growth. Ready to
              elevate your digital footprint? Let’s make it happen.
            </p>
            <ContactRouterBtn borderColor="black" initialFontColor="black" />
          </div>
        </div>
        <div className={styles.borderBottom}>
          <p></p>
        </div>
      </div>
    </main>
  );
}
