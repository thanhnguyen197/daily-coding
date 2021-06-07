import React from 'react';
import 'Modules/Formik/styles.scss';

export default function TextError(props:any) {
    return (
        <div className='form-error'>
            {props.children}
        </div>
    );
}
