import React from 'react';

class SearchBar extends React.Component{
    state={term:""};
    onSubmitchange= (event) =>
    {
        event.preventDefault();
        this.props.onSubmitchange(this.state.term)
    };
    render()
    {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitchange}>
                    <div className="field">
                <label>Video Search</label>
                <input type="text" username="search" 
                value={this.state.term}
                onChange={e => this.setState({term:e.target.value.toUpperCase()})}>
                </input>
                </div>
                 </form>
            </div>
        );
    }
}
export default SearchBar;