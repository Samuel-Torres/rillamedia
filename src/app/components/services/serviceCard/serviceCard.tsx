import React from "react";
import { ServiceCardType } from "@/app/types/serviceTypes";
import styles from "./styles.module.scss";
import Image from "next/image";

const ServiceCard = (service: ServiceCardType) => {
  //   console.log("CHECK: ", service);
  return (
    <div className={styles.container}>
      <div className={styles.iconImageContainer}>
        <Image
          className={styles.iconImage}
          src={service?.iconImage?.small?.url && service?.iconImage?.small?.url}
          alt={service && service?.iconImage?.small?.alt}
          fill={true}
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{service?.title}</p>
        <p className={styles.subheading}>{service?.subheading}</p>
        <p className={styles.bullet}>• {service?.bulletOne}</p>
        <p className={styles.bullet}>• {service?.bulletTwo}</p>
        <p className={styles.bullet}>• {service?.bulletThree}</p>
      </div>
      <div className={styles.sellingPointContainer}>
        <p>{service?.sellingPoint}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
