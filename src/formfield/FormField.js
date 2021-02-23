import React from 'react';
import "bulma/css/bulma.css";

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <input className="input">
            {props.input}
        </input>
      </div>
    );
  };

  export default FormField;