import React from 'react';
import DataView from 'react-datepicker';
import {Field, ErrorMessage} from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

// components
import TextError from 'Components/TextError';

const DatePicker = (props:any) => {
    const {label, name, ...rest} = props; 

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {({form, field}:any) => {
                    const {setFieldValue} = form;
                    const {value} = field;

                    return (
                        <DataView 
                            id={name} 
                            {...field} 
                            {...rest} 
                            selected={value}  
                            onChange={(val:any) => setFieldValue(name, val)}
                        />
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default DatePicker;
