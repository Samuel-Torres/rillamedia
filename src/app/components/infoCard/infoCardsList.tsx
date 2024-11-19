import React from "react";
import styles from "./styles.module.scss";
import { infoCardType, infoCardList } from "@/app/types/infoCardTypes";
import InfoCard from "./infoCard";
import Wave from "../wave/wave";
import ContactRouterBtn from "../contactRouterBtn/contactRouterBtn";

const InfoCardsList = ({ __component, infoCardsList }: infoCardType) => {
  return (
    <div className={styles.OutterWrapper}>
      <div className={styles.wrapper}>
        {infoCardsList?.map((info: infoCardList) => {
          return (
            <InfoCard
              key={info?.heading}
              id={info?.id}
              heading={info?.heading}
              iconImage={info?.iconImage}
              bullets={info?.bullets}
            />
          );
        })}
      </div>
      <div className={styles.contactContainer}>
        <ContactRouterBtn
          borderColor="white"
          initialFontColor="white"
          routeDestination="/contact"
          ctaText="Let's Talk"
        />
      </div>
      <Wave />
    </div>
  );
};

export default InfoCardsList;
