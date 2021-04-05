import React, {Component} from "react";


const ValidatorComponenet = (props) => {
    let stringEl;

    if (props.inputValue < 5) {
        stringEl = <div> Text too Short</div>
    }else{

        stringEl = <div> Text Long Enough</div>
    }
    
    return(
        <>
        
        {stringEl}

        </>
    )
}

export default ValidatorComponenet;