import React, { useState } from "react";
import Datalist from "../../components/Datalist";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <SearchBar value={searchInput} change={setSearchInput}/>
      <Datalist value={searchInput} />
    </>
  );
};

export default Home;
