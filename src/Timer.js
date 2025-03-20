import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, isAlarmOn, setIsAlarmOn}) => {
    useEffect(() => {
        if(timeLeft <= 0) {
            setIsAlarmOn(true);
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, setTimeLeft, setIsAlarmOn]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
        </div>
    );
};

export default Timer;