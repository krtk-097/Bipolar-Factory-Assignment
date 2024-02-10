import { Box } from "@mui/material";
import React from "react";
function StyledButton1({ textColor, borderColor, icon, content }) {
  return (
    <Box
      sx={{
        height: "fit-content",
        backgroundColor: "#EFEFEF",
        display: "flex",
        gap: 2,
        textAlign: "center",
        letterSpacing: "0.1px",
        whiteSpace: "nowrap",
        "@media (max-width: 991px)": {
          whiteSpace: "initial",
          padding: "0 1px",
        },
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        padding: "12px 22px",
      }}
    >
      <img src={icon} />

      <Box
        component="span"
        sx={{
          color: "black",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        {content}
      </Box>
    </Box>
  );
}

export default StyledButton1;
