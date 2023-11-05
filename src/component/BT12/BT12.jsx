import React, { useState } from "react";

export default function BT12() {
  const [miliSecond, setMiliSecond] = useState(0);
  const [timeBegin, setTimeBegin] = useState(0);

  const handleStart = () => {
    setTimeBegin(
      setInterval(() => {
        setTime((prveTime) => prveTime + 1);
      }, 1000)
    );
  };
  const handleStop = () => {
    clearInterval(timeBegin);
    setTime(0);
  };
  return (
    <>
      <p>đếm thời gian{time}</p>
      <button onClick={handleStart}>Bắt Đầu</button>
      <button onClick={handleStop}>Dừng</button>
    </>
  );
}
