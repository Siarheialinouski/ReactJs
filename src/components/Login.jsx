import React, { useState } from 'react';
import './Input.css';
import './Styles.css';
import { Link } from 'react-router-dom'
import {Button} from './Button';

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
      {value &&<Button className='inputSearch' handleClick={setValue(false)} name={"Logaut"}/>}
       
      </div>
    </div>
  );
}