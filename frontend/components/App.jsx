import React from 'react';
import UserHomeContainer from './user_home/user_home_container';
import UserHome from './user_home/user_home';
import UserModal from './user_modal/user_modal';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
        <div className='navbar'>
            <Link to='/'>
                <div className='nav-logo'>
                    <img id='artazon-logo' src={'/assets/artazon_logo.png'}/>
                </div>
            </Link>
            <Route exact path='/' component={UserHomeContainer}/>
            <div className='user-modal'>
                <UserModal />
                {/* <button onClick={this.showModal}>show modal</button> */}
            </div>
        </div>
        <br></br>
        <div className= 'sign-in'>
            <Route path='/login' component={LoginFormContainer} />
        </div>
        <div className='signup'>
            <Route path='/signup' component={SignupFormContainer} />
        </div>
    </div>
);

export default App;