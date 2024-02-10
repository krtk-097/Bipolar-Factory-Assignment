"use client";
import ActiveButton from "@/components/ActiveButton";
import { Box, Container, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import editTable from "../public/editTable.svg";
import trashTable from "../public/trashTable.svg";
function createData(
  name,
  email,
  role,
  mainLocation,
  secLocation,
  lastActive,
  permission,
  active = true
) {
  return {
    name,
    email,
    role,
    location: { main: mainLocation, sec: secLocation },
    lastActive,
    permission,
    active,
  };
}
console.log();
const rows = [
  createData(
    "Peter John",
    "Peter@gmail.com",
    "owner",
    "Adam Stall",
    "Coimbatore",
    "Sep 13, 2023 5:51 PM",
    "All permission"
  ),
  createData(
    "Lingan",
    "Lin@gmail.com",
    "Executive",
    "MMDA",
    "Coimbatore",
    "Sep 13, 2023 5:51 PM",
    "3 permission"
  ),
  createData(
    "Adam",
    "Adam@gmail.com",
    "Admin",
    "DEO Office",
    "Delhi",
    "Sep 13, 2023 5:51 PM",
    "6 permission"
  ),
  createData(
    "Smith",
    "Smith@gmail.com",
    "Supervisor",
    "Plot Hub",
    "Coimbatore",
    "Sep 13, 2023 5:51 PM",
    "5 permission"
  ),
  createData(
    "John Abraham",
    "Jhon@gmail.com",
    "Executive",
    "CA",
    "Coimbatore",
    "Sep 13, 2023 5:51 PM",
    "2 permission",
    false
  ),
];

export default function TableComponent() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TableContainer component={Paper} sx={{ p: "16px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                borderBottom: 0,
                backgroundColor: "#E0E0E0",
                "& th:first-child": {
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                },
                "& th:last-child": {
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                },
              }}
            >
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Locations</TableCell>
              <TableCell align="center">Last Active</TableCell>
              <TableCell align="center">Permissions</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ height: "77px" }}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="center">
                  <Stack sx={{ mt: 0 }} alignItems="flex-start">
                    <Box component="span" sx={{ mb: "5px" }}>
                      {row.location.main}
                    </Box>
                    <Box component="span" sx={{ fontSize: "11px" }}>
                      {row.location.sec}
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell align="center">{row.lastActive}</TableCell>
                <TableCell align="center">{row.permission}</TableCell>
                <TableCell align="center">
                  {!row.active ? (
                    <ActiveButton
                      backgroundColor="#ED1C24"
                      content="Inactive"
                    />
                  ) : (
                    <ActiveButton />
                  )}
                </TableCell>
                <TableCell align="center">
                  <Stack direction={"row"} justifyContent="flex-end" gap="14px">
                    <img src={"./trashTable.svg"} />
                    <img src={"./editTable.svg"} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
