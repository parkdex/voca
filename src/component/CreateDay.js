import { useEffect, useState } from "react";

export default function CreateDay() {
  const [dayState, setDayState] = useState(() => []);

  useEffect(() => {
    fetch(`http://localhost:3001/days`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDayState(data);
      })
      .catch((err) => {
        console.error(`fetch('http://localhost:3001/days') error : `, err);
      });
  }, []);

  function clickAddDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST", // insert
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayState.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        setDayState([...dayState, {}]);
        //alert("등록 완료");
      }
    });
  }

  return (
    <div>
      <h3>현재 Day : {dayState.length}</h3>
      <button onClick={clickAddDay}>Add Day</button>
    </div>
  );
}
