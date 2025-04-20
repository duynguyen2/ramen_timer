import React from 'react';
import { useState, useEffect, useRef } from 'react';
import displayEndTime from './util/displayEndTime';
import Settings from './Settings';
import Timer from './Timer';
import './App.css'; 
import displayRemainingTime from './util/displayRemainingTime';
import playSound from './util/playSound';

function App() {
    Timer.displayName = 'Ramen Timer'; // Set display name for debugging
    // Initialize state variables

    const [time, setTime] = useState(3); // Default timer value in minutes
    const [endTime, setEndTime] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);
    const timerRef = useRef(null);

    const startTimer = () => {
        const end = new Date(Date.now() + time * 60000);
        setEndTime(end);
        setRemainingTime(time * 60);
        timerRef.current = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    playSound();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        if (remainingTime === 0) {
            alert(displayEndTime(endTime));
        }
    }, [remainingTime, endTime]);

    return (
        <div className="App">
            <h1>Ramen Timer</h1>
            <div className="timer-display">
                {remainingTime !== null ? displayRemainingTime(remainingTime) : 'Set a timer'}
            </div>
            <button onClick={startTimer} disabled={remainingTime !== null && remainingTime > 0}>
                Start Timer
            </button>
            <Settings onSave={(newTime) => {
                setTime(newTime);
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                    setRemainingTime(null);
                }
            }} />
            {endTime && <div className="end-time">{displayEndTime(endTime)}</div>}
        </div>
    );
    
}

export default App;