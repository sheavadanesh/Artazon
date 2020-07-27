import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveItems = (items) => ({
    type: RECEIVE_ALL_ITEMS,
    items
});

const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});

const receiveSearchResults = (results) => ({
    type: RECEIVE_SEARCH_RESULTS,
    results
});

export const fetchItems = () => dispatch => (
    ItemAPIUtil.fetchItems().then(items => dispatch(receiveItems(items)))
);

export const fetchItem = (itemId) => dispatch => (
    ItemAPIUtil.fetchItem(itemId).then(item => dispatch(receiveItem(item)))
);

export const searchItem = (searchParams) => dispatch => (
    ItemAPIUtil.searchItem(searchParams).then((results) => dispatch(receiveSearchResults(results)))
);