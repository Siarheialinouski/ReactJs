
import './Styles.css';
import React, { useState } from "react";
import { AddAuthor } from './AddAuthor';
import { CourseForm } from './CourseForm';

export const EditCoursePage = (props) => {

    const [autors, setAutors] = useState();

    return (
        <>
            <AddAuthor authors={props.authors} setAutors={setAutors} autors={autors} setAuthorsList={props.setAuthorsList} addAuthorToList={props.addAuthorToList} />
            <CourseForm authors={props.authors}
                toggleEditMode={props.toggleEditMode}
                addCourseToList={props.addCourseToList}
                selectedCourse={props.selectedCourse}
                setSelectedCourse={props.setSelectedCourse}
                updateSelectedCourse={props.updateSelectedCourse}
                setAuthorsList={props.setAuthorsList}/>
        </>
    );
}