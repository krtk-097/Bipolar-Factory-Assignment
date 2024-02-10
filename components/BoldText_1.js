"use client";
import { Typography } from "@mui/material";
import React from "react";

function BoldText1({
  children,
  fontWeight = "600",
  letterSpacing = "0.1px",
  fontSize = "14px",
}) {
  return (
    <Typography
      sx={{
        fontSize: fontSize,
        fontStyle: "normal",
        fontWeight: fontWeight,
        lineHeight: "normal",
        letterSpacing: letterSpacing,
      }}
    >
      {children}
    </Typography>
  );
}

export default BoldText1;
