import React, { useState } from "react";

export default function BT10() {
  const [number, setNumber] = useState(0);
  const [numberCharacter, setNumberCharacter] = useState(0);
  const handleCharacter = () => {
    let newNumber = number.split(" ").join("");
    setNumberCharacter(newNumber.split("").length);
  };

  const handleInput = (e) => {
    setNumber(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleInput} />
      <p>{numberCharacter}</p>
      <button onClick={handleCharacter}>Đếm số kí tự</button>
    </>
  );
}
