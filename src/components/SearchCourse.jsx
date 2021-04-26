import React, { useState } from 'react';


export const SearchCourse = (props) => {

    const [inputValue, setValue] = useState("");
    const [courseList, setCourseList] = useState(props && props.courseList)

    const mapper = {};
    courseList.forEach(element => {
      mapper[element.title] = element;
    });

    const searchList = (searchValue) => {
        setCourseList([mapper[searchValue]]);
        {props.setSearchList(courseList)}
      }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)} />
            <div class="emptySpaceLittle"></div>
            <button className='inputSearch' onClick={() => inputValue && searchList(inputValue)}>
                Search
            </button>           
            <div class="emptySpace"></div>
        </div>
    );
}