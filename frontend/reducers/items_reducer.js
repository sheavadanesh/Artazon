import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';

const itemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            nextState[action.item.id] = action.item;
            return nextState;
        // case ADD_TO_CART:
        //     let addedItem = state.items.find(item => item.id === action.id)
        //     let existedItem = state.addedItems.find(item => action.id === item.id)
        //     if (existedItem) {
        //         addedItem.quantity += 1
        //         return {
        //             ...state, total: state.total + addedItem.price
        //         }
        //     } else {
        //         addedItem.quantity = 1;
        //         let newTotal = state.total + addedItem.price
        //         return {
        //             ...state, addedItems: [...state.addedItems, addedItem],
        //             total: newTotal
        //         }
        //     }
        
        default:
            return oldState;
    }
};

export default itemsReducer;