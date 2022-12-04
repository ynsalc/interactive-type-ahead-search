import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const SearchBar = ({ value, change }) => {
  const handleChange = (e) => {
    e.preventDefault();
    change(e.target.value.toLowerCase());
  };
  return (
    <div className="main p-3">
      <div className="inputs">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faSearch} color="white" />
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={handleChange}
              placeholder="SEARCH(Client Name / Policy Number)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
