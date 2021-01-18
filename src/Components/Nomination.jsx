import React from 'react';

const Nomination = (props) => {
    return ( 
       <div class='nomination-container'>
           <div class='nomination-img-container'>
                <img src={props.result.Poster} alt='Movie Poster'/>
            </div>
            <button class='nomination-remove-btn' onClick={() =>{props.removeNomination(props.result)}}>
                Remove
            </button>
        </div>
    );
}
export default Nomination;