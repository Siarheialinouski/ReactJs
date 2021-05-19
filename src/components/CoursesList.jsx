import './Styles.css';
import React, { useState, useEffect } from "react";
import { Card } from './Card';
import { getAll as getAllAuthors } from "../app_backend_api/authorApi";
import { getAllCourses } from "../app_backend_api/courseApi";
import { useDispatch, useSelector } from "react-redux";
import { loginMe } from "../app_backend_api/authApi";
import { useHistory } from "react-router-dom";
import { getCourses } from "../store/courses/selectors";
import { getAuthors } from "../store/authors/selectors";
import { SearchCourse } from "../components/SearchCourse"
import { loginSuccess } from "../store/user/actionCreators";
import { getCoursesSuccess, getCourseSearch } from "../store/courses/actionCreators";
import { getAllAuthorsSuccess } from "../store/authors/actionCreators";

export const CoursesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();


  const courses = useSelector(getCourses);
  console.log("courses", courses);
  const authors = useSelector(getAuthors);

  const handleSearch = (search) => {    
    const searchResult = courses.filter(
      (course) =>
      course.id.toLowerCase().includes(search.toLowerCase()) || course.title.toLowerCase().includes(search.toLowerCase()) 
    );
    
    dispatch(getCourseSearch(searchResult));
  };

  useEffect(() => {
    const token = localStorage.getItem("Bearer");
    if (token) {
      loginMe()
        .then((resp) => {
          dispatch(
            loginSuccess({
              name: resp.data.result.name,
              email: resp.data.result.email,
              token,
              role: resp.data.result.role,
            })
          );
        })
        .catch((err) => console.log(err));
    } else {
      history.push("/login");
    }
  }, [history, dispatch]);

  useEffect(() => {
    let isSubscribed = true;

    getAllCourses()
      .then((resp) => {
        if (isSubscribed) {
          dispatch(getCoursesSuccess(resp.data.result));
        }
      })
      .catch((err) => console.log(err));

    getAllAuthors()
      .then((resp) => {
        if (isSubscribed) {
          dispatch(getAllAuthorsSuccess(resp.data.result));
        }
      })
      .catch((err) => console.log(err));

    return () => (isSubscribed = false);
  }, [dispatch]);

  const ShowCourse = (courses) =>{
    return courses.map((course) => (
      <Card course={course} authors={authors} />
    ))
  }

  return (
    <>
      <div>
        <SearchCourse searchHandler={handleSearch} />
           </div>
      <div>        
        {courses && courses.length ? ShowCourse(courses) : <p>No data. Feel free to add a new course</p>}
      </div>
    </>
  );
}