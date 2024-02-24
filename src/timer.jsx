import React, { useEffect } from 'react';
import './timer.css';

const Timer = () => {
  useEffect(() => {
    function startTimer() {
      const eventDate = new Date("03/15/2024").getTime();

      const updateClock = () => {
        const currentTime = new Date().getTime();
        const distance = eventDate - currentTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
      };

      updateClock();
      setInterval(updateClock, 1000);
    }

    startTimer();
  }, []);

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-item">
          <span id="days" className="timer-value"></span>
          <span className="timer-label">Days</span>
        </div>
        <div className="timer-item">
          <span id="hours" className="timer-value"></span>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-item">
          <span id="minutes" className="timer-value"></span>
          <span className="timer-label">Minutes</span>
        </div>
        <div className="timer-item">
          <span id="seconds" className="timer-value"></span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
