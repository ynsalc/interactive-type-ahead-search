import React from "react";

const SearchBar = ({ value, change, setShow }) => {
  const handleChange = (e) => {
    e.preventDefault();
    change(e.target.value.toLowerCase());
    if (e.target.value !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <nav className="nav-search">
      <header className="container search-header-bar">
        <i className="fa fa-search" data-testid="search-icon"></i>
        <input
          type="text"
          data-testid="search-input"
          className="search-input"
          value={value}
          onChange={handleChange}
          placeholder="SEARCH(Client Name / Policy Number)"
        />
      </header>
    </nav>
  );
};

export default SearchBar;
