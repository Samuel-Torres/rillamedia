import React from "react";
import { serviceList, ServiceCardType } from "@/app/types/serviceTypes";
import ServiceCard from "./serviceCard";

type props = {
  isOpen: boolean;
  setIsOpen: Function;
  services: serviceList;
  setSelectedService: Function;
};

const ServiceCardList = ({
  isOpen,
  setIsOpen,
  services,
  setSelectedService,
}: props) => {
  return (
    <>
      {services?.serviceList?.map((service: ServiceCardType) => {
        return (
          <ServiceCard
            key={service?.title}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            service={service}
            setSelectedService={setSelectedService}
          />
        );
      })}
    </>
  );
};

export default ServiceCardList;
