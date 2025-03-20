import React from 'react';

const StartMenu = () => {
  const [customTime, setCustomTime] = useState('');

  const handleCustomTimeChange = (e) => {
    setCustomTime(e.target.value);
  };

  const handleStartCustomTimer = () => {
    if(customTime > 0) startTimer(customTime);
  };

  return (
    <div>
      <button onClick={() => startTimer(3)}>3 Minutes</button>
      <button onClick={() => startTimer(4)}>4 Minutes</button>
      <button onClick={() => startTimer(5)}>5 Minutes</button>
      <input
        type="number"
        value={customTime}
        onChange={handleCustomTimeChange}
        placeholder="Custom Time (minutes)"
      />
      <button onClick={handleStartCustomTimer}>Start Custom Timer</button>
    </div>
  );
};

const imageButton = ({imageURL, text, onClick}) => {
    return (
      <button
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={onClick}
      >
        <span
          style={{
            position: 'relative',
            zIndex: 1,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {text}
        </span>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 0,
          }}
        />
      </button>
    )};

    export default StartMenu;