import React, { useState, useEffect } from "react";
import moment from "moment";

const RealTime = (props) => {
  const [showDate, setShowDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setShowDate(new Date());
    }, 1000 * 5);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  return <>{moment(showDate).format("Do MMMM , h:mm A")}</>;
};

export default RealTime;
