import './Styles.css';
import React, { useState } from "react";
import { SearchCourse } from './SearchCourse';

export const CourseList = (props) => {

  const [courseList, setCourseList] = useState(props.courseList);
  const [authorsList, setList] = useState(props.authorsList);

  const mapper = {};
  authorsList.forEach(element => {
    mapper[element.id] = element.name;
  });


  const coursesList = courseList.map((course) =>
    <div>
      <p>  Tittle: {course.title}</p>
      <p>  Description: {course.description}</p>
      <p>  Duration: {course.duration}</p>
      <p>  Authors: </p>
      <p>  Created: {course.date}</p>
      <p>  Authors: {course.authors.map((id) =>
        <div>
          {mapper[id]}
        </div>)} </p>
      <p>  -------------------</p>
      <button onClick={() => { props.selectedCourse(course.id); props.toggleEditMode(true); }}> Edit course</button>
      <button onClick={() => { props.selectedCourse(course.id); props.toggleShowMode(true); }}> View course</button>
    </div>
  );

  return (
    <>
      <div>
        <SearchCourse courseList={courseList} setSearchList={setCourseList} />
        <button onClick={() => props.toggleEditMode(true)}> Add new course</button>
        <div>{coursesList}</div>
      </div>
    </>
  );
}