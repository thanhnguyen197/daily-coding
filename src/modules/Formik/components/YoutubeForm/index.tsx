import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
import classnames from 'classnames';
import * as Yup from 'yup';

import 'Modules/Formik/styles.scss';

// components
import TextError from 'Modules/Formik/components/TextError';

const initialValues = {
    name: '', 
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const savedValues = {
    name: 'Thanh', 
    email: 'tha@example.com',
    channel: 'bienxanh',
    comment: 'abc',
    address: '12 a',
    social: {
        facebook: 'fb',
        twitter: 'tw'
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const onSubmit = (values:any, onSubmitProps: any) => {
    console.log('values', values);
    onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('invalid email format').required('Required!!'),
    channel: Yup.string().required('Required!!!'),
    comment: Yup.string().required('Required!'),
    address: Yup.string().required('Required!'),
    social: Yup.object({
        facebook: Yup.string().required('Required!'),
        twitter: Yup.string().required('Required')
    })
});

const YoutubeForm = () => {
    const [formValues, setFormValues] = useState(initialValues);
    
    return (
        <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={onSubmit}
        >
            {(formik:any) => {
                console.log('formik',formik);

                return (
                    <Form>
                        <div className={classnames('form-control')}>
                            <label htmlFor="name">Name</label>
                            <Field 
                                type="text" 
                                id="name" 
                                name="name" 
                            />
                            <ErrorMessage name="name">
                                {(message:string) => {

                                    return (
                                        <div style={{color: 'red'}}>{message}</div>
                                    );
                                }}
                            </ErrorMessage>
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="email">Email</label>
                            <Field 
                                type="email" 
                                id="email" 
                                name="email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="channel">Channel</label>
                            <Field 
                                type="text" 
                                id="channel"  
                                name="channel"
                            />
                            <ErrorMessage name="channel" />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="comment">Comment</label>
                            <Field 
                                as="textarea"
                                id="comment"  
                                name="comment"
                            />
                            <ErrorMessage name="comment" />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="address">Address</label>
                            <FastField name="address">
                                {(props:any) => {
                                    const {field, form, meta} = props;

                                    return (
                                        <div>
                                            <input type="text" id="address" {...field} />
                                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>
                                    ); 
                                
                                }}
                            </FastField>
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="facebook">Facebook</label>
                            <Field 
                                type="text" 
                                id="facebook" 
                                name="social.facebook"
                            />
                            <ErrorMessage name="social.facebook" component={TextError} />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="twitter">Twitter</label>
                            <Field 
                                type="text" 
                                id="twitter" 
                                name="social.twitter"
                            />
                            <ErrorMessage name="social.twitter" component={TextError} />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="primaryPhoneNumber">Primary phone number</label>
                            <Field 
                                type="text" 
                                id="primaryPhoneNumbertter" 
                                name="phoneNumbers[0]"
                            />
                            <ErrorMessage name="phoneNumbers[0]" component={TextError} />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="secondPhoneNumber">Second phone number</label>
                            <Field 
                                type="text" 
                                id="secondPhoneNumbertter" 
                                name="phoneNumbers[1]"
                            />
                            <ErrorMessage name="phoneNumbers[1]" component={TextError} />
                        </div>

                        <div className={classnames('form-control')}>
                            <label htmlFor="phNumbers">Array phone number</label>
                            <FieldArray name="phNumbers">
                                {(fieldArrayProps:any) => {
                                    const {push, remove, form} = fieldArrayProps;
                                    const {values} = form;
                                    const {phNumbers} = values;

                                    return (
                                        <div>
                                            {phNumbers.map((number:string, index:number) => {

                                                return (
                                                    <div key={index}>
                                                        <Field id={`phNumbers[${index}]`} type="text" name={`phNumbers[${index}]`} />
                                                        {
                                                            index > 0 && <button type="button" onClick={() => remove(index)}>-</button>
                                                        }                                
                                                        <button type="button" onClick={() => push('')}>+</button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                }}
                            </FieldArray>
                            <ErrorMessage name="phNumbers" component={TextError} />
                        </div>
                        
                        <button type="button" onClick={() => setFormValues(savedValues)} >Load saved data</button>
                        <button type="reset">Reset</button>
                        <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button>
                    </Form>
                    
                );
            }}
        </Formik>
    );
};

export default YoutubeForm;