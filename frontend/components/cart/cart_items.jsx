import React from 'react';
import { Link } from 'react-router-dom';

class CartItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0
        };

        this.emptyCart = this.emptyCart.bind(this);
        this.filledCart = this.filledCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    filledCart() {
        let numItems = Object.values(this.props.userCartItems).length;
        let cartItemsArr = Object.values(this.props.userCartItems);
        
        return (
            <div className='cart-container'>
                <div className='left-side-cart'>
                    <span className='cart-head'>Shopping Cart</span>
                    <ul className='cart_items'>
                        { cartItemsArr.map( cart_item => (
                            <li className='cart-index-item'>
                                <Link className='item-body' to={`/items/${cart_item.id}`}>
                                    <div className='cart-photo-cont'>
                                        <img className='cart-index-item-photo' src={cart_item.photoUrl}></img>
                                    </div>
                                    <span className='cart-item-title'>{cart_item.title}</span>
                                    <span className='cart-item-artist'><span className='by'>by </span> {cart_item.artist}</span>
                                    <div className='price-shennanigans'>
                                        <span className='dollar-sign'>$</span>
                                        <span className='cart-item-price'>{cart_item.price}</span>
                                        {/* <span className='mini-deci'>{updatedPrice.slice(-2)}</span> */}
                                    </div>
                                    <span className='free-ship-cap'>FREE Shipping by Artazon</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='right-side-cart'>
                    <div className='subtotal-cont'>
                        <span>Subtotal ({numItems} items): <span className='cart-subtotal'>${this.state.subtotal}</span></span>
                    </div>
                </div>
            </div>
        )
    }

    emptyCart() {
        return (
            <div className='cart-container'>
                <span className='cart-head'>Shopping Cart</span>
                <br></br>
                <span className='cart-head' id='empty-cart'>Your Shopping Cart is empty.</span>
            </div>
        )
    }

    render() {

        return Object.values(this.props.userCartItems).length === 0 ? this.emptyCart() : this.filledCart()

    }
}

export default CartItems;