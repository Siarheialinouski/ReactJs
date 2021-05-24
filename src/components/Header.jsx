import { Logo } from './Logo';
import { Login } from './Login';
import './Styles.css';
import React from 'react';

export const Header = () => {
  return (
    <>
      <div className="App-header">
        <Logo />       
        <div class="emptySpace"></div>
        <Login />
      </div>
    </>
  );
}