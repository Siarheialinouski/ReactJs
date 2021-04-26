import './Styles.css';
import { Button } from './Button';

export const Card = (props) => {

  function handleClickToggleEditMode() {
    props.selectedCourse(props.course.id);
    props.toggleEditMode(true);
  }

  function handleClickToggleShowMode() {
    props.selectedCourse(props.course.id);
     props.toggleShowMode(true);
  }

  return (
    <>
      <div>
        <p>  Tittle: {props.course.title}</p>
        <p>  Description: {props.course.description}</p>
        <p>  Duration: {props.course.duration}</p>
        <p>  Created: {props.course.creationDate}</p>
        <p>  Authors: {props.course.authors &&  props.course.authors.map((id) =>
          <div>
            {props.mapper[id]}
             {console.log("props.authorsList", props.authorsList)}
            {console.log("props.mapper", props.mapper)}
          </div>)} </p>
        <p>  -------------------</p>
        <Button className='inputSearch' handleClick={handleClickToggleEditMode} name={"Edit course"} />
        <Button className='inputSearch' handleClick={handleClickToggleShowMode} name={"View course"} />
      </div>
    </>
  );
}