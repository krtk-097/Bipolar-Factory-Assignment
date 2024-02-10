"use client";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import * as React from "react";

const data = [
  { value: 56, label: "Super Healthy", color: "green" },
  { value: 35, label: "Healthy", color: "#90EE90" },
  { value: 6, label: "Danger", color: "red" },
  { value: 27, label: "Warning", color: "orange" },
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
  return (
    <StyledText x={left + width / 2} y={top + height / 2 - 10}>
      {" "}
      <tspan x={left + width / 2} dy="0.2em">
        124
      </tspan>{" "}
      <tspan x={left + width / 2} dy="1.2em">
        Cameras
      </tspan>{" "}
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
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          124
        </Typography>
        <Typography>Cameras</Typography>
      </PieCenterLabel>
    </PieChart>
  );
}
