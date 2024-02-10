"use client";
import { Typography } from "@mui/material";
import React from "react";

function BoldSubheading({
  children,
  lineHeight,
  letterSpacing,
  fontSize = "20px",
  color = "#000",
  fontWeight = "600",
}) {
  return (
    <Typography
      sx={{
        color: color,
        fontSize: fontSize,
        fontStyle: "normal",
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
      }}
    >
      {children}
    </Typography>
  );
}

export default BoldSubheading;
