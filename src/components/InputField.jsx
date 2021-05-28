import React from "react";
import PropTypes from "prop-types";

export const InputField = ({ value, label,  type, onChange }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
    };

    InputField.propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
      };

    return (
        <div className="form-group">
            {label && <label htmlFor="input-field">{label}</label>}
            <input
                type={type}
                value={value}
                className="form-control"
                onChange={handleChange}
                data-testid="input"
            />
        </div>
    );
};