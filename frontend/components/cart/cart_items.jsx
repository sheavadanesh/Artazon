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
                <header className='cart-head'>Shopping Cart</header>
                <div className='left-side-cart'>
                    <ul className='cart_items'>
                        { cartItemsArr.map( cart_item => (
                            <li className='cart-index-item' key={cart_item.id}>
                                    <div className='cart-photo-cont'>
                                        <img className='cart-index-item-photo' src={cart_item.photoUrl}></img>
                                    </div>
                                    <div className='mid-side-specific'>
                                        <Link className='item-body' to={`/items/${cart_item.id}`}>
                                            <span className='cart-item-title'>{cart_item.title}</span>
                                        </Link>
                                        <span className='cart-item-artist'><span className='by'>by </span> {cart_item.artist}</span>
                                        <span className='in-stock-cart'>In Stock</span>
                                        <span className='cart-free-ship-cap'>FREE Shipping & FREE Returns</span>
                                        <label className='gift'>
                                            <input type='checkbox' className='yes-gift'/><span className='gift-text'>This is a gift</span>
                                        </label>
                                    </div>
                                    <div className='price-shennanigans'>
                                        <span className='cart-dollar-sign'>$</span><span className='cart-item-price'>{cart_item.price}</span>
                                    </div>
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