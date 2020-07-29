import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { navDropdown, navItemClicked, searchDropdownHide } from '../../actions/ui_actions';
import { fetchItem, searchItem } from '../../actions/item_actions';
import SearchBar from './search_bar';

const mapStateToProps = state => {
    debugger
    return {
        items: state.entities.items,
        searchDropdownHidden: Boolean(state.ui.searchDropdownHide)
    }
};

const mapDisptachToProps = dispatch => ({
    startSearch: (bool) => dispatch(navDropdown(bool)),
    fetchItem: (itemId) => dispatch(fetchItem(itemId)),
    searchItem: (searchParams) => dispatch(searchItem(searchParams)),
    navItemClicked: (bool) => dispatch(navItemClicked(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool))
});

export default connect(mapStateToProps, mapDisptachToProps)(SearchBar);