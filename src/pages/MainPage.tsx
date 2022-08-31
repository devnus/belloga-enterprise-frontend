import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div> 설명 </div>
      <Link to="/login"> 로그인</Link>
      <Link to="/labeling/detail">라벨링 디테일</Link>
    </>
  );
}

export default MainPage;
