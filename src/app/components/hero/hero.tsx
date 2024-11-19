import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import { heroProps } from "@/app/types/componentTypes";

const Hero = ({
  heroImages: images,
  highlightedHeading: heading,
  socialMediaList: socials,
  numberAside,
}: heroProps) => {
  // console.log(socials[0]?.images);
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          {heading?.firstText}{" "}
          <span className={styles.highlight}>{heading?.highlightedText}</span>{" "}
          {heading?.remainingText}
        </h1>
        <div className={styles.socials}>
          {socials?.map((link) => {
            // console.log(link);
            return (
              <a
                key={link?.alt}
                href={link && link?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.socialsImageContainer}>
                  <Image
                    className={styles.socialImage}
                    src={link && link?.images?.small?.url}
                    alt={link && link?.alt}
                    fill={true}
                    priority={true}
                    sizes="auto"
                  />
                </div>
              </a>
            );
          })}
        </div>
        <div className={styles.phoneNumContainer}>
          <div className={styles.iconImageContainer}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725931911/rillamedia/old-typical-phone_asaihu.png"
              alt="phone number"
              fill={true}
              priority={true}
              sizes="auto"
            />
          </div>
          <a className={styles.phoneNumber} href="tel:+4753771263">
            {numberAside?.text}
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={
            images?.large?.url
              ? images?.large?.url
              : "https://res.cloudinary.com/dvz91qyth/image/upload/v1725827406/rillamedia/freepik-export-20240908202902eHWG_e9dseo.png"
          }
          alt="3d fractal"
          fill={true}
          priority={true}
          sizes="auto"
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
