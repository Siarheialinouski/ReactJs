import {Logo} from './Logo';
import {Login} from './Login';
import './Styles.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

export const Header = (props) => {
  return (
      <>
        <div className="App-header">
            <Logo/>
            <Link to='/'>Courses</Link>
            <div class="emptySpace"></div>
            <Login setEmail={props.setEmail}/>
        </div>
    </>
  );
}