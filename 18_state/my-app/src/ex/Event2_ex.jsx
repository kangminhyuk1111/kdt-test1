import React, { useRef, useState } from "react";

export default function Event2_ex() {
  const [list, setList] = useState([]);
  const [board, setBoard] = useState([]);
  const [write, setWrite] = useState({
    userName: "",
    title: "",
  });
  const [search, setSearch] = useState({
    select: "userName",
    searchText: "",
  });
  const [errorLog, setErrorLog] = useState({
    text: "",
    color: "",
  });

  const inputRefUserName = useRef();
  const inputRefTitle = useRef();

  const inputChange = (e) => {
    setWrite({
      ...write,
      [e.target.name]: e.target.value,
    });
  };

  const inputChangeSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log(search);
  };

  const addTable = () => {
    console.log(inputRefUserName.current);
    console.log(inputRefTitle.current);
    if (inputRefUserName.current.value == "") {
      inputRefUserName.current.focus();
      setErrorLog({
        text: "작성자 입력은 필수입니다.",
        color: "red",
      });
      return;
    } else if (inputRefTitle.current.value == "") {
      inputRefTitle.current.focus();
      setErrorLog({
        text: "제목 입력은 필수입니다.",
        color: "red",
      });
      return;
    }
    setList(
      list.concat({
        id: list.length + 1,
        userName: write.userName,
        title: write.title,
      })
    );
    setBoard(
      list.concat({
        id: list.length + 1,
        userName: write.userName,
        title: write.title,
      })
    );
    setErrorLog({
      text: "게시 성공!",
      color: "blue",
    });
  };

  const filteredList = () => {
    console.log(search);
    let searchData = search.select;
    console.log(list[0]["id"]);
    if (searchData == "id") {
      setBoard(list.filter((data) => data.id == Number(search.searchText)));
    } else if (searchData == "userName") {
      setBoard(list.filter((data) => data.userName == search.searchText));
    } else if (searchData == "title") {
      setBoard(list.filter((data) => data.title == search.searchText));
    }
  };

  const viewAll = () => {
    setBoard(list);
  };

  const onKeyPressHandler = (e) => {
    if (e.key == "Enter") {
      addTable();
    }
  };

  return (
    <div>
      <fieldset>
        <legend>글 작성</legend>
        <label htmlFor="userName">작성자 : </label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={inputChange}
          ref={inputRefUserName}
        />
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={inputChange}
          onKeyDown={onKeyPressHandler}
          ref={inputRefTitle}
        />
        <button onClick={addTable}>작성</button>
        <br />
        {errorLog ? (
          <h3 style={{ color: errorLog.color }}>{errorLog.text}</h3>
        ) : (
          ""
        )}
      </fieldset>
      <hr />
      <select name="select" onChange={inputChangeSearch}>
        <option value={"userName"} selected>
          작성자
        </option>
        <option value={"id"}>번호</option>
        <option value={"title"}>제목</option>
      </select>
      <input
        type="text"
        name="searchText"
        id="searchText"
        onChange={inputChangeSearch}
      />
      <button onClick={filteredList}>검색</button>
      <button onClick={viewAll}>전체</button>
      <table border={1} width={700} style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board
            ? board.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.id}</td>
                  <td>{data.userName}</td>
                  <td>{data.title}</td>
                </tr>
              ))
            : "작성된 글이 없습니다.."}
        </tbody>
      </table>
    </div>
  );
}
