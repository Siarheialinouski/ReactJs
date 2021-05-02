import './Styles.css';
import React, { useState } from "react";
import { SearchCourse } from './SearchCourse';
import { CoursesList } from './CoursesList';
import { Button } from './Button';

export const CoursesPage = (props) => {

  function handleClickFunction() {
    props.toggleEditMode(true)
  }

  return (
    <>
      <div>
        <SearchCourse courseList={props.courseList} setSearchList={props.setCourseList} />
        <Button className='inputSearch' handleClick={handleClickFunction} name={"Add new course"} />
        <CoursesList authorsList={props.authorsList} courseList={props.courseList} selectedCourse={props.selectedCourse}
          toggleEditMode={props.toggleEditMode} toggleShowMode={props.toggleShowMode} />
      </div>
    </>
  );
}