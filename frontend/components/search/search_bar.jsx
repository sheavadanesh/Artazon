import React from 'react';
// import ItemIndex from '../items/item_index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        if (this.props.history.location.pathname === '/') {
            this.setState({searchTerm: ''});
        }
    }

    handleItemClick(item) {
        return (e) => {
            e.preventDefault();
            this.props.navItemClicked(true);
            this.props.navDropdown(false);
            this.props.searchDropdownHide(true);

            this.props.fetchItem(item).then(() => (this.props.history.push(`/items?${item.title.split(' ').join('-')}`)))
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.navItemClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);

        const searchParams = {
            title: this.state.searchTerm,
            page: 1
        };

        let searchQuery = '';

        if (searchParams.title !== null && searchParams.title !== '') {
            searchQuery = searchQuery.concat('title=', searchParams.title.split(' ').join('-'));
        }
        if (typeof searchParams.page === 'number') {
            searchQuery = searchQuery.concat('&page=', searchParams.page);
        }
        if (this.state.searchTerm === '') {
            this.props.history.push('/');
        } else {
            this.props.searchItems(searchParams).then(() => this.props.history.push(`/s?${searchQuery}`));
        }
    }

    handleInput(field) {
        return (e) => {
            this.props.navItemClicked(false);
            this.props.searchDropdownHide(false);
            (e.target.value === " ") ? this.props.startSearch(false) : this.props.startSearch(true);
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render() {
        let partialMatches = [];
        
        partialMatches = this.props.items.filter((obj) => (
            (obj.title.toUpperCase().slice(0, this.state.searchTerm.length) === this.state.searchTerm.toUpperCase())
        )).slice(0, 11).map(({ title }) => (
            <li className='partial-match' key={`${title}key`} onClick={this.handleItemClick(title)}>
                {title}
            </li>
        ));

        const ulShow = (partialMatches.length > 0 && this.state.searchTerm !== '') ? 'show-partial-matches' : 'hide-partial-matches';

        if (this.state.searchTerm === '') partialMatches = null;

        return(
            <div className='searchbar'>
                <form className='searchbar' onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleInput('searchTerm')} value={this.state.searchTerm}/>
                    <button>search</button>
                </form>
                
                <ul className={ulShow}>
                    {partialMatches}
                </ul>
            </div>
        )

    }
}

export default SearchBar;