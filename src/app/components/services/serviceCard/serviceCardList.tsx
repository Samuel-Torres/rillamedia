import React from "react";
import { serviceList, ServiceCardType } from "@/app/types/serviceTypes";
import ServiceCard from "./serviceCard";

type props = {
  isOpen: boolean;
  setIsOpen: Function;
  services: serviceList;
};

const ServiceCardList = ({ isOpen, setIsOpen, services }: props) => {
  return (
    <>
      {services?.serviceList?.map((service: ServiceCardType) => {
        return (
          <ServiceCard
            key={service?.id}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            service={service}
          />
        );
      })}
    </>
  );
};

export default ServiceCardList;
