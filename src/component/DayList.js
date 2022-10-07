import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DayList = function () {
  const [days, setDays] = useState(() => []);

  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    // need fetch error handle
    fetch("http://localhost:3001/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }

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
