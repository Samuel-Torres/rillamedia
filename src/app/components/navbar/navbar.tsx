import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

// components:
import ContactRouterBtn from "../contactRouterBtn/contactRouterBtn";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.burgerContainer}>
        <Image
          src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725824192/rillamedia/open-menu_1_lmoous.png"
          alt="logo"
          fill={true}
          sizes="auto"
        />
      </div>
      <div className={styles.navLink}>
        <Link className={styles.hoverLink} href="/about">
          About
        </Link>
        <Link className={styles.hoverLink} href="/services">
          Services
        </Link>
      </div>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image
            src="https://res.cloudinary.com/dvz91qyth/image/upload/v1726090165/rillamedia/Rilla_Media_8_gelkib.png"
            alt="logo"
            fill={true}
            sizes="auto"
          />
        </div>
      </Link>
      <div className={styles.navLink}>
        <Link className={styles.hoverLink} href="/our-work">
          Our Work
        </Link>
        <Link className={styles.hoverLink} href="/blog">
          Insights
        </Link>
        <ContactRouterBtn
          borderColor="white"
          initialFontColor="white"
          routeDestination="/contact"
          ctaText="Let's Talk"
        />
      </div>
    </div>
  );
};

export default Navbar;
