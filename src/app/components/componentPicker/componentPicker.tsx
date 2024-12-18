import React from "react";

// components:
import Hero from "../hero/hero";
import ColoredHeadingAside from "../coloredHeadingAside/coloredHeadingAside";
import Services from "../services/services";
import InfoCardsList from "../infoCard/infoCardsList";
import ContactForm from "../contactForm/contactForm";
import ClientList from "../pastClientList/clientList";

import { heroProps } from "@/app/types/componentTypes";
import { headlineAside } from "@/app/types/componentTypes";
import { serviceList } from "@/app/types/serviceTypes";
import { infoCardType } from "@/app/types/infoCardTypes";
import { contactFormTypes } from "@/app/types/contactFormTypes";
import { ClientListComponentType } from "@/app/types/clientListTypes";

const Picker = (
  object:
    | heroProps
    | headlineAside
    | serviceList
    | infoCardType
    | contactFormTypes
    | ClientListComponentType
) => {
  // Type guards to check if object is of type the right incoming shape
  const isHeroProps = (object: any): object is heroProps => {
    return object.__component === "hero.hero";
  };

  const isHeadlineAsideProps = (object: any): object is headlineAside => {
    return object?.__component === "headling-aside.headling-aside";
  };

  const isServiceCardTypeProps = (object: any): object is serviceList => {
    return object?.__component === "service-list.service-list";
  };

  const isInfoCardTypeProps = (object: any): object is infoCardType => {
    return object?.__component === "info-cards-list.info-cards-list";
  };

  const isContactFormTypeProps = (object: any): object is contactFormTypes => {
    return object?.__component === "contact-form.contact-form";
  };

  const isClientListComponentType = (
    object: any
  ): object is ClientListComponentType => {
    return object?.__component === "past-client-list.past-client-list";
  };

  if (isHeroProps(object)) {
    return (
      <Hero
        __component={object.__component}
        heroImages={object.heroImages}
        highlightedHeading={object.highlightedHeading}
        socialMediaList={object.socialMediaList}
        numberAside={object.numberAside}
        clientList={object?.clientList}
      />
    );
  }

  if (isHeadlineAsideProps(object)) {
    return (
      <ColoredHeadingAside
        __component={object.__component}
        AsideHeading={object?.AsideHeading}
        TextBody={object?.TextBody}
        dblHighlightHeading={object?.dblHighlightHeading}
        ctaBtn={object?.ctaBtn}
      />
    );
  }

  if (isServiceCardTypeProps(object)) {
    return <Services services={object} />;
  }

  if (isInfoCardTypeProps(object)) {
    return (
      <InfoCardsList
        __component={object?.__component}
        infoCardsList={object?.infoCardsList}
      />
    );
  }

  if (isContactFormTypeProps(object)) {
    return <ContactForm Heading={object?.Heading} />;
  }

  if (isClientListComponentType(object)) {
    return (
      <ClientList
        id={object?.id}
        __component={object?.__component}
        clientList={object?.clientList}
      />
    );
  }
};

export default Picker;
