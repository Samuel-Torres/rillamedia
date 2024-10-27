import React from "react";
import styles from "./styles.module.scss";

// components:
import ContactRouterBtn from "../contactRouterBtn/contactRouterBtn";

import { headlineAside } from "@/app/types/componentTypes";

const ColoredHeadingAside = ({
  AsideHeading,
  TextBody,
  dblHighlightHeading,
  ctaBtn,
}: headlineAside) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.leftSide}>
          <h2>
            <span className={styles.highlight}>
              {dblHighlightHeading?.highlightOne}
            </span>{" "}
            {dblHighlightHeading?.textOne}
          </h2>
          <h2>
            {dblHighlightHeading?.highlightTwo}{" "}
            <span className={styles.highlight}>
              {dblHighlightHeading?.textTwo}
            </span>
          </h2>
        </div>
        <div className={styles.rightSide}>
          <h3>{AsideHeading}</h3>
          <p>{TextBody}</p>
          <ContactRouterBtn
            borderColor={ctaBtn?.borderColor}
            initialFontColor={ctaBtn?.initialFontColor}
            ctaText={ctaBtn?.ctaText}
            routeDestination={ctaBtn?.routeDestination}
          />
        </div>
      </div>
      <div className={styles.borderBottom}>
        <p></p>
      </div>
    </div>
  );
};

export default ColoredHeadingAside;
