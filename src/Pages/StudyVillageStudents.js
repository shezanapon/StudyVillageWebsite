import {
  Box,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
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
    <div
      style={{
        backgroundColor: "#121F28",
        height: "100%",
        padding: "100px 100px 127px 80px",
      }}
    >
      <div style={{ display: "flex", paddingBottom: "30px" }}>
        <div style={{ width: "93%" }}>
          <img
            src={
              "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
            }
            alt="pic"
            style={{ width: "280px", height: "70px", paddingTop: "20px" }}
          />
        </div>
        <div style={{ width: "7%" }}>
          <MenuIcon
            size="large"
            sx={{ color: "yellow", height: "100px", width: "100px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <h2>
            <i style={{ color: "white" }}>Your StudyVillage students</i>
          </h2>
        </div>
        <div
          style={{
            width: "30%",
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
          <b style={{ color: "#2FAFD4", paddingTop: "5px" }}>SEARCH</b>
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
        </div>
      </div>
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
    </div>
  );
};

export default StudyVillageStudents;
