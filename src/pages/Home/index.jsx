import React, { useState } from "react";
import Datalist from "../../components/Datalist";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <SearchBar
        value={searchInput}
        change={setSearchInput}
        setShow={setShowSearch}
      />
      <Datalist value={searchInput} show={showSearch} />
    </>
  );
};

export default Home;
