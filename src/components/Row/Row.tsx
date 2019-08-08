import React from "react";
import { RowProps } from "types";
import "./Row.css";

export const Row: React.FC<RowProps> = props => {
  const {
    rowKeyName,
    rowAlternativeTitle = "",
    hideTitle = false,
    children
  } = props;

  return (
    <section className="row">
      {!hideTitle ? <span>{rowAlternativeTitle || rowKeyName}</span> : null}
      {children}
    </section>
  );
};
