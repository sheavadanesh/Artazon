import React from 'react';
import UserHomeContainer from './user_home/user_home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemShowContainer from './items/item_show_container';
import ItemIndexContainer from './items/item_index_container';
import CartItemsContainer from './cart/cart_items_container';
import { Link, Switch, Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
        <UserHomeContainer/>
        <Switch>
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/items/:itemId' component={ItemShowContainer} />
            <Route path='/items' component={ItemIndexContainer} />
            <Route path='/cart_items' component={CartItemsContainer} />
        </Switch>
        <footer className='footer'>
            <div className='back-to-top' onClick={() => window.scrollTo(0, 0)}>
                Back to top
            </div>
            <div className='bottom-footer'>
                <div className='get-to-know'>Get to Know the Creator
                    <li id='first'>
                        Sheava Danesh  |  
                        <a className='linkedin' href='https://www.linkedin.com/in/sheava-danesh-088818137/'>  LinkedIn</a>  |  
                        <a className='linkedin' href='https://angel.co/u/sheava-danesh'>  AngelList</a>  |  
                        <a className='linkedin' href='https://github.com/sheavadanesh/Artazon'>  GitHub</a>
                    </li>
                </div>
            </div>
            <div className='super-bottom-footer'>
                <Link to='/items/'>
                    <div className='footer-logo'>
                        <div id='artazon-footer-logo' />
                    </div>
                </Link>
            </div>
        </footer>
    </div>
);

export default App;