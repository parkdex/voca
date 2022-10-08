import { useParams } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Word from './Word';

const Day = function() {
  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  if(words.length <= 0) {
    return (
      <span>
        <h3>loading...</h3>
      </span>
    )
  }
  // 로딩화면

  return (
    <div>
      <h2>day : {day}</h2>
      <table>
        <tbody>
          {
            words.map(item => (
              <Word item={item} key={item.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )  
};

export default Day;