import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <div> 설명 </div>
      <div>
        <Link to="/join"> 회원가입</Link>
      </div>
    </>
  );
}

export default MainPage;
