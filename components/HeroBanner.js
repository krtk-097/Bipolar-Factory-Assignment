"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import crowd from "../public/crowd.png";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import refresh from "../public/refresh.svg";
import videoRecording from "../public/videoRecording.svg";

import BoldSubheading from "./BoldSubHeading";
import BoldText1 from "./BoldText_1";
import BoldText2 from "./BoldText_2";
import FadeText from "./FadeText";
import RecordCard from "./RecordCard";
import StyledButton1 from "./styledButton1";

function HeroBanner() {
  return (
    <Container
      sx={{
        py: "35px",
        display: "flex",
        gap: "35px",
        flexDirection: "column",
        borderRadius: 4,
        border: "1px solid  #E5E5E5",
        background: "#FFF",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <StyledButton1
          content="View Recorded Videos"
          icon={"./videoRecording.svg"}
        />
        <StyledButton1 content="Refetch Camera" icon="./refresh.svg" />
      </Box>

      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box
          sx={{
            borderRadius: "12px",
            aspectRatio: "1.78",
            overflow: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
          <img
            loading="lazy"
            src="./crowd.png"
            sx={{
              width: "100%",
              height: "100%",
            }}
            alt=""
          />
          <Box component="span"></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            py: "22px",
            px: "23px",
            borderRadius: "6px",
            border: "1px solid #E5E5E5",
            background: "#FFF",
            width: "436px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <BoldSubheading lineHeight="24px" letterSpacing="0.5px">
              Camera Details
            </BoldSubheading>
            <Box
              sx={{
                color: "#FFF",
                justifyContent: "center",
                borderRadius: "4px",
                backgroundColor: "rgba(0, 219, 74, 0.87)",
                padding: "4px 8px",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "0.5px",
              }}
            >
              Active
            </Box>
          </Box>
          <Stack alignItems="flex-start" gap="12px">
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <BoldText1>Location :</BoldText1>
              <FadeText>Coimbatore</FadeText>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <BoldText1>Timezone :</BoldText1>
              <FadeText>Delhi-India</FadeText>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <BoldText1>Date added :</BoldText1>
              <FadeText>Aug 03, 2023 12:01:42 PM</FadeText>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <BoldText1>Last update :</BoldText1>
              <FadeText>Aug 03, 2023 12:01:42 PM</FadeText>
            </Box>
          </Stack>
          <Stack alignItems="flex-start" gap="12px">
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <BoldText1>Manufacture details :</BoldText1>
              <FadeText>ADT</FadeText>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <BoldText1>RTSP/HLS URL :</BoldText1>
              <FadeText color="#0043C4">Copy URL</FadeText>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Stack spacing={2}>
        <BoldSubheading lineHeight="24px" letterSpacing="0.5px">
          Camera Health And Alert
        </BoldSubheading>

        <Stack direction={"row"} spacing={2} flexWrap="wrap">
          <Stack
            spacing={2}
            sx={{
              p: "18px 20px",
              border: "1px solid #E5E5E5",
              borderRadius: "6px",
              flexGrow: 1,
            }}
          >
            <BoldText2 fontWeight="600" fontSize="14px">
              Offline Alert
            </BoldText2>
            <FadeText>If camera is continuously offline for</FadeText>
            <BoldText2 fontWeight="500" fontSize="20px">
              12 minutes
            </BoldText2>
            <Stack spacing={1}>
              <FadeText>Send an email to</FadeText>
              <BoldText2 fontWeight="600" fontSize="13px">
                send email
              </BoldText2>
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              maxWidth: "338px",
              p: "16px 20px",
              border: "1px solid #E5E5E5",
              borderRadius: "6px",
              flexGrow: 1,
            }}
          >
            <BoldText2 fontWeight="600" fontSize="14px">
              Health Grade
            </BoldText2>
            <BoldText2 fontWeight="500" fontSize="28px">
              96%
            </BoldText2>
            <FadeText>
              Cheers, this camera had no offline time in
              <br /> the last 30 days
            </FadeText>
            <BoldText2 fontWeight="600" fontSize="14px" color="#4CAF50">
              Grade A
            </BoldText2>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              p: "16px 20px 11px 21px",
              border: "1px solid #E5E5E5",
              borderRadius: "6px",
              flexGrow: 1,
            }}
          >
            <BoldText2 fontWeight="600" fontSize="14px">
              Health Logs
            </BoldText2>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <FadeText>Today, 04:37 pm: Activated</FadeText>
              <FadeText>23 Aug, 02:22 pm: Deactivated</FadeText>
              <FadeText>21 Aug, 05:12 am: Activated</FadeText>
              <FadeText>20 Aug, 02:12 am: Deactivated</FadeText>
              <FadeText>19 Aug, 02:12 am: Deactivated</FadeText>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <BoldSubheading
            lineHeight="24px"
            letterSpacing="0.5px"
            fontSize="20px"
            color="#3C3C3C"
          >
            Recent Recordings
          </BoldSubheading>
          <BoldSubheading
            lineHeight="24px"
            letterSpacing="0.5px"
            fontSize="16px"
            color="#3C3C3C"
          >
            View All
          </BoldSubheading>
        </Stack>
        <Stack spacing={"12px"} direction={"row"}>
          <RecordCard
            boldContent="recording_0121"
            fadeContent="Today, 04:42 pm"
          />
          <RecordCard
            boldContent="recording_0121"
            fadeContent="Today, 04:42 pm"
          />
          <RecordCard
            boldContent="recording_0121"
            fadeContent="Today, 04:42 pm"
          />
          <RecordCard
            boldContent="recording_0121"
            fadeContent="Today, 04:42 pm"
          />
        </Stack>
      </Stack>
    </Container>
  );
}

export default HeroBanner;
