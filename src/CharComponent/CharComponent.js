import React from 'react';


const CharComponent = (props) =>{

    let inlineStyle = {
        display:'inline-block',
        padding : '16px',
        textAlign : 'center',
        margin:'16px',
        border : '1px solid black'
    }
    
    return(
        <div style={inlineStyle} onClick={props.Clicked}>
            
            <p >{props.componenet}</p>

        </div>
    )
}

export default CharComponent;