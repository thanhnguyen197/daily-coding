import React from 'react';

// components
import Input from 'Components/Input';
import Textarea from 'Components/Textarea';
import Select from 'Components/Select';
import RadioButtons from 'Components/RadioButtons';
import CheckboxGroup from 'Components/CheckboxGroup';
import DatePicker from 'Components/DatePicker';

const FormikControl = (props:any) => {
    const {control, ...rest} = props;
    
    switch (control) {
        case 'input': return <Input {...rest} />;
        case 'textarea': return <Textarea {...rest} />;
        case 'select': return <Select {...rest} />;
        case 'radio': return <RadioButtons {...rest} />;
        case 'checkbox': return <CheckboxGroup {...rest} />;
        case 'date': return <DatePicker {...rest} />;
        default: return <></>;
    }
};

export default FormikControl;
