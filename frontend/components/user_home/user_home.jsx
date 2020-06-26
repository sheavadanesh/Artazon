import React from 'react';
import { Link } from 'react-router-dom';

const UserHome = props => {

    const loggedInGreeting = () => (
        <div className='page'>
            <div className='navbar'>
                <Link to='/'>
                    <div className='nav-logo'>
                        <div id='artazon-logo' />
                    </div>
                </Link>
                <div className='account-dropdown-container'>
                    <div className='account-dropdown'>
                        <button className='account-container'>
                            <span className='nav-line-1' id='hello-user'>Hello, {props.currentUser.name.split(" ")[0]}</span>
                            <br></br>
                            <span className='nav-line-2'>Account & Lists ▾</span>
                        </button>
                        <div className='account-dropdown-content'>
                            <button className='alt-link' id='sign-out-dropdown' type='submit' onClick={props.logout}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sub-navbar'>
                <p>categories go here</p>
            </div>
        </div>
    );

    const loggedOutGreeting = () => (
        <div className='page'>
            <div className='navbar'>
                <Link to='/'>
                    <div className='nav-logo'>
                        <div id='artazon-logo' />
                    </div>
                </Link>
                <div className='account-dropdown-container'>
                    <div className='account-dropdown'>
                        <Link to='/login'>
                            <button className='account-container'>
                                <span className='nav-line-1'>Hello, Sign in</span>
                                <br></br>
                                <span className='nav-line-2'>Account & Lists ▾</span>
                            </button>
                        </Link>
                        <div className='account-dropdown-content'>
                            <Link to='/login'>
                                <input className='submit-button' id='dropdown-yellow' type="submit" value="Sign in" />
                            </Link>
                            <span className='alt-link' id='new-customer-dropdown'>New customer? <Link to='/signup' id='start-here-link'>Start here.</Link></span>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='sub-navbar'>
                <p>categories go here</p>
            </div>
        </div>
    );
    return props.currentUser ? loggedInGreeting() : loggedOutGreeting();
};

export default UserHome;
// if you only have a render, it can be a functional component (const)
// class component can be used if you have more in there than just a render
// props (needed info) are objects that are passed down to the component from container or directly passed in form of shirt={shirt}