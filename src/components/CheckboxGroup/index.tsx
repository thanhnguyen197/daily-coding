import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/TextError';

const CheckboxGroup = (props:any) => {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {({field}:any) => {

                    return (
                        <div>
                            {options.map((option:any) => {

                                return (
                                    <div key={option.key}>
                                        <input 
                                            type="checkbox" 
                                            id={option.value} 
                                            {...field}
                                            value={option.value}
                                            checked={field.value.includes(option.value)}
                                        />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </div>
                                );
                            })}
                        </div>
                        
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default CheckboxGroup;
