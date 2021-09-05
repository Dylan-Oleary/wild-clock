import React, { useEffect, useRef, useState } from "react"
import moment from "moment";

import "../styles/index.css";

const IndexPage = () => {
  const startHour = 6;
  const endHour = 18;
  const wrapperRef = useRef(null);

  const [currentDay, setCurrentDay] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurretDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      const now = moment();

      if (now.hour() >= startHour && now.hour() < endHour) {
        setCurrentTime(now.format("LT"));
        setCurrentDay(now.format("dddd"));
        setCurretDate(now.format("MMMM D"));
      } else {
        setCurrentTime("");
        setCurrentDay("");
        setCurretDate("");
      }

      const hoursSinceOn = Math.max(now.hour() - startHour, 0);
      const totalHoursOn = endHour - startHour;
  
      wrapperRef.current.style.marginLeft = `${(hoursSinceOn / totalHoursOn) * totalHoursOn}vw`;
    }, 1000);
  });

  return (
      <body>
        <div id="wrapper" ref={wrapperRef}>
          <div id="time" className="tv-text">{currentTime}</div>
          <div id="day" className="tv-text">{currentDay}</div>
          <div id="date" className="tv-text">{currentDate}</div>
        </div>
      </body>
  )
}

export default IndexPage;
