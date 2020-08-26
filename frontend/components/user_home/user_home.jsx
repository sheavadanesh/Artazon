import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

class UserHome extends React.Component {
    constructor(props) {
        super(props);

        this.loggedInGreeting = this.loggedInGreeting.bind(this);
        this.loggedOutGreeting = this.loggedOutGreeting.bind(this);
        this.logoutToHome = this.logoutToHome.bind(this);
        this.returnHome = this.returnHome.bind(this);
    }

    logoutToHome() {
        this.props.logout();
        this.props.history.push('/items');
    }

    returnHome() {
        let data = '';
        this.props.fetchItems(data); 
    }

    loggedInGreeting() {
        return (
            <div className='page'>
            <Redirect to='/items/'/>
                <div className='navbar'>
                    <Link to='/items/' replace>
                        <div className='nav-logo' onClick={this.returnHome}>
                            <div id='artazon-logo' />
                        </div>
                    </Link>
                    <div className='left-nav-section'>
                        <div className='nav-searchbar'>
                            <SearchBarContainer />
                        </div>
                        <div className='account-dropdown-container'>
                            <div className='account-dropdown'>
                                <button className='account-container'>
                                    <span className='nav-line-1' id='hello-user'>Hello, {this.props.currentUser.name.split(" ")[0]}</span>
                                    <br></br>
                                    <span className='nav-line-2'>Account & Lists ▾</span>
                                </button>
                                <div className='account-dropdown-content'>
                                    <button className='alt-link' id='sign-out-dropdown' type='submit' onClick={this.logoutToHome}>Sign Out</button>
                                </div>
                            </div>
                        </div>
                        <div className='nav-cart'>
                            <Link to='/cart_items'>
                                <button className='nav-cart-button'><i className="fas fa-shopping-cart" id='cart'></i> Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sub-navbar'>
                    <p> </p>
                </div>
            </div>
        )
    };

    loggedOutGreeting() {
        return (
        <div className='page'>
        <Redirect to='/items/' />
            <div className='navbar'>
                <Link to='/items/' replace>
                    <div className='nav-logo' onClick={this.returnHome}>
                        <div id='artazon-logo' />
                    </div>
                </Link>
                <div className='left-nav-section'>
                    <div className='nav-searchbar'>
                        <SearchBarContainer />
                    </div>
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
                    <div className='nav-cart'>
                        <Link to='/login'>
                            <button className='nav-cart-button'><i className="fas fa-shopping-cart" id='cart'></i> Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='sub-navbar'>
                <p> </p>
            </div>
        </div>
        )
    };

    render () {
        return this.props.currentUser ? this.loggedInGreeting() : this.loggedOutGreeting();
    }
};

export default withRouter(UserHome);
