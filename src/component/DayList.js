import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const DayList = function () {
  const days = useFetch("http://localhost:3001/days");
  
  if(days.length <= 0) {
    return (
      <span>
        <h3>loading...</h3>
      </span>
    )
  }
  // 로딩화면

  return (
    <div>
      <ul className="list_day">
        {days.map((item) => (
          <li key={item.id}>
            <Link to={"/day/" + item.day}>Day = {item.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayList;
