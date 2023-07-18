import React from "react";
import CompanyProfile from "./Pages/CompanyProfile";
import StudyVillageStudents from "./Pages/StudyVillageStudents";
import Counsellors from "./Pages/Counsellors";
import PartnershipManager from "./Pages/PartnershipManager";

const App = () => {
  return (
    <body style={{ backgroundColor: "#121F28" }}>
      <div>
        {/* <CompanyProfile /> */}
        {/* <StudyVillageStudents /> */}
        <Counsellors />
        {/* <PartnershipManager /> */}
      </div>
    </body>
  );
};

export default App;
