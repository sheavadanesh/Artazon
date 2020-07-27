const { NAV_DROPDOWN, NAV_ITEM_CLICKED, SEARCH_DROPDOWN_HIDE } = require("../actions/ui_actions");

import { NAV_DROPDOWN, NAV_ITEM_CLICKED, SEARCH_DROPDOWN_HIDE } from '../actions/ui_actions';

const uiReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case NAV_DROPDOWN:
            return Object.assign({}, nextState, { navDropdown: action.bool });
        case NAV_ITEM_CLICKED:
            return Object.assign({}, nextState, { navItemClicked: action.bool });
        case SEARCH_DROPDOWN_HIDE:
            return Object.assign({}, newState, { searchDropdownHide: action.bool });

        default:
            return oldState;
    }
};

export default uiReducer;