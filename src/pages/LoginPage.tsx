import React, { useState } from "react";

const LoginPageBody = ({}) => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div>로그인 바디</div>
    </>
  );
};

const LoginPage = ({}) => {
  return (
    <>
      <LoginPageBody />
    </>
  );
};

export default LoginPage;
