import React from 'react';
import {Field, ErrorMessage} from 'formik';

// component
import TextError from 'Components/TextError';

const Select = (props:any) => {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {options.map((option:any) => {
                    return (
                        <option key={option.value} value={option.value} >{option.key}</option>
                    );
                })}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default Select;
