import React, { useState } from "react";

export default function Event_ex() {
  const [inputUserData, setInputUserData] = useState({
    userId: "",
    userEmail: "",
  });
  const [update, setUpdate] = useState([
    { id: 1, userId: "test", userEmail: "text@test.com" },
  ]);

  const inputVal = (e) => {
    setInputUserData({
      ...inputUserData,
      [e.target.name]: e.target.value,
    });
  };

  const settingUserData = () => {
    let result = update.concat({
      id: update.length + 1,
      userId: inputUserData.userId,
      userEmail: inputUserData.userEmail,
    });
    console.log(result);
    setUpdate(result);
    setInputUserData({
      userId: "",
      userEmail: "",
    });
  };

  const deleteUserData = (id) => {
    setUpdate(update.filter((data) => data.id !== id));
  };

  const onKeyPressHandler = (e) => {
    if (e.key == "Enter") {
      settingUserData();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="userId"
        id="userId"
        onChange={inputVal}
        value={inputUserData.userId}
        placeholder="아이디"
        // onKeyDown={onKeyPressHandler}
      />
      <input
        type="text"
        name="userEmail"
        id="userEmail"
        onChange={inputVal}
        value={inputUserData.userEmail}
        placeholder="이메일"
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={settingUserData}>등록</button>
      {update.map((data, idx) => (
        <h2 key={idx} onDoubleClick={() => deleteUserData(data.id)}>
          {data.userId} : {data.userEmail}
        </h2>
      ))}
    </div>
  );
}
