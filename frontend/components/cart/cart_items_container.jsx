import { connect } from 'react-redux';
import CartItems from './cart_items';
import { fetchCartItem, fetchCartItems, deleteCartItem, createCartItem } from '../../actions/cart_actions';

const mapStateToProps = state => {
    return ({
        userCartItems: state.entities.cartItems,
        curentUserId: state.session.id
        
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchCartItems: () => dispatch(fetchCartItems()),
        fetchCartItem: cartItem => dispatch(fetchCartItem(cartItem)),
        createCartItem: cartItem => dispatch(createCartItem(cartItem)),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);