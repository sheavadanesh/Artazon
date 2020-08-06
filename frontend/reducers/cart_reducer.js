import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/cart_actions';

const oldState = {
    addedItems: [],
    total: 0
}

const cartReducer = (state = oldState, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);

    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = action.items.find(item => item.id === action.item.id)
            let existedItem = state.addedItems.find(item => action.item.id === item.id)
            if (existedItem) {
                addedItem.quantity += 1
                return {
                    ...state, 
                    total: state.total + addedItem.price
                }
            } else {
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price
                return {
                    ...state, 
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(item => action.item.id === item.id)
            let newItems = state.addedItems.find(item => action.item.id !== item.id)
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            return {
                ...state, 
                addedItems: newItems, 
                total: newTotal
            }
        case ADD_QUANTITY: 
            let addedItem = action.items.find(item => item.id === action.item.id)
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price
            return {
                ...state, 
                total: newTotal
            }
        case SUB_QUANTITY:
            let addedItem = action.items.find(item => item.id === action.item.id)
            if (addedItem.quantity === 1) {
                let newItems = state.addedItems.filter(item => item.id !== action.item.id)
                let newTotal = state.total - addedItem.price
                return {
                    ...state, 
                    addedItems: newItems,
                    total: newTotal
                }
            } else {
                addedItem.quantity -= 1;
                let newTotal = state.total - addedItem.price;
                return {
                    ...state,
                    total: newTotal
                }
            }

        default:
            return oldState;
    }
};

export default cartReducer;