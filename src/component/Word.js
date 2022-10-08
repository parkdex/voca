import { useState } from "react";

export default function Work({ item }) {
  const [itemState, setItemState] = useState(() => item);
  const [isShow, setIsShow] = useState(() => false);
  const [isDone, setIsDone] = useState(() => item.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${item.id}`, {
      method: "PUT", // update
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function toggleDelete() {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${item.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setItemState({
            ...itemState,
            id: 0,
          });
        }
      });
    }
  }
  // useEffect(() => {
  //   console.log(itemState);
  // }, [itemState]);

  if(itemState.id === 0) {
    return null;
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type={"checkbox"} checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{item.eng}</td>
      <td>{isShow && item.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del" onClick={toggleDelete}>
          삭제
        </button>
      </td>
    </tr>
  );
}
