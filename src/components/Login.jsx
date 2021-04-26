import React, { useState } from 'react';
import './Input.css';
import './Styles.css';
import { Link } from 'react-router-dom'

export const Login = (props) => {
  const [value, setValue] = useState(false);
  return (
    <div class="Div-inline">
      <div class="Div-inline">
        <h4>{value ? "Siarhei" : "Welcome"}</h4>
      </div>
      <div class="Empty-space2" />
      <div class="Div-inline">
      <Link to='/login'>Login</Link>
        {value && <button className='inputSearch' onClick={() => { setValue(false) }}>
          Logaut
       </button>}
      </div>
    </div>
  );
  //   <div class="Div-inline">
  //      <div class="Div-inline">
  //           <h4>{value ? "Siarhei" : "Welcome"}</h4>
  //      </div> 
  //      <div class="Empty-space2"/>
  //       <div class="Div-inline">
  //         { !value && <button className='inputSearch' onClick={() => { setValue(true)}}>
  //             Login
  //         </button>}
  //         { value && <button className='inputSearch' onClick={() => { setValue(false)}}>
  //             Logaut
  //         </button>}
  //     </div>
  //   </div>
  // );
}