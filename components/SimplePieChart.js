"use client";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import * as React from "react";

const data = [
  { value: 10, label: "B" },
  { value: 20, label: "D" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  console.log(" width, height, left, top", width, height, left, top);
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function SimplePieChart() {
  return (
    <PieChart
      series={[{ data, innerRadius: 80 }]}
      {...size}
      slotProps={{
        legend: { hidden: true },
      }}
    >
      <PieCenterLabel>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            component="span"
            sx={{
              color: "#000",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
            }}
          >
            124
          </Box>
        </Box>
        Cameras
      </PieCenterLabel>
    </PieChart>
  );
}
