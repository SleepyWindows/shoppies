import React from 'react';

const SearchBar = (props) => {
    return ( 
    <div id='search-bar-container'>
        <h1 id='search-bar-header'>
            OMDB Database
        </h1>
        <div id='search-input-box'>
            <input class='search-input' showNoResults={false} placeholder='Search Movies...' onChange={(e) => {
                props.updateSearchTerms(e.target)
            }}/>
        </div>
    </div> );
}
 
export default SearchBar;
