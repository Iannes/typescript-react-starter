import React from "react";
import { LayoutChildren } from "../../types";
import ButtonAppBar from "../ButtonAppBar";

export const Layout: LayoutChildren = ({ children }) => {
  return (
    <>
      <ButtonAppBar />
      <main className="App">{children}</main>
    </>
  );
};
