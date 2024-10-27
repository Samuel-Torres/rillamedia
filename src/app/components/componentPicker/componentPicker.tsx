import React from "react";

// components:
import Hero from "../hero/hero";
import ColoredHeadingAside from "../coloredHeadingAside/coloredHeadingAside";
import Services from "../services/services";

import { heroProps } from "@/app/types/componentTypes";
import { headlineAside } from "@/app/types/componentTypes";
import { serviceList } from "@/app/types/serviceTypes";

const Picker = (object: heroProps | headlineAside | serviceList) => {
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

  if (isHeroProps(object)) {
    return (
      <Hero
        __component={object.__component}
        heroImages={object.heroImages}
        highlightedHeading={object.highlightedHeading}
        socialMediaList={object.socialMediaList}
        numberAside={object.numberAside}
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
};

export default Picker;
