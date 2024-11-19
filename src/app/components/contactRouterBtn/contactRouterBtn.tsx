import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

type buttonProps = {
  borderColor: string;
  initialFontColor: string;
  ctaText: string;
  routeDestination: string;
};

const ContactRouterBtn = ({
  borderColor,
  initialFontColor,
  ctaText,
  routeDestination,
}: buttonProps) => {
  if (!routeDestination) return null;

  return (
    <>
      <Link href={routeDestination}>
        <button
          className={styles.swipeButton}
          style={{
            border: `2px solid ${borderColor}`,
            color: `${initialFontColor}`,
          }}
        >
          <span className={styles.buttonText}>{ctaText}</span>
          <span className={styles.arrow}>
            <Image
              src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725830651/rillamedia/play_ndj7c2.png"
              alt="arrow"
              width={20}
              height={20}
              sizes="auto"
            />
          </span>
        </button>
      </Link>
    </>
  );
};

export default ContactRouterBtn;
