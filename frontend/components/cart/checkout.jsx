import React from 'react';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='checkout-cont'>
                <header className='thanks-for-shopping'>Thank you! Your order has been received.</header>
                <Link to='/items' className='link-to-items'>View more items</Link>
            </div>
        )
    }
}

export default Checkout;