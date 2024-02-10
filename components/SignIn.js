"use client";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BoldText2 from "./BoldText2";

function SignIn() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        alignItems="center"
        gap="36px"
        sx={{
          borderRadius: "16px",
          background: "#FFF",
          mt: 0,
          p: "60px 72px",
        }}
      >
        <Typography
          sx={{
            minWidth: "458px",
            textAlign: "center",
            fontSize: 40,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          XYZ
        </Typography>
        <Stack sx={{ mt: 0 }} gap="30px">
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: 40,
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Welcome Onboardz
          </Typography>
          <Stack gap="30px">
            <TextField id="name" label="name" variant="filled" />
            <TextField id="company" label="company" variant="filled" />
            <FormControl variant="filled" sx={{ width: "100%" }}>
              <InputLabel
                id="demo-simple-select-filled-label"
                sx={{
                  width: "100%",
                }}
              >
                Select Industry
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Stack gap="12px" sx={{ mt: 0 }}>
              <Typography
                sx={{
                  color: "#1C1B1F",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "0.5px",
                }}
              >
                Select Number of Locations
              </Typography>
              <Stack sx={{ mt: 0 }} gap="12px" direction={"row"}>
                <Box
                  sx={{
                    borderRadius: "4px",
                    background: "#E7E0EC",
                    display: "flex",
                    padding: "9px 17px 9px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BoldText2
                    color="#000"
                    lineHeight="24px"
                    letterSpacing="0.5px"
                    fontWeight="500"
                  >
                    1-10
                  </BoldText2>
                </Box>

                <Box
                  sx={{
                    borderRadius: "4px",
                    background: "#E7E0EC",
                    display: "flex",
                    padding: "9px 17px 9px 18px",

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BoldText2
                    color="#000"
                    lineHeight="24px"
                    letterSpacing="0.5px"
                    fontWeight="500"
                  >
                    10-50
                  </BoldText2>
                </Box>

                <Box
                  sx={{
                    borderRadius: "4px",
                    background: "#000",
                    display: "flex",
                    padding: "9px 17px 9px 18px",

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BoldText2
                    color="#FFF"
                    lineHeight="24px"
                    letterSpacing="0.5px"
                    fontWeight="500"
                  >
                    50-150
                  </BoldText2>
                </Box>

                <Box
                  sx={{
                    borderRadius: "4px",
                    background: "#E7E0EC",
                    display: "flex",
                    padding: "9px 17px 9px 18px",

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BoldText2
                    color="#000"
                    lineHeight="24px"
                    letterSpacing="0.5px"
                    fontWeight="500"
                  >
                    150+
                  </BoldText2>
                </Box>
              </Stack>
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                p: "6px",
                backgroundColor: "#000",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  padding: "10px 24px",
                  color: "#FFF",
                  textAlign: "center",
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0.1px",
                }}
              >
                Continue
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SignIn;
