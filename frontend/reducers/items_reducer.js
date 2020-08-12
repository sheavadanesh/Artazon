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

        default:
            return oldState;
    }
};

export default itemsReducer;