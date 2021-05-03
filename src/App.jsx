import './App.css';
import { Header } from './components/Header';
import { ViewCourse } from './components/ViewCourse';
import { CoursesPage } from './components/CoursesPage';
import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { AddCourse } from './components/AddCourse'

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <Switch>
        <Route exact path="/"
          render={() => {
            const token = localStorage.getItem("Bearer");
            return token ? <Redirect to="/courses" /> : <Redirect to="/login" />;
          }}
        />
        <Route exact path='/' component={CoursesPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegistrationPage} />
        <Route exact path="/courses/add" component={AddCourse} />
        <Route exact path="/courses/:id" component={ViewCourse} />
      </Switch>
    </div>
  );
}


export default App;