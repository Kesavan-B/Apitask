import React from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navs from "./navb/Navs";
import { Container } from "@mui/material";

function Admui() {
  const location = useLocation();

  console.log(location, "location");
  
  const datas = location?.state?.data;
  return (
    <div>
      <Navs />
      <Container>
        <div style={{ color: "#000" }}>
          <h1 style={{ margin: "30px 0px" }}>
            <span style={{ color: "#7B50D5" }}>Contact </span>List...
          </h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                    First Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                    Phone number
                  </TableCell>
                  <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                    Messages
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datas &&
                  datas.map((a, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {a.firstName}
                      </TableCell>
                      <TableCell>{a.email}</TableCell>
                      <TableCell>{a.phno}</TableCell>
                      <TableCell>{a.messages}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </div>
  );
}

export default Admui;
