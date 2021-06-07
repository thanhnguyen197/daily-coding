// Libraries
import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

// styles
import './styles.scss';

// components
import FormikControl from 'Components/FormikControl';

const FormikContainer = () => {
    const dropdownOptions = [
        {key: 'Select an option', value: ''},
        {key: 'Option1', value: 'option1'},
        {key: 'Option2', value: 'option2'},
        {key: 'Option3', value: 'option3'}
    ];
    const radioOptions = [
        {key: 'Option1', value: 'rOption1'},
        {key: 'Option2', value: 'rOption2'},
        {key: 'Option3', value: 'rOption3'}
    ];
    const checkboxOptions = [
        {key: 'Option1', value: 'cOption1'},
        {key: 'Option2', value: 'cOption2'},
        {key: 'Option3', value: 'cOption3'}
    ];
    const initialValues = {
        email: '',
        comments: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email required'),
        comments: Yup.string().required('Comments required'),
        selectOption: Yup.string().required('Option required'),
        radioOption: Yup.string().required('Radio Option required'),
        checkboxOption: Yup.array().min(1, 'Checkbox required'),
        birthDate: Yup.date().required('Date required').nullable()
    });
    const onSubmit = (values:any) => {
        // eslint-disable-next-line
        console.log('values', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik:any) => (
                <Form>
                    <FormikControl 
                        control='input'
                        type='email' 
                        label='Email' 
                        name='email' 
                    />
                    <FormikControl 
                        control='textarea'
                        type='text' 
                        label='Comments' 
                        name='comments' 
                    />
                    <FormikControl
                        control='select'
                        label='Select a topic'
                        name='selectOption'
                        options={dropdownOptions}
                    />
                    <FormikControl 
                        control='radio'
                        label='Radio Option'
                        name='radioOption'
                        options={radioOptions}
                    />
                    <FormikControl 
                        control='checkbox'
                        label='Checkbox topics'
                        name='checkboxOption'
                        options={checkboxOptions}
                    />
                    <FormikControl 
                        control='date'
                        label='Pick a date'
                        name='birthDate'
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikContainer;
