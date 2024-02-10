import { Button } from "@mui/material";
import React from "react";

function ActiveButton({ backgroundColor = "#4CAF50", content = "Active" }) {
  return (
    <Button
      variant="contained"
      sx={{
        color: "#FFF",
        backgroundColor: backgroundColor,
        borderRadius: "4px",
        p: "0px 14px",
        fontFamily: "Roboto",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "28px",
        // letterSpacing: "-1px",
        textTransform: "none",
      }}
    >
      {content}
    </Button>
  );
}

export default ActiveButton;
