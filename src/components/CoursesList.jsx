import './Styles.css';
import React, { useState ,useMemo} from "react";
import { Card } from './Card';

export const CoursesList = (props) => {

    const mapper = useMemo(() => { return props.authorsList.reduce((acc, author) => { return { ...acc, [author.id]: author.name }; }, {}); }, [props.authorsList]);

    const coursesList = props.courseList.length > 0 ? (props.courseList.map((course) =>
        <Card course={course} mapper={mapper} selectedCourse={props.selectedCourse}
            toggleEditMode={props.toggleEditMode} toggleShowMode={props.toggleShowMode} authorsList={props.authorsList} />
    )) : <p>No data. Feel free to add a new course</p>

    return (
        <>
            <div>
                <div>{coursesList}</div>
            </div>
        </>
    );
}