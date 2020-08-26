import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

const receiveItems = (items) => {
    return {
        type: RECEIVE_ALL_ITEMS,
        items
    }
};

const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});

export const fetchItems = (data) => dispatch => {
    return (
        ItemAPIUtil.fetchItems(data).then(items => dispatch(receiveItems(items)))
    )
};

export const fetchItem = (itemId) => dispatch => (
    ItemAPIUtil.fetchItem(itemId).then(item => dispatch(receiveItem(item)))
);
