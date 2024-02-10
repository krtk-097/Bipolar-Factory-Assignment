"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { palette, spacing } from "@mui/system";
import React from "react";

import BoldText1 from "./BoldText_1";
import BoldText2 from "./BoldText_2";
import SimplePieChart from "./SimplePieChart";

function CameraHealthChart() {
  return (
    <Container
      fixed
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: "100%",

          mt: 0,
          py: "20px",
          px: "24px",
          gap: "25px",
          border: "1px solid grey.500",
          borderRadius: "12px",
          background: "#FFF",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            color: "#000",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "0.1px",
          }}
        >
          Camera Health
        </Typography>

        <Stack
          sx={{ mt: spacing(3) }}
          direction={{ xs: "column", md: "row" }}
          gap={2}
        >
          <SimplePieChart />

          <CameraHealthLegend />
        </Stack>
      </Stack>
    </Container>
  );
}

export default CameraHealthChart;

function CameraHealthLegend() {
  return (
    <Stack gap={2}>
      <Box
        sx={{
          p: "16px",
          display: "flex",
          padding: spacing(2),
          alignItems: "center",
          gap: "10px",
          borderRadius: "6px",
          backgroundColor: "#F1F1F1",
        }}
      >
        <img src="./cctv.svg" />

        <BoldText1 fontWeight={500} letterSpacing="0.5px">
          Totally
          <Box
            component="span"
            sx={{
              marginLeft: "5px",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
            }}
          >
            124
          </Box>{" "}
          Cameras in 9 NVRs over 12 Locations
        </BoldText1>
        <Typography variant="subtitle1"></Typography>
      </Box>

      <Box
        sx={{
          p: "16px",
          display: "flex",
          padding: spacing(2),
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          borderRadius: "6px",
          backgroundColor: "#F1F1F1",
        }}
      >
        <Stack direction={"row"} gap="10px" alignItems="center">
          <img src="./typcn_info.svg" />
          <BoldText1 fontWeight={500} letterSpacing="0.5px">
            <Box
              component="span"
              sx={{
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "0.5px",
              }}
            >
              6
            </Box>{" "}
            Cameras were experiencing downtime in Last 30 days
          </BoldText1>
        </Stack>

        <Box
          sx={{
            display: "flex",
            height: "fit-content",
            padding: "10px",
            alignItems: "center",
            borderRadius: "6px",
            background: "#FFF",
          }}
        >
          <BoldText2 fontSize="12px" fontWeight="600">
            View Cameras
          </BoldText2>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "16px",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <StatusItem color="#19A01E" label="Super Healthy" amount={56} />

        <StatusItem color="#00DB4A" label="Healthy" amount={35} />

        <StatusItem color="#FB8B34" label="Warning" amount={27} />

        <StatusItem color="#ED1C24" label="Danger" amount={6} />
      </Box>
    </Stack>
  );
}

function StatusItem({ color, label, amount }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        paddingX: spacing(2),
      }}
    >
      <Box
        sx={{
          width: "16px",
          height: "16px",
          borderRadius: "100px",
          backgroundColor: color,
        }}
      />

      <Typography variant="body1">
        {label} ({amount})
      </Typography>

      <img src="./info.svg" width={16} />
    </Box>
  );
}
