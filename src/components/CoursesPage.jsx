import './Styles.css';
import React from "react";
import { CoursesList } from './CoursesList';
import { Button } from './Button';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userRole } from "../store/user/selectors";
import { setCoursesSuccess } from "../store/courses/actionCreators";
import { SearchCourse } from "../components/SearchCourse"
import { getCourses } from "../store/courses/selectors";

export const CoursesPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const role = useSelector(userRole);
  const courses = useSelector(getCourses);

  function handleClickFunction() {
    history.push("/courses/add");
  }

  const handleSearch = (search) => {
    const searchResult = courses.filter(
      (course) =>
        course.id.toLowerCase().includes(search.toLowerCase()) || course.title.toLowerCase().includes(search.toLowerCase())
    );

    dispatch(setCoursesSuccess(searchResult));
  };

  return (
    <>
      <div>
        <SearchCourse searchHandler={handleSearch} />
      </div>
      <div>
        {role === "admin" && <Button className='inputSearch' handleClick={handleClickFunction} name={"Add new course"} />}
        <CoursesList />
      </div>
    </>
  );
}