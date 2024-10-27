"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { serviceList } from "@/app/types/serviceTypes";
import ServiceCardList from "./serviceCard/serviceCardList";

type Props = {
  services: serviceList;
};

const Services = ({ services }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      {isOpen && (
        <div>
          <h3>Pricing</h3>
        </div>
      )}
      <div className={styles.cardContainer}>
        <ServiceCardList
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          services={services}
        />
      </div>
    </div>
  );
};

export default Services;
