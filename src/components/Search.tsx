'use client';

import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='mx-auto p-4 max-w-[1000px]'>
      <input
        type='text'
        placeholder='Search for destinations, activities, or more...'
        value={query}
        onChange={handleChange}
        className='p-4 my-4 border-green-500 border-4 text-center rounded-xl '
      />
    </div>
  );
};

export default Search;
