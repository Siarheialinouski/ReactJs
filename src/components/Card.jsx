import './Styles.css';
import { Button } from './Button';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../store/courses/thunk";
import { userRole } from "../store/user/selectors";

export const Card = ({ course, authors }) => {
  const adminRole = "admin";
  const history = useHistory();
  const dispatch = useDispatch();
  const role = useSelector(userRole);

  function handleClickToggleShowMode() {
    history.push(`/courses/${course.id}`)
  }

  function handleClickDeleteCourse() {
    dispatch(deleteCourse(course.id));
  }

  function handleClickEditCourse() {
    history.push(`/courses/update/${course.id}`)
  }

  return (
    <>
      <div>
        <p>  Tittle: {course.title}</p>
        <p>  Description: {course.description}</p>
        <p>  Duration: {course.duration}</p>
        <p>  Created: {course.creationDate}</p>
        <div data-testid="authorList">
          <p>  Authors: {course.authors && course.authors.map((id) =>
            authors.reduce((acc, author) => {
              if (author.id === id) {
                return acc + ` [${author.name}]`;
              }
              return acc;
            }, " ")
          )}
          </p>
        </div>
        <Button className='inputSearch' handleClick={handleClickToggleShowMode} name={"View course"} />
        {role === adminRole && <Button className='inputSearch' handleClick={handleClickEditCourse} name={"Edit course"} />}
        {role === adminRole && <Button className='inputSearch' handleClick={handleClickDeleteCourse} name={"Delete course"} />}
      </div>
    </>
  );
}