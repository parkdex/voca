import {Link} from 'react-router-dom';

const Header = function () {
  return (
    <div className="header">
      <h1>
        <Link to={"/"}>
          voca tutorial
        </Link>
      </h1>
      <div className="menu">
        <Link to={"/create_word"} className="link">단어 추가</Link>
        <Link to={"/create_day"} className="link">Day 추가</Link>
      </div>
    </div>
  );
};

export default Header;