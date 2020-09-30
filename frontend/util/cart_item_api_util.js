
// jquery
export const fetchCartItems = () => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/cart_items`
        })
    )
}

export const fetchCartItem = cartItemId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/cart_items/${cartItemId}`
    
        })
    )
}

export const createCartItem = cartItem => {
    return (
        $.ajax({
            method: 'POST',
            url: `/api/cart_items`,
            data: { cartItem }
        })
    )
}

export const deleteCartItem = (cartItemId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/cart_items/${cartItemId}`
        })
    )
}