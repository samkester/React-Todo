import React from "react";
import StyledSearch from "./styled/StyledSearch";

//   SearchBar [props: set search filter]

class SearchBar extends React.Component {
    
    setSearchTerm = (event) => {
        //console.log(event.target.value);
        this.props.setSearchTerm(event.target.value);
    }

    render () {
        return (
            <StyledSearch>
                <input type="text" value={this.props.searchTerm} onChange={this.setSearchTerm} placeholder="Filter" />
                <button onClick={this.props.removeAllCleared}>Remove Completed Items</button>
            </StyledSearch>
        )
    }
}

export default SearchBar;