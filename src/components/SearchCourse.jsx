import React, { useState } from 'react';
import { Button } from './Button';
import { InputField } from './InputField';

export const SearchCourse = (props) => {

    const [inputValue, setValue] = useState("");

    const mapper = {};
    props.courseList.forEach(element => {
        mapper[element.title] = element;
    });

    const searchList = (searchValue) => {
        props.setCourseList([mapper[searchValue]]);
        { props.setSearchList(props.courseList) }
    }

    function handleClickFunction() {
        inputValue && searchList(inputValue)
    }

    const handleChange = (e) => {
        setValue(e)
    };

    return (
        <div class="Div-inline">
            <div class="Div-inline">
                <InputField
                    type="text"
                    value={inputValue && inputValue}
                    label="Search"
                    onChange={handleChange}
                />
            </div>

            <div class="Div-inline">
                <Button className='inputSearch' handleClick={handleClickFunction} name={"Search"} /></div>
            <div class="emptySpace"></div>
        </div>

    );
}