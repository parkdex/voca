import { useState } from "react";
import styles from "./Hello.module.css";
import ShowUserName from "./ShowUserName";

const Hello = function (props) {

  // state init base - 첫 load 시에만 초기값이 박힘
  const [name, setName] = useState(() => props.name);



  function clickButton1 () {
    setName('parkdex');
    console.log(props);
  }

  function clickButton2 () {
    setName('...');
    console.log(props);
  }

  return (
    <div>
      <ShowUserName name={name} />
      <button onClick={clickButton1} className={styles.box}>button 1</button>
      <button onClick={clickButton2} className={styles.box}>button 2</button>
    </div>
  );
};

export default Hello;