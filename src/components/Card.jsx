import './Styles.css';
import { Button } from './Button';
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteCourse } from "../store/courses/actionCreators";
import { deleteCourse as deleteThisCourse } from "../app_backend_api/courseApi";

export const Card = ({ course, authors }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  function handleClickToggleShowMode() {
    history.push(`/courses/${course.id}`)
  }

  function handleClickDeleteCourse() {
    dispatch(deleteCourse(course.id))
  }

  function handleClickDeleteCourse2() { //the api for deletion does not work, I do not know why
    deleteThisCourse(course.id)
      .then(() => {
        history.push("/courses");
        dispatch(deleteCourse(course.id))
      });
  }

  return (
    <>
      <div>
        <p>  Tittle: {course.title}</p>
        <p>  Description: {course.description}</p>
        <p>  Duration: {course.duration}</p>
        <p>  Created: {course.creationDate}</p>
        <p>  Authors: {course.authors && course.authors.map((id) =>
          authors.reduce((acc, author) => {
            if (author.id === id) {
              return acc + ` [${author.name}]`;
            }
            return acc;
          }, " ")
        )}
        </p>
        <p>  -------------------</p>
        <Button className='inputSearch' handleClick={handleClickToggleShowMode} name={"View course"} />
        <Button className='inputSearch' handleClick={handleClickDeleteCourse2} name={"Delete course"} />
      </div>
    </>
  );
}