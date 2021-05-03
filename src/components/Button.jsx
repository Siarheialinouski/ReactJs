import React from 'react';
import PropTypes from "prop-types";


export const Button = (props) => {

  Button.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  return (
      <button className={props.className} onClick={props.handleClick}>
          {props.name}
      </button>
  );
}