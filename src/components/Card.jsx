import './Styles.css';
import { Button } from './Button';
import { useHistory } from 'react-router-dom'

export const Card = ({ course, authors }) => {

  const history = useHistory();

  function handleClickToggleShowMode() {
    history.push(`/courses/${course.id}`)
  }

  return (
    <>
      <div>
        <p>  Tittle: {course.title}</p>
        <p>  Description: {course.description}</p>
        <p>  Duration: {course.duration}</p>
        <p>  Created: {course.creationDate}</p>
        <p>  Authors: {course.authors.map((id) =>
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
      </div>
    </>
  );
}