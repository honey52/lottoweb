import React from 'react';
import './ball.css';


function Ball(props) {
    const ballColorClass = null;
    if(props.drwNum <= 10) ballColorClass = "yellow";
    else if(props.drwNum <= 20) ballColorClass = "blue";
    else if(props.drwNum <= 30) ballColorClass = "red";
    else if(props.drwNum <= 40) ballColorClass = "gray";
    else if(props.drwNum <= 50) ballColorClass = "green";
    return(
        <div className={ballColorClass}>{props.drwNum}</div>
    );
}

export default Ball;