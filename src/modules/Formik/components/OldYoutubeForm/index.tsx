import React from 'react';
import {useFormik} from 'formik';
import classnames from 'classnames';
import * as Yup from 'yup';

import 'Modules/Formik/styles.scss';

const initialValues = {
    name: '', 
    email: '',
    channel: ''
};

const onSubmit = (values:any) => {
    console.log('values', values);
};

const validate = (values:any) => {
    interface iErrors {
        [key: string]: string
    }
    const errors:iErrors = {};

    if (!values.name) {
        errors.name = 'required';
    }

    if (!values.email) {
        errors.email = 'required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'invalid email format';
    }

    if (!values.channel) {
        errors.channel = 'required';
    }

    return errors;
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('invalid email format').required('Required!!'),
    channel: Yup.string().required('Required!!!')
});

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = formik;

    console.log('touched', touched);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classnames('form-control')}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={values.name} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <div className='form-error'>{errors.name}</div> : null}
                </div>

                <div className={classnames('form-control')}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    {errors.email && touched.email ? <div className='form-error'>{errors.email}</div> : null}
                </div>

                <div className={classnames('form-control')}>
                    <label htmlFor="channel">Channel</label>
                    <input 
                        type="text" 
                        id="channel" 
                        name="channel" 
                        value={values.channel} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    {errors.channel && touched.channel ? <div className='form-error'>{errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default OldYoutubeForm;