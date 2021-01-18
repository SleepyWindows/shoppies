import React from 'react';
import Nomination from './Nomination';

const Finished = (props) => {
    console.log(props)
    return ( 
    <div class='banner-wrapper'>
        <div id='finished-banner'>
            <h1 id='finished-text'>Finished!</h1>
            <div id='finished-nominations'>
                {props.nominations.map(result=>{
                    return(
                    <Nomination result={result} removeNomination={props.removeNomination}/>
                )})}
            </div>
            {/* <button id='banner-submit-button'>Submit</button> */}
        </div>
    </div>
     );
}
 
export default Finished;