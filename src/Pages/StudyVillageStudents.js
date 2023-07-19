import {
  Box,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import pic from "../components/CompanyProfile/studyvillage.png";
import "./EveryPage.css";
import SearchIcon from "@mui/icons-material/Search";
const datas = [
  { api_name: "Student name", field: "James Anderson" },
  { api_name: "StudyVillage ID", field: 9238627185621753 },
  { api_name: "Destination country", field: "United Kingdom" },
  { api_name: "Study Institution", field: "Hull University" },
  { api_name: "Study start date", field: "1 July 2024" },
  { api_name: "Total Semesters", field: "6" },
  { api_name: "Email address", field: "janderson@hack.com" },
  { api_name: "Contact number", field: "+44 1234 5678 90" },
  { api_name: "StudyVillage status", field: "Consolidating Studies" },
];

const keys = Object.keys(datas);
const StudyVillageStudents = () => {
  return (
    <Box
      style={{
        backgroundColor: "#121F28",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <Box sx={{ p: { xs: 1, sm: 8, md: 12, lg: 12 } }}>
        {" "}
        <Box style={{ display: "flex", paddingBottom: "30px" }}>
          <Box sx={{ width: { xs: "75%", sm: "93%", md: "93%", lg: "93%" } }}>
            <img
              src={
                "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
              }
              alt="pic"
              style={{ width: "280px", height: "70px", paddingTop: "20px" }}
            />
          </Box>
          <Box sx={{ width: { xs: "25%", sm: "7%", md: "7%", lg: "7%" } }}>
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
            {datas.map((data, index) => {
              return (
                <TableRow
                  className="cellColor"
                  style={{
                    // backgroundColor: "#2FAFD4",
                    overflow: "hidden",
                    height: "10px",
                    whiteSpace: "nowrap ",
                  }}
                >
                  <TableCell
                    key={data.id}
                    align={data.align}
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "10px",
                      top: 57,
                      minWidth: data.minWidth,
                      padding: "12px 12px 12px 12px",
                      display: "flex",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <b>{data.api_name}</b>
                      </Grid>
                      <Grid item xs={4} sx={{ color: "#2E4E64" }}>
                        {data.field}
                      </Grid>
                    </Grid>
                  </TableCell>
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
