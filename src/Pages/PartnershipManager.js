import {
  Box,
  Button,
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
  { api_name: "First name", field: "Glen" },
  { api_name: "Last name", field: "Meehan" },
  { api_name: "email address", field: "glenmeehan@studyvillage.org" },
  { api_name: "Mobile/Cell Whatsapp number", field: "+61 411 251 535" },
  { api_name: "Telephone", field: "(+613) 703 603 47 (ext.002)" },
];

const PartnershipManager = () => {
  return (
    <div
      style={{
        backgroundColor: "#121F28",
        height: "100%",
        padding: "100px 100px 236px 80px",
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
      <h2>
        <i style={{ color: "white" }}>Your StudyVillage partnership manager</i>
      </h2>
      <hr style={{ border: "1px solid #C5D512", marginBottom: "30px" }} />
      <div style={{ maxWidth: "40%" }}>
        <p style={{ color: "#C5D512", fontSize: "15px" }}>
          For account enquiries, assistance with a campaign or just a quick
          chat, please feel to reach out to your super-friendly StudyVillage
          account manager
        </p>
      </div>
      <TableContainer
        sx={{ maxWidth: "850px", paddingBottom: "40px", paddingTop: "20px" }}
      >
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

export default PartnershipManager;
