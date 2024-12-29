import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="absolute right-12 top-4 flex gap-2 ">
      <div>{date} </div>
      <div>{time}</div>
    </div>
  );
};

export default Clock;
