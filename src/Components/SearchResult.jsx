import React from 'react';

const SearchResult = (props) => {
    const disableButton = (result, nominations) =>{
        var index = nominations.indexOf(result)
        if (index !== -1) {
            return true
        }else{
            return false
        }
    }

    return (
        <div class='result-container' >
            <div class='result-content' >
                <img class='result-image' src={props.result.Poster} />
                <h1 class='result-title' >{props.result.Title}</h1>
                <h1 class='result-year' >{props.result.Year}</h1>
            </div>
            {disableButton(props.result, props.nominations) 
            ?   <button class='result-disabled-btn' disabled={true}>Nominate</button>
            :   <button class='result-active-btn' disabled={false} onClick={(e) =>{props.nominate(props.result)}}>Nominate</button>
            }
        </div> 
    );
}
export default SearchResult;