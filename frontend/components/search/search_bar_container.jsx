import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchItems, searchItem } from '../../actions/item_actions';

const mapStateToProps = state => {
    // debugger
    return {
        items: state.entities.items
    }
};

const mapDisptachToProps = dispatch => {
    return {
        fetchItems: (data) => dispatch(fetchItems(data))
        // searchItem: (keyword) => dispatch(searchItem(keyword))
    }
};

export default connect(mapStateToProps, mapDisptachToProps)(SearchBar);