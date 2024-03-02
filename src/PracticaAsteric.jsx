import React, { useState, useEffect } from "react";

function PracticaAsterisc() {
  const [inputValue, setInputValue] = useState("");
  const [asterisks, setAsterisks] = useState("");

  useEffect(() => {
    const asterisks = "*".repeat(inputValue.length);
    setAsterisks(asterisks);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{asterisks}</p>
    </div>
  );
}

export default PracticaAsterisc;
