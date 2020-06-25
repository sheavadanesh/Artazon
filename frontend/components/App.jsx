import React from 'react';
import UserHomeContainer from './user_home/user_home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
        <div className='entire-home-page'>
            <div className='navbar'>
                <Link to='/'>
                    <div className='nav-logo'>
                        <img id='artazon-logo' src="/assets/artazon_logo.png"/>
                    </div>
                </Link>
                <Route exact path='/' component={UserHomeContainer}/>
            </div>
            <br></br>
            <div classname='entire-other-page'>
                <div className= 'sign-in'>
                    <Route path='/login' component={LoginFormContainer} />
                </div>
                <div className='signup'>
                    <Route path='/signup' component={SignupFormContainer} />
                </div>
            </div>
        </div>
    </div>
);

export default App;