import React from 'react';
import './Input.css';
import './Styles.css';
import { Button } from './Button';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userEmail } from "../store/user/selectors";
import { logoutSuccess } from "../store/user/actionCreators";

export const Login = () => {
  const history = useHistory();
  const email = useSelector(userEmail);
  const dispatch = useDispatch();

  function handleClickLogout() {
    history.push("/login");
    localStorage.removeItem("Bearer");
    dispatch(logoutSuccess());
  };


  function handleClickFunction() {
    history.push("/login");
  }

  return (
    <div class="Div-inline">
      <div class="Div-inline">
        <p>{email}</p>
      </div>
      <div class="Empty-space2" />

      <div class="Div-inline">
        {!email ? <Button className='inputSearch' handleClick={handleClickFunction} name={"Login"} /> 
        : <Button className='inputSearch' handleClick={handleClickLogout} name={"Logout"} />}
      </div>
    </div>
  );
}