import { useEffect, useState } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <div className="text-primary-color/70 mt-16 p-8 py-20 font-mono md:text-8xl text-center md:w-1/2 md:mx-auto border-[1px] border-primary-color rounded-md text-6xl mx-5 ">
      <span>{formatTime()}</span>
    </div>
  );
}
export default DigitalClock;
