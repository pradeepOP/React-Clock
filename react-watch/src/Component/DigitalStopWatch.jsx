import { useState, useRef, useEffect } from "react";

function DigitalStopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <div className="text-primary-color/70 mt-16 md:mt-12 p-8 py-20 md:py-10 font-mono  text-center md:w-1/2 md:mx-auto border-[1px] border-primary-color rounded-md mx-5">
      <span className="font-semibold tracking-wider text-7xl md:text-8xl">
        {formatTime()}
      </span>
      <div className="flex items-center justify-center gap-8 mt-8 text-2xl">
        <button
          className="px-4 bg-green-600 hover:bg-green-700 duration-200 ease-linear py-1.5 rounded-md text-white"
          onClick={start}>
          Start
        </button>
        <button
          className="px-4 bg-red-600 hover:bg-red-700 duration-200 ease-linear py-1.5 rounded-md text-white"
          onClick={stop}>
          Stop
        </button>
        <button
          className="px-4 bg-blue-600 hover:bg-blue-700 duration-200 ease-linear py-1.5 rounded-md text-white"
          onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default DigitalStopWatch;
