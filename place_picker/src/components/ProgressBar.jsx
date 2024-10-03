import { useEffect, useState } from "react";

export default function ProgressBar({ timer, intervals }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prev) => {
        return prev - intervals;
      });
    }, intervals);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
