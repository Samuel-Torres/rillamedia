import React from "react";
import styles from "./styles.module.scss";
import {
  ClientListComponentType,
  ClientListType,
} from "@/app/types/clientListTypes";
import ClientCard from "./clientCard";

const ClientList = ({
  id,
  __component,
  clientList,
}: ClientListComponentType) => {
  // console.log("TEST: ", clientList);

  console.log("TESTING: ", !clientList);

  if (clientList?.length === 0) {
    return null;
  }
  return (
    <div className={styles.container}>
      <h3>Past Clients</h3>
      <div className={styles.cardListContainer}>
        {clientList?.map((client: ClientListType) => {
          return (
            <ClientCard
              key={client?.companyName}
              id={client?.id}
              companyName={client?.companyName}
              websiteUrl={client?.websiteUrl}
              logo={client?.logo}
              alt={client?.alt}
              className={client?.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientList;
