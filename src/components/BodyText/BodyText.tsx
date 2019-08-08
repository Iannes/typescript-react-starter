import React from "react";
import Typography from "@material-ui/core/Typography";
import { TextProps } from "types";

export const BodyText: React.FC<TextProps> = ({ titleText, variant }) => {
  if (variant === "heading") {
    return (
      <Typography variant="h5" component="h5">
        {titleText}
      </Typography>
    );
  } else {
    return (
      <Typography variant="body1" component="p">
        {titleText}
      </Typography>
    );
  }
};
