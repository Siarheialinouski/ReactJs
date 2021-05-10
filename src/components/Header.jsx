import {Logo} from './Logo';
import {Login} from './Login';
import './Styles.css';
import { Link } from 'react-router-dom'
import React from 'react';

export const Header = () => {
  return (
      <>
        <div className="App-header">
            <Logo/>
            <Link to='/courses'>Courses</Link>
            <div class="emptySpace"></div>
            <Login/>
        </div>
    </>
  );
}