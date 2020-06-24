import React from 'react';
import { Link } from 'react-router-dom';


const UserHome = props => {
    // props here comes from MSP and MDP from the cointainer, which are connected and passed through as props to Greeting through connect
    const loggedInGreeting = () => (
        <div className='navbar'>
            <div className='nav-line-container'>
                <span className='nav-line-1' id='hello-user'>Hello, {props.currentUser.name.split(" ")[0]}</span>
                <br></br>
                <span className='nav-line-2'>Account & Lists</span>
                <button type="submit" onClick={props.logout}>Sign Out</button>
            </div>
        </div>
    );

    const loggedOutGreeting = () => (
        <div className='navbar'>
            <div className='nav-line-container'>
                <span className='nav-line-1'>Hello, Sign in</span>
                <br></br>
                <span className='nav-line-2'>Account & Lists</span>
                <Link to='/login'>
                    <button className='submit-button' id='yellow-signin'>Sign in</button>
                </Link>
            </div>
        </div>
    );
    return props.currentUser ? loggedInGreeting() : loggedOutGreeting();
};

export default UserHome;
// if you only have a render, it can be a functional component (const)
// class component can be used if you have more in there than just a render
// props (needed info) are objects that are passed down to the component from container or directly passed in form of shirt={shirt}