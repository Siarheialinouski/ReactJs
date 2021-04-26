import React, { useState } from 'react';
import './Input.css';

export const Input = () => {

  const [value, setValue] = useState();

  return (
    <div>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button className='inputSearch' onClick={() => console.log(value)}>
        Enter
      </button>
    </div>
  );
}