import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { bulletType, infoCardList } from "@/app/types/infoCardTypes";
import ContactRouterBtn from "../contactRouterBtn/contactRouterBtn";

const InfoCard = ({ id, heading, iconImage, bullets }: infoCardList) => {
  const cleanseBullet = (bullet: string) => {
    if (bullet.includes("Call")) {
      const newStr = bullet?.replace("Call: ", "").trim();
      return newStr;
    }
    if (bullet.includes("Email")) {
      const newStr = bullet?.replace("Email ", "").trim();
      return newStr;
    }
  };

  return (
    <div className={styles.container}>
      {iconImage && (
        <div className={styles.iconImageContainer}>
          <Image
            className={styles.iconImage}
            src={iconImage}
            fill={true}
            alt="icon"
          />
        </div>
      )}
      <div>
        <h5>{heading}</h5>
        {bullets &&
          bullets?.map((bullet: bulletType) => {
            if (!bullet?.iconIsVisible && bullet?.bullet?.includes("Call")) {
              return (
                <div
                  key={`bullet-${bullet?.id}`}
                  className={styles.ctaBtnContainer}
                >
                  <a href={`tel:${cleanseBullet(bullet?.bullet)}`}>
                    {bullet?.bullet}
                  </a>
                </div>
              );
            }
            if (!bullet?.iconIsVisible && bullet?.bullet?.includes("Email")) {
              return (
                <div key={bullet?.id} className={styles.ctaBtnContainer}>
                  <a href={`mailto:${cleanseBullet(bullet?.bullet)}`}>
                    {bullet?.bullet}
                  </a>
                </div>
              );
            }

            if (bullet?.iconIsVisible)
              return (
                <div>
                  <span className={styles.checkMarkWText}>
                    <div className={styles.checkMarkContainer}>
                      <Image
                        className={styles.checkMark}
                        src="https://res.cloudinary.com/dvz91qyth/image/upload/v1731451702/check-mark_ydm71b.png"
                        fill={true}
                        alt="checkmark icon"
                      />
                    </div>
                    <p>{bullet?.bullet}</p>
                  </span>
                </div>
              );
          })}
      </div>
    </div>
  );
};

export default InfoCard;
