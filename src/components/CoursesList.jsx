import './Styles.css';
import React, { useEffect } from "react";
import { Card } from './Card';
import { useHistory } from "react-router-dom";
import { getCourses } from "../store/courses/selectors";
import { getAuthors } from "../store/authors/selectors";
import { loginSuccess } from "../store/user/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { loginMe } from "../app_backend_api/authApi";
import { getAll as getAllAuthors } from "../store/authors/thunk";
import { getAllCourses } from "../store/courses/thunk";

export const CoursesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const courses = useSelector(getCourses);
  const authors = useSelector(getAuthors);

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

    if (isSubscribed) {
      dispatch(getAllAuthors());
      dispatch(getAllCourses());
    }

    return () => (isSubscribed = false);
  }, [dispatch]);

  const showCourse = (courses) => {
    if(!courses){
      return [];
    }
    return courses.map((course) => (
      <Card course={course} authors={authors} />
    ))
  }

  return (
    <div data-testid="courseList" >
      {showCourse(courses)}
    </div>
  );
}