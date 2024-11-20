import React from "react";
import { ClientListType } from "@/app/types/clientListTypes";
import styles from "./styles.module.scss";
import Image from "next/image";

const ClientCard = ({
  id,
  companyName,
  alt,
  websiteUrl,
  logo,
  className,
}: ClientListType) => {
  return (
    <div className={styles.cardContainer}>
      <div className={`${styles[className]}`}>
        <Image src={logo} alt={alt} fill={true} priority={true} sizes="auto" />
      </div>
    </div>
  );
};

export default ClientCard;
