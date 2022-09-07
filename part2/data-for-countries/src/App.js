import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import { Results } from './components/Results';

const App = () => {
  const [countries, setCountries] = useState([
    {
      names: [],
      info: [],
    },
  ]);
  // const [searchInput, setSearchInput] = useState('');
  const [searchedCountries, setSearchedCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const data = response.data;
      const names = data.map((country) => country.name.common);
      // console.log(data);
      // console.log(names);
      setCountries({
        names: [...names],
        info: [...data],
      });
    });
  }, []);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    // console.log(countries.name.common);
    const filteredList = countries.names.filter((name) =>
      name.toLowerCase().includes(e.target.value)
    );
    setSearchedCountries([...filteredList]);
    // console.log(filteredList);
    // console.log(searchedCountries);
  };

  // console.log(countries);

  return (
    <div>
      <h1>Country Search Engine</h1>
      <Search handleSearch={handleSearch} />
      <Results searchedCountries={searchedCountries} countries={countries} />
    </div>
  );
};

export default App;
