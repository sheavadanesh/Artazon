import React from 'react';
import UserHomeContainer from './user_home/user_home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Switch, Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
            <div className='navbar'>
            <Link to='/'>
                <div className='nav-logo'>
                    <div id='artazon-logo'/>
                </div>
            </Link>
            <Switch>
                <Route path='/login' component={LoginFormContainer} />
                <Route path='/signup' component={SignupFormContainer} />
                <Route path='/' component={UserHomeContainer}/>
                {/* may cause problems because this is not redirecting */}
                {/* write any other routes about the / route and inside
                of this switch tag */}
            </Switch>
    </div>
    </div>
);

export default App;