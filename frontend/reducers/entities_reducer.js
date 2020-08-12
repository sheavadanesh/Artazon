import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import itemsReducer from './items_reducer';
import cartReducer from './cart_reducer';

const entititesReducer = combineReducers({
    users: usersReducer,
    items: itemsReducer,
    cartItems: cartReducer
});

export default entititesReducer;