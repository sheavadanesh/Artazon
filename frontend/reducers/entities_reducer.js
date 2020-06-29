import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import itemsReducer from './items_reducer';

const entititesReducer = combineReducers({
    users: usersReducer,
    items: itemsReducer
});

export default entititesReducer;