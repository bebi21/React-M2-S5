import React, { useState } from "react";

export default function BT9() {
  const [number, setNumber] = useState(0);
  const handleNumberPlus = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <p>{number}</p>
      <button onClick={handleNumberPlus}>Click</button>
    </>
  );
}
