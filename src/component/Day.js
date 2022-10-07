import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';

const Day = function() {

  const day = useParams().day;
  const [words, setWords] = useState(() => []);

  useEffect(() => {
    // need fetch error handle
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

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