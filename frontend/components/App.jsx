import React from 'react';
import UserHomeContainer from './user_home/user_home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemShowContainer from './items/item_show_container';
import ItemIndexContainer from './items/item_index_container';
import { Link, Switch, Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
        <UserHomeContainer/>
        <Switch>
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/items/:itemId' component={ItemShowContainer} />
            <Route path='/items' component={ItemIndexContainer} />
            {/* may cause problems because this is not redirecting */}
            {/* write any other routes about the / route and inside
            of this switch tag */}
        </Switch>
        <footer className='footer'>
            <div className='back-to-top'>
                Back to top
            </div>
            <div className='bottom-footer'>
                <div className='get-to-know'>Get to Know the Creator
                <a className='linkedin'href='https://www.linkedin.com/in/sheava-danesh-088818137/'>
                    <li id='first'>Sheava's LinkedIn</li>
                </a>
                </div>
                <div className='footer-logo'>

                </div>
            </div>
        </footer>
    </div>
);

export default App;