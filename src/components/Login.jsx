import React, { useState } from 'react';
import './Input.css';
import './Styles.css';
import { Button } from './Button';
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  function handleClickFunction() {
    history.push("/login");
  }

  return (
    <div class="Div-inline">
      <div class="Div-inline">
      </div>
      <div class="Empty-space2" />
      <div class="Div-inline">
      <Button className='inputSearch' handleClick={handleClickFunction} name={"Login"} />
      </div>
    </div>
  );
}