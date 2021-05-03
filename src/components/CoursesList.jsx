import './Styles.css';
import React, { useState, useEffect, useMemo } from "react";
import { Card } from './Card';
import { getAll as getAllAuthors } from "../app_backend_api/authorController";
import { getAllCourses } from "../app_backend_api/courseController";

export const CoursesList = () => {

    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAllCourses()
            .then((resp) => {
                setCourses(resp.data.result);
            })
            .catch((error) => console.log(error));

        getAllAuthors()
            .then((resp) => {
                setAuthors(resp.data.result);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div>
                {courses.length ? courses.map((course) => (
                    <Card course={course} authors={authors} />
                )) : <p>No data. Feel free to add a new course</p>}
            </div>
        </>
    );
}