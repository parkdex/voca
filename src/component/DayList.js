import dummy from './db/data.json'

const DayList = function() {
  return (
    <div>
      <ul className='list_day'>
        {
          dummy.days.map(item => (
            <li key={item.id}>Day = {item.day}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default DayList;