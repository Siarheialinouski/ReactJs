import './Styles.css';
import React, { useState } from "react";

export const ViewCourse = (props) => {

    const [authorsList, setList] = useState(props.authorsList);
    const [title, setTitle] = useState(props.selectedCourse && props.selectedCourse.title);
    const [description, setDescription] = useState(props.selectedCourse && props.selectedCourse.description);
    const [duration, setDuration] = useState(props.selectedCourse && props.selectedCourse.duration);
    const [autors, setAutors] = useState(props.selectedCourse && props.selectedCourse.authors);

    const mapper = {};
    authorsList.forEach(element => {
      mapper[element.id] = element.name;
    });

    return (
        <>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Duration: {duration}</p>
        <p>  Authors: {autors.map((id) =>
            <div>
            {mapper[id]}
            </div>)}
        </p>
            <button className='inputSearch' onClick={() => { props.toggleShowMode(false); }}> Back to list </button>
        </>
    );
}