import React from 'react';
import "bulma/css/bulma.css";


const CoolButton = props => {
   
    return (
        <div>
            <button className="button is-rounded my-class is-danger is-small">
               {props.children}
            </button>
        </div>
    )
}

{/*
function CoolButton( {children} ) {

} 
*/}

export default CoolButton;