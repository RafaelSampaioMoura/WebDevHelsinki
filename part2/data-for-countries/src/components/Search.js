import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <form>
      <div>
        <label htmlFor='search-countries'>
          Search country
          <input
            type='text'
            name='search-countries'
            id='search-countries'
            onChange={handleSearch}
          />
        </label>
      </div>
    </form>
  );
};

export default Search;
