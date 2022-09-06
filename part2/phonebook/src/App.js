import { useState } from 'react';
import { PersonForm } from './components/PersonForm';
import { Filter } from './components/Filter';
import { PersonList } from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState(undefined);
  const [searchName, setSearchName] = useState(undefined);
  const [searchList, setSearchList] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target);
    e.target.name === 'name-input'
      ? setNewName(e.target.value)
      : setNewNumber(e.target.value);
    // console.log(newName);
    // console.log(newNumber);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const personName = persons.map((person) => person.name);
    // console.log(personName);
    if (personName.includes(newName)) {
      alert(`${newName} has already been added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleSearch = (e) => {
    setSearchName(e.target.value);
    const filteredList = persons.filter((person) =>
      person.name.toLowerCase().includes(searchName)
    );

    setSearchList([...filteredList]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
        handleSumbit={handleSumbit}
      />
      <h2>Numbers</h2>
      <PersonList
        persons={persons}
        searchName={searchName}
        searchList={searchList}
      />
    </div>
  );
};

export default App;
