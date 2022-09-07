import React, { useState } from 'react';
import { CountryInfo } from './CountryInfo';

export const Results = ({ searchedCountries, countries: { info } }) => {
  //   console.log(info);
  const [showInfo, setShowInfo] = useState(false);
  const [showCountry, setShowCountry] = useState('');
  const handleClick = (nameClicked) => {
    showInfo ? setShowInfo(false) : setShowInfo(true);
    setShowCountry(nameClicked);
  };

  return (
    <div>
      <h2>Search Results</h2>
      {searchedCountries.length > 10 ? (
        <p>Please be more specific with your search</p>
      ) : searchedCountries.length === 1 ? (
        <CountryInfo
          foundCountry={info.find(
            (country) => country.name.common === searchedCountries[0]
          )}
        />
      ) : (
        searchedCountries.map((country) => {
          return (
            <p>
              {country}
              <button onClick={() => handleClick(country)}>show</button>
            </p>
          );
        })
      )}
      {showInfo ? (
        <CountryInfo
          foundCountry={info.find(
            (country) => country.name.common === showCountry
          )}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
