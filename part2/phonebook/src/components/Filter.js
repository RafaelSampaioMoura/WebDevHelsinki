import React from 'react';

export const Filter = ({ handleSearch }) => {
  return (
    <div>
      {' '}
      search: <input name='name-search' onChange={handleSearch} />
    </div>
  );
};
