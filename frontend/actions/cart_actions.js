export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
};

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        item
    }
};

export const subQuantity = (item) => {
    return {
        type: SUB_QUANTITY,
        item
    }
};

export const addQuantity = (item) => {
    return {
        type: ADD_QUANTITY,
        item
    }
};