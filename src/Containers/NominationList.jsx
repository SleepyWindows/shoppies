import React from 'react';
import Nomination from '../Components/Nomination';

const Nominations = (props) => {
    return ( 
        <div class='nomination-list-container'>
            <p id='nomination-list-header'>Your Nominations</p>
            {props.nominations.map(result =>{
                return(
                    <Nomination result={result} nominations={props.nominations} removeNomination={props.removeNomination}/>
            )})}
        </div>
    );
}
export default Nominations;