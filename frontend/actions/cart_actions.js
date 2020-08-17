import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = cartItems => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}

const recieveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const removeCartItem = cartItemId => {
    // debugger
    return {
        type: REMOVE_CART_ITEM,
        cartItemId: cartItemId.id
    }
}

export const fetchCartItems = () => dispatch => {
    return (
        CartItemAPIUtil.fetchCartItems().then(cartItems => dispatch(receiveCartItems(cartItems)))
    )
}

export const fetchCartItem = cartItemId => dispatch => {
    return (
        CartItemAPIUtil.fetchCartItem(cartItemId).then(cartItem => dispatch(receiveCartItem(cartItem)))
    )
}

export const createCartItem = cartItem => dispatch => {
    return (
        CartItemAPIUtil.createCartItem(cartItem).then(cartItem => dispatch(recieveCartItem(cartItem)))
    )
}

export const deleteCartItem = cartItemId => dispatch => {
    // debugger
    return (
        CartItemAPIUtil.deleteCartItem(cartItemId).then((cartItemId) => dispatch(removeCartItem(cartItemId)))
    )
}