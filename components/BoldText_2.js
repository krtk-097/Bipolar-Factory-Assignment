"use client";
import { Typography } from "@mui/material";
import React from "react";

function BoldText2({
  children,
  color = "#222",
  fontWeight,
  fontSize,
  letterSpacing = "0.1px",
}) {
  return (
    <Typography
      sx={{
        color: color,
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

export default BoldText2;
