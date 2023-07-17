import {
  Box,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import pic from "../components/CompanyProfile/studyvillage.png";

const datas = [
  { principal: "James Anderson" },
  { id: 9238627185621753 },
  { email: "svagent111@gmail.com" },
  { address: "95 Collins St Melbourne" },
  { phone: "9781 5158" },
  { website: "www.google.com" },
];

const keys = Object.keys(datas);
const CompanyProfile = () => {
  return (
    <div
      style={{
        backgroundColor: "#121F28",
        height: "100%",
        padding: "50px 40px 60px 60px",
      }}
    >
      <div style={{ display: "flex", paddingBottom: "30px" }}>
        <div style={{ width: "90%" }}>
          <img src={pic} alt="pic" style={{ width: "180px" }} />
        </div>
        <div style={{ width: "10%" }}>
          <MenuIcon
            size="large"
            sx={{ color: "yellow", height: "100px", width: "100px" }}
          />
        </div>
      </div>
      <h3>
        <i style={{ color: "white" }}>Your Company Profile</i>
      </h3>
      <hr style={{ border: "1px solid #C5D512", marginTop: "20px" }} />
      <Box
        sx={{
          color: "white",
          fontSize: "12px",
          paddingBottom: "40px",
          paddingTop: "30px",
        }}
      >
        <i
          style={{
            border: "1px solid #2FAFD4",
            padding: "5px 5px 5px 5px",
            borderRadius: "10px",
          }}
        >
          PLEASE KEEP YOUR DETAILS UP TO DATE
        </i>
      </Box>

      <TableContainer sx={{ maxWidth: "850px" }}>
        <Table
        // sx={{
        //   [`& .${tableCellClasses.root}`]: {
        //     borderBottom: "none",
        //   },
        // }}
        >
          {datas.map((data, index) => {
            return (
              <TableRow
                style={{
                  backgroundColor: "#2FAFD4",
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
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <b>Company Principal</b>
                    </Grid>
                    <Grid item xs={4}>
                      {data.principal}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  key={data.id}
                  align={data.align}
                  style={{
                    top: 57,
                    minWidth: data.minWidth,
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <b>Referral ID</b>
                    </Grid>
                    <Grid item xs={4}>
                      {data.id}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  key={data.id}
                  align={data.align}
                  style={{
                    top: 57,
                    minWidth: data.minWidth,
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <b>Key Contact email address</b>
                    </Grid>
                    <Grid item xs={4}>
                      {data.email}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  key={data.id}
                  align={data.align}
                  style={{
                    top: 57,
                    minWidth: data.minWidth,
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <b>Company address</b>
                    </Grid>
                    <Grid item xs={4}>
                      {data.address}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  key={data.id}
                  align={data.align}
                  style={{
                    top: 57,
                    minWidth: data.minWidth,
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <b>Phone Number</b>
                    </Grid>
                    <Grid item xs={4}>
                      {data.phone}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  key={data.id}
                  align={data.align}
                  style={{
                    top: 57,
                    minWidth: data.minWidth,
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <b>Website</b>
                    </Grid>
                    <Grid item xs={4}>
                      {data.website}
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

export default CompanyProfile;
