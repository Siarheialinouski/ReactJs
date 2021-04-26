import React, { useState } from 'react';

export const EditCourseButton = (props) => {
  
  const [value, setValue] = useState({value: true}); 
  return (
    <div>
        <button onClick={ () => props.functionChangePage(value) }> Add new course TEST</button>
    </div>
  );
}