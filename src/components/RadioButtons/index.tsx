import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/TextError';

const RadioButtons = (props:any) => {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            <label>{label}</label>
            <Field id={name} name={name} {...rest}>
                {({field}:any) => {

                    return options.map((option:any) => {
                        return (
                            <div key={option.key} style={{display: 'flex', alignItems: 'center', padding: 8}}>
                                <input 
                                    type="radio" 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value} 
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value} >{option.key}</label>
                            </div>
                        );
                    });
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default RadioButtons;
