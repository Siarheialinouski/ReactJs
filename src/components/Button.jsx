import React, { useState } from 'react';

export const Button = (value) => {
  
  const [value, setValue] = useState(); 

  return (
    <div>
      <textarea value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={() => console.log(value)}>
        Enter
      </button>
    </div>
  );
}