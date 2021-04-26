import React, { useState } from 'react';


export const AddCourse = (props) => {

    const [value, setValue] = useState({ title: "Siarhei Alinouski", });

    return (
        <div>
            <button onClick={() => props.functionToAdd(value)}> Add Test course</button>
        </div>
    );
}