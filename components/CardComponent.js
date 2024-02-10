"use client";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import camera from "../public/cameraStair.png";
import clipboard from "../public/clipboard.svg";
import graphBox from "../public/graphBox.svg";
import location from "../public/location.svg";
import taskAdd from "../public/taskAdd.svg";
import tasktools from "../public/tasktools.svg";
import trash from "../public/trashTable.svg";
import recorder from "../public/videoRecording.svg";
import BoldSubheading from "./BoldSubHeading";
import FadeText from "./FadeText";

export default function CardComponent() {
  return (
    <Container
      fixed
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Card sx={{ maxWidth: 345, borderRadius: "12px" }}>
        <CardMedia
          sx={{ height: 240, width: 340, objectFit: "contain" }}
          image="./cameraStair.png"
          title="green iguana"
        />

        <CardContent
          sx={{
            p: "13px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            "&:last-child": {
              paddingBottom: "13px",
            },
          }}
        >
          <BoldSubheading
            fontSize="16px"
            letterSpacing="0.1px"
            lineHeight="20px"
            fontWeight="500"
          >
            Bank Entrance-front-view Camera1
          </BoldSubheading>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <img src="./tasktools.svg" />
            <FadeText>3 Recipes Added</FadeText>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <img src="./clipboard.svg" />
            <FadeText>today, 04:45pm: Unidentified face detected</FadeText>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <img src="./location.svg" />
            <FadeText>Coimbatore branch </FadeText>
          </Box>
          <CardActions sx={{ p: "0 " }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
                gap: "20px",
              }}
            >
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
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  gap: "10px",
                  "@media (max-width: 991px)": {
                    justifyContent: "center",
                  },
                }}
              >
                <a href="#" css={{ aspectRatio: "1", overflow: "hidden" }}>
                  <img
                    loading="lazy"
                    src="./trashTable.svg"
                    sx={{
                      objectFit: "contain",
                      objectPosition: "center",
                      width: "24px",
                      maxWidth: "100%",
                    }}
                  />
                </a>
                <a href="#" css={{ aspectRatio: "1", overflow: "hidden" }}>
                  <img
                    loading="lazy"
                    src="./videoRecording.svg"
                    sx={{
                      objectFit: "contain",
                      objectPosition: "center",
                      width: "24px",
                      maxWidth: "100%",
                    }}
                  />
                </a>
                <a href="#" css={{ aspectRatio: "1", overflow: "hidden" }}>
                  <img
                    loading="lazy"
                    src="./graphBox.svg"
                    sx={{
                      objectFit: "contain",
                      objectPosition: "center",
                      width: "24px",
                      maxWidth: "100%",
                    }}
                  />
                </a>
              </Box>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
      <Card sx={{ width: 345, borderRadius: "12px", p: "20px 33px 16px 24px" }}>
        <CardActions sx={{ p: 0 }}>
          <img src="./taskAdd.svg" />
        </CardActions>
        <Typography
          sx={{
            color: "#656565",
            fontFamily: "Roboto",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "36px",
          }}
        >
          Recipe Management
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.60)",
              letterSpacing: "0.4px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "15px",
            }}
          >
            Manage
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
