import React from "react";
import "../../App.css";
import ConfirmCasesChart from "../../components/charts/ConfirmCasesChart";
import CasesIncreaseinaDayChart from "../../components/charts/CasesIncreaseinaDayChart";
import HKNewestCaseStatus from "../../components/cards/HKNewestCaseStatus";
import LastUpdate from "../../components/cards/Lastupdate";

const section = {
  padding: 10,
  backgroundColor: "#fff"
};

function HomeRight() {
  return (
    <>
      <div style={section}>
        <ConfirmCasesChart />
        <CasesIncreaseinaDayChart />
      </div>
    </>
  );
}

export default HomeRight;