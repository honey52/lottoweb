import React from 'react';
import './ball.css';


function Ball(props) {
    let ballColorClass = null;
    if(props.drwtNo <= 10) ballColorClass = "yellow ball";
    else if(props.drwtNo <= 20) ballColorClass = "blue ball";
    else if(props.drwtNo <= 30) ballColorClass = "red ball";
    else if(props.drwtNo <= 40) ballColorClass = "gray ball";
    else if(props.drwtNo <= 50) ballColorClass = "green ball";
    return(
        <div className={ballColorClass}><span>{props.drwtNo}</span></div>
    );
}

export default Ball;