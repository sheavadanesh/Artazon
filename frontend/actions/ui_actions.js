export const NAV_DROPDOWN = 'NAV_DROPDOWN';
export const NAV_ITEM_CLICKED = 'NAV_ITEM_CLICKED';
export const SEARCH_DROPDOWN_HIDE = 'SEARCH_DROPDOWN_HIDE';

export const navDropdown = (bool) => ({
    type: NAV_DROPDOWN,
    bool
});

export const navItemClicked = (bool) => ({
    type: NAV_ITEM_CLICKED,
    bool
});

export const searchDropdownHide = (bool) => ({
    type: SEARCH_DROPDOWN_HIDE,
    bool
});