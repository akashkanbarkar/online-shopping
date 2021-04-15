import React from 'react';
import './input-element.styles.scss'

const FormInput = ({ handlechange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handlechange} {...otherProps} />
            {label ?
                <label className={`form-input-label ${otherProps.value.lenght ? 'shrink' : ""}`}>
                    {label}
                </label> : null}
        </div>
    );
};

export default FormInput;