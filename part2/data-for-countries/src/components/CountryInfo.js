import React from 'react';

export const CountryInfo = ({
  foundCountry: { name, area, capital, languages, flag },
}) => {
  //   console.log(foundCountry);
//   console.log(area);
//   console.log(capital);
//   console.log(languages);
//   console.log(flag);
  const languageArr = Object.values(languages);
//   console.log(languageArr);
  return (
    <div>
      Country Information:
      <h3>{name.common}</h3>
      <p>{capital[0]}</p>
      <p>{area}</p>
      <ul>
        {languageArr.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <p>{flag}</p>
    </div>
  );
};
