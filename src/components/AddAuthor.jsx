import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button';
import { InputField } from './InputField';


export const AddAuthor = (props) => {

  const addToAuthorsList = (author) => {
    const newauthor =
    {
      id: uuidv4(),
      name: author
    }
    const newAuthorsList = props.authors.concat(newauthor);

    props.setAuthorsList(newAuthorsList);

    props.addAuthorToList(newauthor);
  }

  function handleClickFunction() {
    addToAuthorsList(props.autors)
  }

  const handleChange = (e) => {
    props.setAutors(e)
  };

  return (
    <div class="Div-inline">
      <div class="Div-inline"></div>
      <InputField
        type="text"
        value={props.autors && props.autors}
        label="Autor"
        onChange={handleChange}
      />
      <div class="Div-inline">
        <Button className='inputSearch' handleClick={handleClickFunction} name={"Create Author"} />
      </div>
    </div>
  );
}