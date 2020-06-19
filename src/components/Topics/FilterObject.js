import React, { Component } from "react";
 
constructor {
    super();


}

export default class FilterObject extends Component {
    render() {
        return(
            <h4> Filter Object </h4>
           <div className='puzzleBox filterobjectsPB'>
                <span className='puzzleText'></span> 
                <input className='inputLine'/>
                <button className='confirmationButton' />
                <span className='resultsBox filterObjectRB'></span>

           </div>
        )
    }
}