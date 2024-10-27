import React from "react";
import { ServiceCardType } from "@/app/types/serviceTypes";
import styles from "./styles.module.scss";
import Image from "next/image";

type props = {
  service: ServiceCardType;
  isOpen: boolean;
  setIsOpen: Function;
};

const ServiceCard = ({ isOpen, setIsOpen, service }: props) => {
  // TO DO: CREATE MODAL AND PLACE PRICING DETAILS IN IT

  const handleOpenModal = (id: number, isOpen: boolean) => {
    if (id === service?.id) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={styles.container}
      onClick={() => handleOpenModal(service?.id, isOpen)}
    >
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
      {service.sellingPoint && (
        <div className={styles.sellingPointContainer}>
          <p>{service?.sellingPoint}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
