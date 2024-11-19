import React from "react";
import { ClientListComponentType } from "@/app/types/clientListTypes";

const ClientList = ({
  id,
  __component,
  clientList,
}: ClientListComponentType) => {
  // console.log("TEST: ", clientList);
  return (
    <div>
      <h3>Past Clients</h3>
    </div>
  );
};

export default ClientList;
