import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { keyword: ''};
        
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // debugger
        this.props.fetchItems(this.state.keyword);
        // if (this.props.items.length === 0) {
        //     debugger
        //     return (
        //         <div className='no-match'>
        //             <span className='no-match-message'>
        //                 No items matched your search :(
        //             </span>
        //         </div>
        //     )
        // }
        // } else {
        //     debugger
        //     this.props.fetchItems(this.state.keyword);
        //     debugger
        // }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value});
    }

    render() {
        return (
            <div className='search-form-container'>
                <form onSubmit={this.handleSubmit} className='search-form-box'>
                    <div className='search-form-box-inner'>
                        <input type='text'
                            value={this.state.keyword}
                            onChange={this.update('keyword')}
                            className='search-input'
                            />
                        <button className='submit-search' type='submit'><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;