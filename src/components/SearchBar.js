import React from "react";

const SearchBar = ({ setQuery }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for recipes..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
