import './Styles.css';
import React from "react";
import { CoursesList } from './CoursesList';
import { Button } from './Button';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRole } from "../store/user/selectors";

export const CoursesPage = () => {

  const history = useHistory();
  const role = useSelector(userRole);

  function handleClickFunction() {
    history.push("/courses/add");
  }

  return (
    <>
      <div>
        {role === "admin" && <Button className='inputSearch' handleClick={handleClickFunction} name={"Add new course"} />}
        <CoursesList />
      </div>
    </>
  );
}