"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import StyledButton from "./styledButton";
function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", pb: "36px" }}>
      <Stack spacing={2} direction={"row"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgb(240, 240, 240)",
            flexDirection: "column",
            padding: "12px",
            borderRadius: "4px",
            height: "fit-content",
          }}
        >
          <img
            loading="lazy"
            src="./Vector.svg"
            className="aspect-square object-contain object-center w-[21px] fill-black overflow-hidden"
            alt="Camera Icon"
          />
        </Box>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              sx={{
                color: "#222",
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "normal",
                marginRight: "5px",
                letterSpacing: "0.5px",
              }}
            >
              VMS
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#000",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "0.5px",
              }}
            >
              / Cameras / Camera Details
            </Typography>
          </Box>
          <Typography
            variant="p"
            sx={{
              color: "rgba(0, 0, 0, 0.47)",
              letterSpacing: "0.5px",
              textTransform: "capitalize",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              lineHeight: "24px",
            }}
          >
            Bank Entrance-front-view Camera1
          </Typography>
          <Typography
            variant="p"
            className="text-black text-sm leading-6 tracking-wide w-full mt-3 max-md:max-w-full"
          >
            View and manage camera details, recordings and connection details
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <StyledButton textColor="#333" borderColor="1.4px solid #333">
          Edit Camera
        </StyledButton>

        <StyledButton textColor="#333" borderColor="1.4px solid #333">
          Deactivate
        </StyledButton>

        <StyledButton textColor="#ED1C24" borderColor="1.4px solid #ED1C24">
          Delete Camera
        </StyledButton>
      </Stack>
    </Box>
  );
}

export default Header;
