import React from "react";
import styles from "./styles.module.scss";
import { serviceList } from "@/app/types/serviceTypes";
import ServiceCardList from "./serviceCard/serviceCardList";

const Services = (services: serviceList) => {
  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      <div className={styles.cardContainer}>
        <ServiceCardList services={services?.services} />
      </div>
    </div>
  );
};

export default Services;
