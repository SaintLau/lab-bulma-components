import React from 'react';
import "bulma/css/bulma.css";


 
    const CoolButton = ({isPrimary, isDanger, children}) => {

        let style = 'button';

        if (isPrimary) {
            style += ' is-primary';
        } else if(isDanger) {
            style += ' is-danger';
        }

        return (
            <button className={style}>
                {children}
            </button>
        )

            {/*  
        return (
        <div>
           <button className="button">
              
               {props.children}
            </button>
        </div>
    )*/}
}

export default CoolButton;