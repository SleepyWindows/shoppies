import React from 'react';
import SearchBar from '../Components/SearchBar'
import SearchResult from '../Components/SearchResult'
require('dotenv').config()

class SearchContainer extends React.Component {
    state = { 
        searchTerms: null,
        results: []
    }
    
    render() { 
        return ( 
            <div>
                <SearchBar 
                    searchTerms={this.state.searchTerms} 
                    updateSearchTerms={this.updateSearchTerms}/>
                <div id='search-result-parent'>
                    {this.state.results.map((result, index) => {
                        return(
                            <SearchResult 
                                key={index} result={result} 
                                nominations={this.props.nominations} 
                                nominate={this.props.nominate}/>
                        )
                    })} 
                </div>
            </div>
        );
    }
     
    fetchSearchResults = () =>{
        fetch(`http://www.omdbapi.com/?apikey=7af78bf8&type=movie&s=${this.state.searchTerms}&page=1`)
        .then((res) => res.json())
        .then((data) =>{
            if(data.Response == "False"){
                console.log(data.Error)
            }else{
            this.setState({
            results: data.Search,
            })}
        })
        
    }
    
    updateSearchTerms = (e) =>{
        this.setState({
            searchTerms: e.value
        }, ()=>{
            this.fetchSearchResults()
        })
    }
}



export default SearchContainer;