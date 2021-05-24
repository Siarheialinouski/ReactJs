import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { InputField } from "./InputField"
import { Button } from './Button';
import { toHoursAndMinutes } from './utils/toHoursAndMinutes';
import { formatDuration } from './helpers/formatDuration';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { getCourse, createCourse, updateCourse } from "../store/courses/thunk";
import { getAuthors as getAllAuthors } from "../store/authors/selectors";
import { addAuthor } from "../store/authors/actionCreators";

export const EditCourse = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [courseAuthors, setCourseAuthors] = useState([]);

  const dispatch = useDispatch();

  const allAuthors = useSelector(getAllAuthors);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      getCourse(id)
        .then((resp) => {
          const { authors, description, title, duration } = resp.data.result;
          setTitle(title);
          setDescription(description);
          setDuration(duration);

          setCourseAuthors(
            authors.map((authorId) =>
              allAuthors.find((author) => author.id === authorId)
            )
          );
        })
        .catch((err) => console.log(err));
    }
  }, [allAuthors, id]);

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

  const addAuthorToList = () => {
    if (!authorName) {
      return;
    }

    const newAuthor = {
      id: uuidv4(),
      name: authorName
    };

    dispatch(addAuthor(newAuthor));
    setAuthorName("");

  };

  const submitHandler = () => {
    const createOrUpdateCourse = {
      title,
      description,
      duration: Number(duration),
      authors: courseAuthors.map((author) => author.id),
    };

    dispatch(id ? updateCourse({ id, ...createOrUpdateCourse }) : createCourse(createOrUpdateCourse));
    history.push("/courses");
  };


  const autorListView = allAuthors.map((autor) =>
    <div>
      <div class="Div-inline">
        <h6> {autor.name}</h6>
      </div>
      <div class="emptySpaceLittle"></div>
      <div class="Div-inline">
        <Button
          className='inputSearch'
          name=" Add to course"
          handleClick={() => addAuthorToCourse(autor)}
        />
      </div>
    </div>
  );

  const courseAutorListView = courseAuthors && courseAuthors.map((autor) =>

    <div>
      <div class="Div-inline">
        <h6> {autor.name}</h6>
      </div>
      <div class="emptySpaceLittle"></div>
      <div class="Div-inline">
        <Button
          className='inputSearch'
          name="Delete"
          handleClick={() => deleteCourseAuthor(autor.id)}
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
            onChange={setAuthorName}
            value={authorName}
          />
          <Button className='inputSearch' name="Create author" handleClick={addAuthorToList} />
        </div>
        <div>
          <div class="Div-inline">{<h6 >Title </h6>}</div>
          <div class="emptySpaceLittle"></div>
          <InputField
            type="text"
            value={title}
            onChange={setTitle}
          />

          <div class="emptySpace"></div>
        </div>
        <div>
          <div class="Div-inline"><h6 >Description</h6></div>
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
            value={duration}
            onChange={setDuration}
          />
          <div class="emptySpaceLittle"></div>
          <div class="Div-inline"> {formatDuration(toHoursAndMinutes(duration))}</div>
        </div>
        <div>
          <Button
            className='inputSearch'
            name={id ? "Update course" : "Create course"}
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
