import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div> 설명 </div>
      <Link to="/signIn"> 로그인</Link>
      <Link to="/signUp"> 회원가입 </Link>
      <Link to="/labeling/detail">라벨링 디테일</Link>
      <Link to="/labeling/request">라벨링 신청하기</Link>
      <Link to="/labeling/list">라벨링 리스트</Link>
    </>
  );
}

export default MainPage;
