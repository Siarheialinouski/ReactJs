import './Styles.css';
import React, { useState } from "react";
import { CoursesList } from './CoursesList';
import { Button } from './Button';
import { useHistory } from "react-router-dom";

export const CoursesPage = () => {

  const history = useHistory();

  function handleClickFunction() {
    history.push("/courses/add");
  }

  return (
    <>
      <div>
        <Button className='inputSearch' handleClick={handleClickFunction} name={"Add new course"} />
        <CoursesList />
      </div>
    </>
  );
}