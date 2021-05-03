import './Styles.css';
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourse } from "../../src/app_backend_api/courseController";
import { getAll as getAllAuthors } from "../app_backend_api/authorController";

export const ViewCourse = () => {

    const [authorList, setAuthors] = useState([]);

    useEffect(() => {
        getAllAuthors().then((resp) => {
            setAuthors(resp.data.result);
        });
    }, []);

    const [
        { title, description, duration, creationDate, authors },
        setCourse,
    ] = useState({});
    const params = useParams();

    const mapper = useMemo(() => { return authorList.reduce((acc, author) => { return { ...acc, [author.id]: author.name }; }, {}); }, [authorList]);

    useEffect(() => {
        getCourse(params.id).then((resp) => {
            setCourse(resp.data.result);
        });
    }, [params]);


    return (
        <>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Duration: {duration}</p>
            <p>Time: {creationDate}</p>
            <p>  Authors: {authors ? authors.map((id) =>
                <div>
                    {mapper[id]}
                </div>) : ""}
            </p>
            <Link to="/courses">
                <p>Back to courses</p>
            </Link>
        </>
    );
}