import './App.css';
import { Header } from './components/Header';
import { ViewCoursePage } from './components/ViewCoursePage';
import { CoursesPage } from './components/CoursesPage';
import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { AddCourse } from './components/AddCourse'

function App() {
  return (
    <div id="App" className="App">
     
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/"
            render={() => {
              const token = localStorage.getItem("Bearer");
              return token ? <Redirect to="/courses" /> : <Redirect to="/login" />;
            }}
          />
       
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route exact path="/courses/add" component={AddCourse} />
          <Route exact path="/courses/:id" component={ViewCoursePage} />
          <Route path={['/', '/courses']} component={CoursesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;