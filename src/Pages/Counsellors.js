import {
  Box,
  Button,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  tableCellClasses,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import pic from "../components/CompanyProfile/studyvillage.png";
import "./EveryPage.css";
import SearchIcon from "@mui/icons-material/Search";
// const datas = [
//   { api_name: "First name", field: "Katy" },
//   { api_name: "Last name", field: "Holmes" },
//   { api_name: "email address", field: "katy@dreamagent.com" },
//   { api_name: "Mobile/Cell number (optional)", field: "+92 4567 8943" },
//   { api_name: "Telephone", field: "+92 123 45556" },
//   { api_name: "Portal access", field: "Granted" },
//   { api_name: "StudyVillage training status", field: "Complete" },
// ];
const datas = [
  {
    First_name: "Katy",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
  {
    First_name: "Shezan",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
  {
    First_name: "Katy",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
  {
    First_name: "Katy",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
];

const keys = Object.keys(datas);
const Counsellors = () => {
  const [search, setSearch] = useState("");
  return (
    <Box
      style={{
        height: "100%",
        overflowY: "hidden",
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 6, md: 6, lg: 6 } }}>
        <Box style={{ display: "flex", paddingBottom: "30px" }}>
          <Box sx={{ width: { xs: "85%", sm: "93%", md: "93%", lg: "93%" } }}>
            <img
              src={
                "https://studyvillage.org/wp-content/uploads/2020/10/Logo-long-green-white_Artboard-6-15.png"
              }
              alt="pic"
              style={{
                width: 300,

                paddingTop: "20px",
              }}
            />
          </Box>
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
                <i style={{ color: "white" }}>Your Counsellors</i>
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
        <Box sx={{ maxWidth: { xs: "100%", sm: "80%", lg: "55%" } }}>
          <p style={{ color: "#C5D512", fontSize: "15px" }}>
            Use this page to grant your education counsellors access to your
            Company’s StudyVillage portal. To grant access to your staff
            members, tick the ‘portal access’ box and a notification with a
            temporary password will be sent. Please encourage any new
            counsellors to access our free counsellor training available from
            the Resources page.
          </p>
        </Box>
        <TableContainer sx={{ maxWidth: "850px", paddingBottom: "40px" }}>
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
                  First Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Last Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Email address
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Mobile/Cell number (optional)
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Telephone
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Portal access
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  StudyVillage training status
                </TableCell>
              </TableRow>
            </TableHead>

            {datas
              .filter((value) =>
                value.First_name.toLowerCase().includes(search)
              )
              .map((data, index) => {
                return (
                  <TableRow className="cellColor">
                    <TableCell>{data.First_name}</TableCell>
                    <TableCell>{data.Last_name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.mobile}</TableCell>
                    <TableCell>{data.Telephone}</TableCell>
                    <TableCell>{data.Portal_access}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                );
              })}
          </Table>
        </TableContainer>
        <Box style={{ paddingBottom: "22px" }}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#121F28",
              border: "1px solid #2FAFD4",
              fontWeight: "bold",
              borderRadius: "15px",
              fontStyle: "italic",
              paddingLeft: "50px",
              paddingRight: "50px",
              marginRight: "20px",
              marginBottom: { xs: "15px", sm: "0px" },
            }}
          >
            ADD A COUNSELLOR
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#121F28",
              border: "1px solid #2FAFD4",
              fontWeight: "bold",
              borderRadius: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
              fontStyle: "italic",
            }}
          >
            DELETE A COUNSELLOR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counsellors;
