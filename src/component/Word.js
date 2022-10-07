import { useState } from "react";

export default function Work({item}) {

  const [isShow, setIsShow] = useState(() => false);
  const [isDone, setIsDone] = useState(() => item.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type={"checkbox"} checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{item.eng}</td>
      <td>{isShow && item.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
