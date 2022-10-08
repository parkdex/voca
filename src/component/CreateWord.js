import { useRef, useState } from "react";
import useFetch from "./hooks/useFetch";
import {useNavigate} from "react-router-dom";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");  
  const engRef = useRef(() => null);
  const korRef = useRef(() => null);
  const dayRef = useRef(() => null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(() => false);

  function onSubmit(e) {
    e.preventDefault(); // 새로고침 방지
    if(isLoading === false) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
      method: "POST", // insert
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "day": Number(dayRef.current.value),
        "eng": engRef.current.value,
        "kor": korRef.current.value,
        "isDone": false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('등록 완료');        
        navigate(`/day/${Number(dayRef.current.value)}`);
        setIsLoading(false);
      }
    });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      {/* input area 1 */}
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      {/* input area 2 */}
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((item) => (
            <option key={item.id} value={item.day}>
              {item.day}
            </option>
          ))}
        </select>
      </div>
      {/* input area 3 */}
      <button style={{
        opacity : (isLoading === true) ? 0.3 : 1,
      }}>{(isLoading === true) ? '저장 중...' : '저장'}</button>
    </form>
  );
}
