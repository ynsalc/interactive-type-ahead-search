import React from "react";

const Data = ({ list }) => {
  return (
    <section className="striped" key={list.id}>
      <div className="container">
        <h5 className="pt-3" data-testid="search-bag-item-name">
          {list.fullName}
        </h5>
        <div className="pb-3 d-sm-flex col-sm-12">
          <span className="d-block col-sm-4">
            <i className="fa fa-phone"></i> {list.phone}
          </span>
          <span className="d-block col-sm-4">
            <i className="fa fa-at"></i> {list.email}
          </span>
          <span
            className="d-block col-sm-4"
            data-testid="search-bag-item-policy"
          >
            <i className="fa fa-file"></i> Policy No: {list.policyNo}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Data;
