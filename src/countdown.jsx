import React, {useState, useEffect} from "react";

const ramenTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputTime, setInputTime] = useState(5);
};

const timer = () => {
  setIsActive(!isActive);
};

const stopTimer = () => {
  setIsActive(false);
  setTimeLeft(0);
};

const stopAlarm = () => {
  setIsAlarmOn(false);
  setIsActive(false);
};

const resetTimer = () => {
  setIsActive(false);
  setTimeLeft(inputTime * 60);
};

useEffect(() => {
  let interval;
  if(isActive && timeLeft > 0) {
    interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    });
  }

});