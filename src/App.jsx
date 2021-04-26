import './App.css';
import { Header } from './components/Header';
import { EditCoursePage } from './components/EditCoursePage';
import { ViewCourse } from './components/ViewCourse';
import { CourseList } from './components/CourseList';
import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';

function App() {

  let mockedCourseList = [
    {
      id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
      title: 'JavaScript',
      description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since
   the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make
   a type specimen book. It has survived 
    not only five centuries, but also the leap into
   electronic typesetting, remaining essentially u
    nchanged.`,
      creationDate: '8/3/2021',
      duration: 160,
      authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812b-ebde22838167'],
    },
    {
      id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
      title: 'Angular',
      description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since
   the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make
   a type specimen book.`,
      creationDate: '10/11/2020',
      duration: 210,
      authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f', '095a1817-d45b-4ed7-9cf7-b2417bcbf748'],
    },
  ];


  let mockedAuthorsList = [
    {
      id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
      name: 'Vasiliy Dobkin'
    },
    {
      id: 'f762978b-61eb-4096-812b-ebde22838167',
      name: 'Nicolas Kim'
    },
    {
      id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
      name: 'Anna Sidorenko'
    },
    {
      id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
      name: 'Valentina Larina'
    }];

  const [isEditMode, toggleEditMode] = useState(false);
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
  const [courseList, setCourseList] = useState(mockedCourseList);
  const [selectedCourse, setSelectedCourse] = useState();
  const [isShowMode, toggleShowMode] = useState(false);


  const [email, setEmail] = useState("Welcome");

  




  function newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const addCourseToList = (course) => {
    const newCourseList = courseList.concat(
      {
        id: newGuid(),
        title: course.title,
        description: course.description,
        duration: course.duration,
        authors: course.courseAutorList,
      }
    );
    setCourseList(newCourseList);
  }

  const updateCourseInList = (course) => {
    let newCourse = course && courseList[courseList.findIndex(x => x.id === selectedCourse.id)];

    courseList.forEach(function (el, i) {
      if (el.id == selectedCourse.id) courseList.splice(i, 1)
    })
    setCourseList(courseList);
    const newCourseList = courseList.concat(
      {
        id: newGuid(),
        title: course.title,
        description: course.description,
        duration: course.duration,
        authors: course.courseAutorList,
      }
    );
    setCourseList(newCourseList);

  }

  const getCourseById = (id) => {
    let course = id && courseList[courseList.findIndex(x => x.id === id)];
    setSelectedCourse(course);
  }



  function MainPage() {
   return (
     !isEditMode ?
      ( !isShowMode ? (<CourseList courseList={courseList}
       toggleEditMode={toggleEditMode}
       toggleShowMode={toggleShowMode}
       selectedCourse={getCourseById}
       authorsList={authorsList} />) :(
         <ViewCourse  toggleShowMode={toggleShowMode} 
         selectedCourse={selectedCourse}
         authorsList={authorsList} />
       )
     ) : 
     (<EditCoursePage authors={authorsList}
         toggleEditMode={toggleEditMode}
         setCourseList={addCourseToList}
         selectedCourse={selectedCourse}
         setSelectedCourse={setSelectedCourse}
         updateSelectedCourse={updateCourseInList} />
     ));
  }



  return (
    <div id="App" className="App">
      <Header setEmail={setEmail} />
      <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/login'  component={LoginPage}/>
      <Route path='/register'  component={RegistrationPage}/>
    </Switch>
    </div>
  );
}


export default App;