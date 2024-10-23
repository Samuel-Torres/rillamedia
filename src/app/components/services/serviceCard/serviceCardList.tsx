import React from "react";
import { serviceList, ServiceCardType } from "@/app/types/serviceTypes";
import ServiceCard from "./serviceCard";

const ServiceCardList = (services: serviceList) => {
  return (
    <>
      {services?.services?.map((service: ServiceCardType) => {
        return <ServiceCard key={service?.id} {...service} />;
      })}
    </>
  );
};

export default ServiceCardList;
