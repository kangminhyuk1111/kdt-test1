import React, { useState } from "react";

const Alphabet = () => {
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "p" },
    { id: 3, alpha: "p" },
    { id: 4, alpha: "l" },
    { id: 5, alpha: "e" },
  ]);
  console.log(alphabet);

  const [inputAlpha, setInputAlpha] = useState("");
  const addAlpha = () => {
    if (inputAlpha == "") {
      alert("뭐라도 적으세요");
      return;
    } else if (inputAlpha.includes(" ")) {
      alert("공백도 안됩니다");
      return;
    }
    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlphabet);
    setInputAlpha("");
  };

  const deleteAlpha = (id) => {
    setAlphabet(alphabet.filter((obj) => obj.id !== id));
  };

  const onKeyPressHandler = (e) => {
    if (e.key == "Enter") {
      addAlpha();
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Alphabet;
