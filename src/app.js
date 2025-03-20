import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(null); // Timer time in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Is the timer running?
  const [customTime, setCustomTime] = useState(''); // Custom time input
  const [message, setMessage] = useState(''); // Message to display when time is up

  // Function to start the timer with a predefined time
  const startTimer = (minutes) => {
    if (isTimerRunning) {
      clearInterval(timer);
      setIsTimerRunning(false);
    }

    setTimeLeft(minutes * 60); // Convert minutes to seconds
    setIsTimerRunning(true);
    setMessage('');

    timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setIsTimerRunning(false);
          setMessage("Time's up! Your ramen is ready!");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Function to handle the custom timer input
  const startCustomTimer = () => {
    if (customTime && customTime > 0) {
      startTimer(customTime);
    } else {
      alert('Please enter a valid time!');
    }
  };

  // Function to format the time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    return () => {
      clearInterval(timer); // Clean up the interval when the component is unmounted
    };
  }, []);

  let timer;

  return (
    <div className="timer-container">
      <h1>Instant Ramen Timer</h1>
      <div id="timer-display">
        {timeLeft !== null ? formatTime(timeLeft) : '00:00'}
      </div>

      <div className="buttons">
        <button className="time-btn" onClick={() => startTimer(3)}>3 Minutes</button>
        <button className="time-btn" onClick={() => startTimer(4)}>4 Minutes</button>
        <button className="time-btn" onClick={() => startTimer(5)}>5 Minutes</button>
      </div>

      <div className="custom-time">
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          placeholder="Enter your time in minutes:"
          min="3"
        />
        <button onClick={startCustomTimer}>Start Ramen Timer!</button>
      </div>

      <div id="message">{message}</div>
    </div>
  );
}

export default App;
