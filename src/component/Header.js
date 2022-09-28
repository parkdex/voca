const Header = function () {
  return (
    <div className="header">
      <h1>
        <a href="/">voca tutorial</a>
      </h1>
      <div className="menu">
        <a href="#x" className="link">단어 추가</a>
        <a href="#x" className="link">Day 추가</a>
      </div>
    </div>
  );
};

export default Header;