import React from 'react';

export const PersonList = ({ searchName, searchList, persons }) => {
  return (
    <div>
      {searchName
        ? searchList.map(({ name, number, id }) => (
            <p key={id}>
              {name}, {number}
            </p>
          ))
        : persons.map(({ name, number, id }) => (
            <p key={id}>
              {name}, {number}
            </p>
          ))}
    </div>
  );
};
