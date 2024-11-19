"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { serviceList, ServiceCardType } from "@/app/types/serviceTypes";
import ServiceCardList from "./serviceCard/serviceCardList";
import Image from "next/image";

type Props = {
  services: serviceList;
};

const Services = ({ services }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceCardType>();

  // console.log("SELECTED: ", selectedService);

  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      {/* {isOpen && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          aria-describedby="modalContent"
        >
          {selectedService && (
            <div className={styles.iconImageContainer}>
              <Image
                className={styles.iconImage}
                src={selectedService?.iconImage?.small?.url}
                alt={selectedService?.iconImage?.small?.alt}
                fill={true}
                sizes="auto"
              />
            </div>
          )}
          <h3>{selectedService?.title}</h3>
        </div>
      )} */}
      <div className={styles.cardContainer}>
        <ServiceCardList
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          services={services}
          setSelectedService={setSelectedService}
        />
      </div>
    </div>
  );
};

export default Services;
