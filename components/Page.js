"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

function Page() {
  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "72px",
        pb: { xs: 8, md: 10 },
        background: "#FBFCFD",
      }}
    >
      <Container fixed>
        <Header />
        <HeroBanner />
      </Container>
    </Box>
  );
}

export default Page;
