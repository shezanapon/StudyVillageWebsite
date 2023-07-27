import {
  Box,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import pic from "../components/CompanyProfile/studyvillage.png";
import "./EveryPage.css";
import SearchIcon from "@mui/icons-material/Search";
import { TableRows } from "@mui/icons-material";

// change
const datas = [
  {
    Student_Name: "James Anderson",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "Shezan",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "Mahbub",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "James Anderson",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "James Anderson",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
];

const StudyVillageStudents = () => {
  // change
  const [search, setSearch] = useState("");
  return (
    <Box
      // change
      sx={{
        height: "100%",
        overflowY: "hidden",
      }}
    >
      {/* change */}
      <Box sx={{ p: { xs: 2, sm: 6, md: 6, lg: 6 } }}>
        <Box style={{ display: "flex", paddingBottom: "30px" }}>
          {/* change */}
          <Box sx={{ width: { xs: "85%", sm: "93%", md: "93%", lg: "93%" } }}>
            <img
              src={
                "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
              }
              alt="pic"
              style={{
                // change
                width: 300,
                paddingTop: "20px",
              }}
            />
          </Box>
          {/* change */}
          <Box sx={{ width: { xs: "15%", sm: "7%", md: "7%", lg: "7%" } }}>
            <MenuIcon
              size="large"
              sx={{
                color: "yellow",
                height: "100px",
                width: { xs: "55px", sm: "70px", md: "100px" },
              }}
            />
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box sx={{ width: "60%", xs: { width: "20%" } }}>
              <h2>
                <i style={{ color: "white" }}>Your StudyVillage students</i>
              </h2>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box
              sx={{
                width: "95%",
                paddingRight: "5px",
                height: "40px",
                border: "1px solid #2FAFD4",
                paddingTop: "2px",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              <SearchIcon
                sx={{
                  color: "#2FAFD4",
                  width: "40px",
                  height: "40px",
                  paddingLeft: "8px",
                }}
              />
              <b
                style={{
                  color: "#2FAFD4",
                  paddingTop: "5px",
                  fontSize: "15px",
                }}
              >
                SEARCH
              </b>
              <input
                // change
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  backgroundColor: "white",
                  maxHeight: "60%",
                  width: "74%",
                  marginTop: "6px",
                  border: "0px solid white",
                  marginLeft: "6px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <hr style={{ border: "1px solid #C5D512", marginBottom: "30px" }} />

        {/* Table  cng start */}

        <TableContainer sx={{ maxWidth: "850px" }}>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
          >
            <TableHead sx={{ bgcolor: "white" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Student Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  StudyVillage ID
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Destination country
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Email address
                </TableCell>
              </TableRow>
            </TableHead>

            {datas
              .filter((value) =>
                value.Student_Name.toLowerCase().includes(search)
              )
              .map((data, index) => {
                return (
                  <TableRow className="cellColor">
                    <TableCell>{data.Student_Name}</TableCell>
                    <TableCell>{data.SVId}</TableCell>
                    <TableCell>{data.country}</TableCell>
                    <TableCell>{data.email}</TableCell>
                  </TableRow>
                );
              })}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default StudyVillageStudents;
