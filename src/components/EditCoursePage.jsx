
import './Styles.css';
import React, { useEffect, useState } from "react";

export const EditCoursePage = (props) => {


    let testCourseAuthor = [
        {
            id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
            name: 'test'
        }];

    //Validation block
    const [isValidTittle, setValidationTittle] = useState();
    const [isValidDescription, setValidationDescription] = useState();
    const [isValidDuration, setValidationDuration] = useState();

    //Fields
    const [title, setTitle] = useState(props.selectedCourse && props.selectedCourse.title);
    const [description, setDescription] = useState(props.selectedCourse && props.selectedCourse.description);
    const [duration, setDuration] = useState(props.selectedCourse && props.selectedCourse.duration);
    const [autors, setAutors] = useState();


    //DurationBlock
    const [hours, setHours] = useState();
    const [mins, setMins] = useState();

    const [authorsList, setAuthorsList] = useState(props.authors);


    const [courseAutorList, setCourseAutorList] = useState(props.selectedCourse ? props.selectedCourse.authors : testCourseAuthor);

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
        claculateDuration(value);
        if (value) {
            setValidationDuration(true);
        }
        else {
            setValidationDuration(false);
        }
    }

    function claculateDuration(value) {
        let hours = 0;
        let mins = 0;
        if (value) {
            hours = Math.floor(value / 60 >= 1 ? value / 60 : 0);
            setHours(hours);
            if (hours && hours >= 1) {
                mins = value - hours * 60;
            }
            else {
                mins = value;
            }
            setMins(mins)
        } setDuration(value);
    }

    function newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const addToAuthorsList = (name) => {
        const newAuthorsList = authorsList.concat(
            {
                id: newGuid(),
                name: name
            }
        );

        setAuthorsList(newAuthorsList);
    }

    const deleteFromCourseAuthorsList = (id) => {

        let currentAuthor = id && courseAutorList[courseAutorList.findIndex(x => x.id === id)];
        if (id) {
            courseAutorList.forEach(function (el, i) {
                if (el.id == id) courseAutorList.splice(i, 1)
            })
        }

        setCourseAutorList(courseAutorList);

        const newAuthorsList = authorsList.concat(
            {
                id: newGuid(),
                name: currentAuthor.name
            }
        );

        setAuthorsList(newAuthorsList);
    }

    const moveToCourseAuthorsList = (id) => {

        let currentAuthor = id && authorsList[authorsList.findIndex(x => x.id === id)];
        if (id) {
            authorsList.forEach(function (el, i) {
                if (el.id == id) authorsList.splice(i, 1)
            })
        }

        setAuthorsList(authorsList);

        const newCourseAutorList = courseAutorList.concat(
            {
                id: newGuid(),
                name: currentAuthor.name
            }
        );

        setCourseAutorList(newCourseAutorList);
    }

    const autorListView = authorsList.map((d) =>
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

    return (
        <>
            <div>
                <div>
                    <div class="Div-inline">{!isValidTittle ? <h6 >*Title_ </h6> : <h6 >Title_ </h6>}</div>
                    <div class="emptySpaceLittle"></div>
                    <input type="text" value={title} onChange={(e) => setTitleWithValidation(e.target.value)} />
                    <div class="emptySpace"></div>
                </div>
                <div>
                    <div class="Div-inline">{!isValidDescription ? <h6 >*Description_ </h6> : <h6 >Description_ </h6>}</div>
                    <div class="emptySpaceLittle"></div>
                    <textarea value={description} onChange={(e) => setDescriptionWithValidation(e.target.value)} />
                    <div class="emptySpace"></div>
                </div>
                <div>
                    <div class="Div-inline">
                        <div class="Div-inline"> <h6>Autors </h6></div>
                        <input type="text" value={autors} onChange={(e) => setAutors(e.target.value)} />
                        <div class="Div-inline">
                            <button className='inputSearch' onClick={() => addToAuthorsList(autors)}> Create Author</button>
                        </div>
                    </div>
                    <div class="emptySpace"></div>
                    {autorListView}
                    <div> <p>Course Autors : </p>
                        {courseAutorListView}
                    </div>
                </div>
                <div class="Div-inline">
                    <div class="Div-inline">{!isValidDuration ? <h6 >*Duration_ </h6> : <h6> Duration_ </h6>}</div>
                    <input type="text" value={duration} onChange={(e) => setDurationWithValidation(e.target.value)} />
                    <div class="emptySpaceLittle"></div>
                    <div class="Div-inline"> {isValidDuration && <h6>Duration: {hours} : {mins} hours </h6>} </div>
                </div>
                <div>
                    <button className='inputSearch' onClick={() => {
                        title && description && duration && console.log('object', { title, description, duration, courseAutorList });
                        props.toggleEditMode(false)
                        !props.selectedCourse && props.setCourseList({ title, description, duration, courseAutorList })
                        props.selectedCourse && props.updateSelectedCourse({ title, description, duration, courseAutorList })
                        props.setSelectedCourse(null);
                      
                    }}>
                        {!props.selectedCourse ? "Create course" : "Edit course"}
            </button>
                    <div> {(!isValidTittle || !isValidDescription || !isValidDuration) && "Please fill in all required fields (*)"}</div>
                </div>
                <div class="emptySpace"></div>
            </div>
        </>
    );
}