import './Styles.css';
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toHoursAndMinutes } from './utils/toHoursAndMinutes';
import { formatDuration } from './helpers/formatDuration';
import { Button } from './Button';
import { InputField } from './InputField';

export const CourseForm = (props) => {

    //Validation block
    const [isValidTittle, setValidationTittle] = useState();
    const [isValidDescription, setValidationDescription] = useState();
    const [isValidDuration, setValidationDuration] = useState();

    //Fields
    const [title, setTitle] = useState(props.selectedCourse && props.selectedCourse.title);
    const [description, setDescription] = useState(props.selectedCourse && props.selectedCourse.description);
    const [duration, setDuration] = useState(props.selectedCourse && props.selectedCourse.duration);


    const [courseAutorList, setCourseAutorList] = useState(props.selectedCourse ? props.selectedCourse.authors : []);
    const [courseAutorListIds, setCourseAutorListIds] = useState();

    const [authorlist, setauthorList] = useState(props.authors);

    function setTitleWithValidation(value) {
        setTitle(value);
        if (value) {
            setValidationTittle(true);
        }
        else {
            setValidationTittle(false);
        }
    }

    function setDescriptionWithValidation(value) {
        setDescription(value);
        if (value) {
            setValidationDescription(true);
        }
        else {
            setValidationDescription(false);
        }
    }

    function setDurationWithValidation(value) {
        setDuration(value);
        if (value) {
            setValidationDuration(true);
        }
        else {
            setValidationDuration(false);
        }
    }

    function updateCourse() {
        props.toggleEditMode(false)
        !props.selectedCourse && props.addCourseToList({ title, description, duration, courseAutorListIds })
        props.selectedCourse && props.updateSelectedCourse({ title, description, duration, courseAutorListIds })
        props.setSelectedCourse(null);
        setauthorList(props.authors);
    }

    const deleteFromCourseAuthorsList = (id) => {

        let currentAuthor = id && courseAutorList[courseAutorList.findIndex(x => x.id === id)];
        if (id) {
            courseAutorList.forEach(function (el, i) {
                if (el.id == id) courseAutorList.splice(i, 1)
            })
        }

        setCourseAutorList(courseAutorList);
        getAuthorsIds(courseAutorList);

        const newAuthorsList = authorlist.concat(
            {
                id: uuidv4(),
                name: currentAuthor.name
            }
        );

        setauthorList(newAuthorsList);
    }

    const moveToCourseAuthorsList = (id) => {

        let currentAuthor = id && authorlist[authorlist.findIndex(x => x.id === id)];
        if (id) {
            authorlist.forEach(function (el, i) {
                if (el.id == id) authorlist.splice(i, 1)
            })
        }

        setauthorList(authorlist);

        const newCourseAutorList = courseAutorList.concat(
            {
                id: currentAuthor.id,
                name: currentAuthor.name
            }
        );

        setCourseAutorList(newCourseAutorList);
        getAuthorsIds(newCourseAutorList);
    }

    const getAuthorsIds = (authors) => {
        var ids = authors.map((d) => d.id
        );
        setCourseAutorListIds(ids)
    }

    const autorListView = authorlist.map((d) =>
        <div>
            <div class="Div-inline">
                <h6> {d.name}</h6>
            </div>
            <div class="emptySpaceLittle"></div>
            <div class="Div-inline">
                <button className='inputSearch' onClick={() => moveToCourseAuthorsList(d.id)}>
                    Add to course
                </button>
            </div>
        </div>
    );

    const courseAutorListView = courseAutorList && courseAutorList.map((d) =>

        <div>
            <div class="Div-inline">
                <h6> {d.name}</h6>
            </div>
            <div class="emptySpaceLittle"></div>
            <div class="Div-inline">
                <button className='inputSearch' onClick={() => deleteFromCourseAuthorsList(d.id)}>
                    Delete
                </button>
            </div>
        </div>
    );

    const handleTitleChange = (e) => {
        setTitleWithValidation(e)
    };

    const handleDurationChange = (e) => {
        setDurationWithValidation(e)
    };

    return (
        <>
            <div>
                <div>
                    <div class="Div-inline">{!isValidTittle ? <h6 >*Title_ </h6> : <h6 >Title_ </h6>}</div>
                    <div class="emptySpaceLittle"></div>
                    <InputField
                        type="text"
                        value={title && title}
                        onChange={handleTitleChange}
                    />

                    <div class="emptySpace"></div>
                </div>
                <div>
                    <div class="Div-inline">{!isValidDescription ? <h6 >*Description_ </h6> : <h6 >Description_ </h6>}</div>
                    <div class="emptySpaceLittle"></div>
                    <textarea value={description} onChange={(e) => setDescriptionWithValidation(e.target.value)} />
                    <div class="emptySpace"></div>
                </div>
                <div>
                    <div class="emptySpace"></div>
                    {autorListView}
                    <div> <p>Course Autors : </p>
                        {courseAutorListView}
                    </div>
                </div>
                <div class="Div-inline">
                    <div class="Div-inline">{!isValidDuration ? <h6 >*Duration_ </h6> : <h6> Duration_ </h6>}</div>
                    <InputField
                        type="text"
                        value={duration && duration}
                        onChange={handleDurationChange}
                    />

                    <div class="emptySpaceLittle"></div>
                    <div class="Div-inline"> {isValidDuration && formatDuration(toHoursAndMinutes(duration))}</div>
                </div>
                <div>
                    <Button className='inputSearch' handleClick={updateCourse} name={!props.selectedCourse ? "Create course" : "Edit course"} />
                    <div> {(!isValidTittle || !isValidDescription || !isValidDuration) && "Please fill in all required fields (*)"}</div>
                </div>
                <div class="emptySpace"></div>
            </div>
        </>
    );
}