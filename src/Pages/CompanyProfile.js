import React from "react";

const titles = [
  { id: "principal", label: "Company Principal" },
  { id: "referral", label: "Referral ID" },
  { id: "email", label: "Key Contact email address" },
  { id: "address", label: "Company address" },
  { id: "phone", label: "Phone Number" },
  { id: "website", label: "Website" },
];

const data = [
  {
    principal: "James Anderson",
    id: 9238627185621753,
    email: "svagent111@gmail.com",
    address: "95 Collins St Melbourne",
    phone: "9781 5158",
    website: "www.google.com",
  },
];
const CompanyProfile = () => {
  return (
    <div
      style={{
        backgroundColor: "#121F28",
        height: "100%",
        padding: "50px 40px 60px 60px",
      }}
    >
      <h3>
        <i style={{ color: "white" }}>Your Company Profile</i>
      </h3>
      <hr style={{ border: "1px solid #C5D512", marginTop: "20px" }} />
      <div
        style={{
          border: "1x solid #366070",
          borderRadius: "5px",
          color: "white",
          fontSize: "12px",
          padding: 0,
        }}
      >
        PLEASE KEEP YOUR DETAILS UP TO DATE
      </div>
    </div>
  );
};

export default CompanyProfile;
