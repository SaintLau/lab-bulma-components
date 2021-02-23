import React from 'react';
import "bulma/css/bulma.css";
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
    return (
        <div>
            <FormField label='name' type='text' />
            <FormField label='email' type='email' />
            <FormField label='password' type='password' />
            <CoolButton>Submit</CoolButton>
        </div>
    )
}

export default Signup;