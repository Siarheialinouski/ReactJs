import './App.css';
import { Header } from './components/Header';
import { ViewCoursePage } from './components/ViewCoursePage';
import { CoursesPage } from './components/CoursesPage';
import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { EditCourse } from './components/EditCourse'
import { PrivateRoute } from "./components/PrivateRoute";
import { NotFound } from "./components/NotFound"

function App() {
  return (
    <div id="App" className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <PrivateRoute exact path="/"
            render={() => {
              const token = localStorage.getItem("Bearer");
              return token ? <Redirect to="/courses" /> : <Redirect to="/login" />;
            }}
          />
       
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
          <PrivateRoute exact path="/courses/add" component={EditCourse} />
          <PrivateRoute exact path="/courses/update/:id" component={EditCourse} />
          <Route exact path="/courses/:id" component={ViewCoursePage} />
          <Route path={'/courses'} component={CoursesPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;