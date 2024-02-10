"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import playButton from "../public/playButton.svg";
import record from "../public/record1.png";
import BoldText1 from "./BoldText1";
import FadeText from "./FadeText";

function RecordCard({ boldContent, fadeContent }) {
  return (
    <Stack
      spacing={1}
      sx={{
        borderRadius: "6px",
        border: "1px solid #E5E5E5",
        flexGrow: 1,
        p: "12px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          sx={{ width: "100%" }}
          src="./record1.png"
          alt=""
        />
        <Box
          component="img"
          sx={{ position: "absolute", top: "40%", left: "43%" }}
          src="./playButton.svg"
          alt=""
        />
      </Box>
      <Stack spacing={1}>
        <BoldText1>{boldContent}</BoldText1>
        <FadeText>{fadeContent}</FadeText>
      </Stack>
    </Stack>
  );
}

export default RecordCard;
