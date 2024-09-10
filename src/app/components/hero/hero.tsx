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
        <div className={styles.socials}>
          <div className={styles.iconImageContainer}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725931911/rillamedia/old-typical-phone_asaihu.png"
              alt="phone number"
              fill={true}
            />
          </div>
          <div className={styles.iconImageContainer}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725931911/rillamedia/old-typical-phone_asaihu.png"
              alt="phone number"
              fill={true}
            />
          </div>
          <div className={styles.iconImageContainer}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725931911/rillamedia/old-typical-phone_asaihu.png"
              alt="phone number"
              fill={true}
            />
          </div>
          <div className={styles.iconImageContainer}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725931911/rillamedia/old-typical-phone_asaihu.png"
              alt="phone number"
              fill={true}
            />
          </div>
        </div>
        <div className={styles.phoneNumContainer}>
          <div className={styles.iconImageContainer}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725931911/rillamedia/old-typical-phone_asaihu.png"
              alt="phone number"
              fill={true}
            />
          </div>
          <a className={styles.phoneNumber} href="tel:+4753771263">
            475-377-1263
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725827406/rillamedia/freepik-export-20240908202902eHWG_e9dseo.png"
          alt="3d fractal"
          fill={true}
        />
      </div>
      <svg
        className={styles.svg}
        viewBox="0 0 500 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          width="100vw"
          className={styles.path}
          d="M0 100 Q125 150 250 100 T500 100 V0 H0 Z"
          fill="#191919"
        />
      </svg>
    </div>
  );
};

export default Hero;