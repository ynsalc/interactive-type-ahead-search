import React from "react";
import Data from "../Data";
import data from "../../api/data";

const Datalist = ({ value, show }) => {
  if(!data) return <div>No Result.</div>
  const filteredData = data.filter((item) => {
    return (
      item.fullName.toLowerCase().includes(value.toLowerCase()) ||
      item.policyNo.includes(value)
    );
  });
  return (
    <div>
      {filteredData.map((item) => {
        return show && <Data list={item} key={item.id} />;
      })}
    </div>
  );
};

export default Datalist;
