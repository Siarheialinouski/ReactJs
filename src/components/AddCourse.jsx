import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InputField } from "./InputField"
import { Button } from './Button';
import { toHoursAndMinutes } from './utils/toHoursAndMinutes';
import { formatDuration } from './helpers/formatDuration';
import { getAll as getAllAuthors } from "../app_backend_api/authorController";
import { addAuthor } from "../app_backend_api/authorController";
import { addCourse } from "../app_backend_api/courseController";

export const AddCourse = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAllAuthors().then((resp) => {
      setAuthors(resp.data.result);
    });
  }, []);

  const submitHandler = () => {
    const newCourse = {
      title,
      description,
      duration: Number(duration),
      authors: courseAuthors.map((author) => author.id),
    };

    addCourse(newCourse)
      .then((resp) => {
        history.push("/courses");
      })
      .catch((err) => console.log(err.toJSON()));
  };

  const addAuthorToCourse = (author) => {
    const isAuthorExist = courseAuthors.some((el) => el.name === author.name);
    if (isAuthorExist) return;
    setCourseAuthors([...courseAuthors, author]);

  };

  const deleteCourseAuthor = (id) => {
    const filteredCourseAuthors = courseAuthors.filter(
      (author) => author.id !== id
    );

    setCourseAuthors([...filteredCourseAuthors]);
  };

  const handleTitleChange = (e) => {
    setTitle(e)
  };

  const handleDurationChange = (e) => {
    setDuration(e)
  };

  const handleNewAuthorNameChange = (e) => {
    setAuthorName(e)
  };

  const addNewAuthor = () => {
    if (!authorName) {
      return;
    }

    const newAuthor = {
      name: authorName
    };

    addAuthor(newAuthor)
      .then((resp) => {
        setAuthors([...authors, newAuthor]);
      })
      .catch((err) => console.log(err.toJSON()));

    setAuthorName("");
  };

  const autorListView = authors && authors.map((d) =>
    <div>
      <div class="Div-inline">
        <h6> {d.name}</h6>
      </div>
      <div class="emptySpaceLittle"></div>
      <div class="Div-inline">
        <Button
          className='inputSearch'
          name=" Add to course"
          handleClick={() => addAuthorToCourse(d)}
        />

      </div>
    </div>
  );

  const courseAutorListView = courseAuthors && courseAuthors.map((d) =>

    <div>
      <div class="Div-inline">
        <h6> {d.name}</h6>
      </div>
      <div class="emptySpaceLittle"></div>
      <div class="Div-inline">
        <Button
          className='inputSearch'
          name="Delete"
          handleClick={() => deleteCourseAuthor(d.id)}
        />

      </div>
    </div>
  );

  return (
    <>
      <div>
        <div>
          <InputField
            type="text"
            onChange={handleNewAuthorNameChange}
            value={authorName && authorName}
          />
          <Button className='inputSearch' name="Create author" handleClick={addNewAuthor} />
        </div>
        <div>
          <div class="Div-inline">{<h6 >Title </h6>}</div>
          <div class="emptySpaceLittle"></div>
          <InputField
            type="text"
            value={title && title}
            onChange={handleTitleChange}
          />

          <div class="emptySpace"></div>
        </div>
        <div>
          <div class="Div-inline">{<h6 >Description</h6>}</div>
          <div class="emptySpaceLittle"></div>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <div class="emptySpace"></div>
        </div>
        <div>
          <div class="emptySpace"></div>
          {autorListView}
          <div> <p>Course Authors : </p>
            {courseAutorListView}
          </div>
        </div>
        <div class="Div-inline">
          <div class="Div-inline">{<h6> Duration </h6>}</div>
          <InputField
            type="text"
            value={duration && duration}
            onChange={handleDurationChange}
          />
          <div class="emptySpaceLittle"></div>
          <div class="Div-inline"> {formatDuration(toHoursAndMinutes(duration))}</div>
        </div>
        <div>
          <Button
            className='inputSearch'
            name="Create course"
            handleClick={() =>
              submitHandler({
                title,
                description,
                duration,
                courseAutors: courseAuthors,
              })
            }
          />
        </div>
        <div class="emptySpace"></div>
      </div>
    </>
  )
};
