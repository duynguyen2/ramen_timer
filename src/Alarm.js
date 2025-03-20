import React from "react";

const Alarm = ({stopAlarm}) => {
    return(
        <div>
            <p>Time's up!</p>
            <button onClick={stopAlarm}>Stop Alarm</button>
        </div>
    );
};