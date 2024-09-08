import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.bottomBorder}></div>
    </div>
  );
};

export default Hero;
