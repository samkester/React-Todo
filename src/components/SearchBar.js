import React from "react";

//   SearchBar [props: set search filter]

class SearchBar extends React.Component {
    
    setSearchTerm = (event) => {
        //console.log(event.target.value);
        this.props.setSearchTerm(event.target.value);
    }

    render () {
        return (
            <div>
                <input type="text" value={this.props.searchTerm} onChange={this.setSearchTerm} />
                <button onClick={this.props.removeAllCleared}>Clear</button>
            </div>
        )
    }
}

export default SearchBar;