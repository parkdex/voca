import dummy from './db/data.json'

const Day = function() {
  return (
    <table>
      <tbody>
        {
          dummy.words.map(item => (
            //console.log('ddd', item)

            <tr key={item.id}>
              <td>{item.eng}</td>
              <td>{item.kor}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )  
};

export default Day;