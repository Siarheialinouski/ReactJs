import React, { useState } from 'react';


export const AddAuthor = (props) => {

  const [value, setValue] = useState({ name: "" });

  return (
    <div class="Div-inline">
      <button className='inputSearch' onClick={() => props.functionAdd(value)}> Create Author</button>
    </div>
  );
}