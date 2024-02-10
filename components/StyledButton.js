import { Box, Button } from "@mui/material";
import React from "react";

function StyledButton({ children, textColor, borderColor }) {
  return (
    <Button
      sx={{
        textTransform: "none",
        height: "fit-content",
        color: textColor,
        textAlign: "center",
        letterSpacing: "0.1px",
        whiteSpace: "nowrap",
        "@media (max-width: 991px)": {
          whiteSpace: "initial",
          padding: "0 1px",
        },
        justifyContent: "center",
        borderRadius: "8px",
        border: borderColor,
        padding: "10px 20px",
      }}
    >
      <Box
        component="span"
        sx={{
          color: textColor,
          textAlign: "center",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "20px",
          letterSpacing: "0.1px",
        }}
      >
        {children}
      </Box>
    </Button>
  );
}

export default StyledButton;
