import React, { useState } from "react";
import PropTypes from "prop-types";

export const InputField = ({ value, label, placeholder, type, onChange }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
    };

    InputField.propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,       
        placeholder: PropTypes.string.isRequired,
      };

    return (
        <div className="form-group">
            {label && <label htmlFor="input-field">{label}</label>}
            <input
                type={type}
                value={value}
                className="form-control"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};