import './App.css';
import { Header } from './components/Header';
import { EditCoursePage } from './components/EditCoursePage';
import { ViewCourse } from './components/ViewCourse';
import { CoursesPage } from './components/CoursesPage';
import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { mockedCourseList } from './mock/mockedCourseList';
import { mockedAuthorsList } from './mock/mockedAuthorsList';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from './components/DateTime';


function App() {
  const [isEditMode, toggleEditMode] = useState(false);
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
  const [courseList, setCourseList] = useState(mockedCourseList);
  const [selectedCourse, setSelectedCourse] = useState();
  const [isShowMode, toggleShowMode] = useState(false);

  const [email, setEmail] = useState("");

  const addCourseToList = (course) => {
    const newCourse =
    {
      id: uuidv4(),
      title: course.title,
      description: course.description,
      duration: course.duration,
      authors: course.courseAutorListIds,
      creationDate: <DateTime/> 
    };
    mockedCourseList.push(newCourse);
    setCourseList([...mockedCourseList]);

  }

  const updateCourseInList = (course) => {
    let newCourse = course && courseList[courseList.findIndex(x => x.id === selectedCourse.id)];

    courseList.forEach(function (el, i) {
      if (el.id == selectedCourse.id) courseList.splice(i, 1)
    })
    setCourseList(courseList);
    const newCourseList = courseList.concat(
      {
        id: uuidv4(),
        title: course.title,
        description: course.description,
        duration: course.duration,
        authors: course.courseAutorListIds,
      }
    );
    setCourseList(newCourseList);

  }

  const addAuthorToList = (author) => {
    const newAuthor =
    {
      id: author.id,
      name: author.name
    };
   
    mockedAuthorsList.push(newAuthor);
    setAuthorsList([...mockedAuthorsList]);
  }

  const getCourseById = (id) => {
    let course = id && courseList[courseList.findIndex(x => x.id === id)];
    setSelectedCourse(course);
  }

  function MainPage() {
    return (
      !isEditMode ?
        (!isShowMode ? (<CoursesPage courseList={courseList}
          toggleEditMode={toggleEditMode}
          toggleShowMode={toggleShowMode}
          selectedCourse={getCourseById}
          authorsList={mockedAuthorsList} />) : (
          <ViewCourse toggleShowMode={toggleShowMode}
            selectedCourse={selectedCourse}
            authorsList={authorsList} />
        )
        ) :
        (<EditCoursePage authors={authorsList}
          toggleEditMode={toggleEditMode}
          addCourseToList={addCourseToList}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          updateSelectedCourse={updateCourseInList}
          setAuthorsList={setAuthorsList}
          addAuthorToList={addAuthorToList} />
        ));
  }

  return (
    <div id="App" className="App">
      <Header setEmail={setEmail} />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegistrationPage} />
      </Switch>
    </div>
  );
}


export default App;