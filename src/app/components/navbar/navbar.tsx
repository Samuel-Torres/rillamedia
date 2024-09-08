import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.burgerContainer}>
        <Image
          src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725824192/rillamedia/open-menu_1_lmoous.png"
          alt="logo"
          fill={true}
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
            src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725819732/rillamedia/Add_a_heading_erltya.png"
            alt="logo"
            fill={true}
          />
        </div>
      </Link>
      <div className={styles.navLink}>
        <Link className={styles.hoverLink} href="/our-work">
          Our Work
        </Link>
        <Link className={styles.hoverLink} href="/blog">
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
