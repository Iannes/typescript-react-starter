import React from "react";
import { FormProvider } from "./GlobalContext";
import { ContextChildren } from "../types";

const Store: ContextChildren = ({ children }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default Store;
