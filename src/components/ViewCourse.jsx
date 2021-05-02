import './Styles.css';
import React, { useMemo } from "react";
import { Button } from './Button';

export const ViewCourse = (props) => {
    const mapper = useMemo(() => { return props.authorsList.reduce((acc, author) => { return { ...acc, [author.id]: author.name }; }, {}); }, [props.authorsList]);

    function handleClickFunction() {
        props.toggleShowMode(false);
    }
    return (
        <>
            <p>Title: {props.selectedCourse.title}</p>
            <p>Description: {props.selectedCourse.description}</p>
            <p>Duration: {props.selectedCourse.duration}</p>
            <p>Time: {props.selectedCourse.creationDate}</p>
            <p>  Authors: {props.selectedCourse.authors.map((id) =>
                <div>
                    {mapper[id]}
                </div>)}
            </p>
            <Button className='inputSearch' handleClick={handleClickFunction} name={"Back to list"} />
        </>
    );
}