import { Link } from "react-router-dom";

const EmptyPage = function() {

  return (
    <div>
      <h2>잘못된 접근 입니다.</h2>
      <Link to={"/"}>처음으로</Link>
    </div>
  )  
};

export default EmptyPage;