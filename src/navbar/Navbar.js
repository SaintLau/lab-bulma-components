import React from 'react';
import "bulma/css/bulma.css";
import CoolButton from '../coolbutton/CoolButton';

function Navbar(props) {
    return (

 <nav className='navbar is-primary'>
     <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              alt='Bulma: a modern CSS framework based on Flexbox'
              width='112'
              height='28'
            />
          </a>
     </div>
        
        {/* For the buttons */}
    <div id='navbarExampleTransparentExample' className='navbar-menu'>
        <div className='navbar-end'>
            <div className='navbar-item'>
                <div className='field is-grouped'>
                     
                        <CoolButton>Login</CoolButton>
                    
                   
                        <CoolButton isDanger>Signup</CoolButton>   
                </div>
            </div>
        </div>
    </div>

</nav>

)
}
export default Navbar;