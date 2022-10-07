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
        <a href="#x" className="link">단어 추가</a>
        <a href="#x" className="link">Day 추가</a>
      </div>
    </div>
  );
};

export default Header;