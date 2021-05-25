import React, { useState } from 'react';
import { Button } from './Button';
import { InputField } from './InputField';
import PropTypes from "prop-types";

export const SearchCourse = ({ searchHandler }) => {

    const [inputValue, setValue] = useState("");

    function handleClickFunction() {
        searchHandler(inputValue);
    }

    const handleChange = (e) => {
        setValue(e)
    };

    return (
        <div className="Div-inline">
            <div className="Div-inline">
                <InputField
                    type="text"
                    value={inputValue}
                    label="Search"
                    onChange={handleChange}
                />
            </div>

            <div className="Div-inline">
                <Button className='inputSearch' handleClick={handleClickFunction} name={"Search"} /></div>
            <div className="emptySpace"></div>
        </div>
    );
}

SearchCourse.propTypes = {
    searchHandler: PropTypes.func.isRequired,
};