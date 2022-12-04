import React from "react";
import Data from "../Data";
import data from "../../api/data";

const Datalist = ({ value }) => {
  return (
    <div>
      {data
        .filter((item) => {
          if (value === "") {
            return item;
          } else if (
            item.fullName
              .toLocaleLowerCase()
              .includes(value.toLocaleLowerCase())
          ) {
            return item;
          } else if (
            item.policyNo
              .toLocaleLowerCase()
              .includes(value.toLocaleLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return <Data list={item} key={item?.id} />;
        })}
    </div>
  );
};

export default Datalist;
