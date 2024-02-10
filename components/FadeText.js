"use client";
import { Typography } from "@mui/material";
import React from "react";

function FadeText({ children, color = "#757575" }) {
  return (
    <Typography
      sx={{
        color: color,
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        letterSpacing: "0.1px",
      }}
    >
      {children}
    </Typography>
  );
}

export default FadeText;
