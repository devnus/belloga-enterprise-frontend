import axios from "axios";
import { u } from "msw/lib/glossary-dc3fd077";

export async function signIn({
  password,
  userEmail,
  setIsLoggedIn,
  setLoginError,
}: any) {
  //obj 형태로 전달받음
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/account/v1/auth/signin/custom/account`,
      {
        password: password,
        email: userEmail,
      }
    );

    //accessToken을 저장
    localStorage.setItem("belloga-page", data.response.accessToken);
    localStorage.setItem("belloga-refresh", data.response.refreshToken);

    if (localStorage.getItem("belloga-page")) {
      setIsLoggedIn(true);
    }

    window.location.href = "/labeling/list";
  } catch (error) {
    setLoginError(() => true);
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

type CreateUserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

type userSignUpInfo = {
  password: string;
  phoneNumber: string;
  organization: string;
  name: string;
  email: string;
};

export async function createUser(userInfo: userSignUpInfo) {
  //{}를 씌우지 않고 그냥 전달받음
  try {
    const { data } = await axios.post<CreateUserResponse>(
      `${process.env.REACT_APP_API_URL}/api/account/v1/auth/signup/custom/account/enterprise`,
      {
        password: userInfo.password,
        phoneNumber: userInfo.phoneNumber,
        organization: userInfo.organization,
        name: userInfo.name,
        email: userInfo.email,
      }
    );
    window.location.href = "/signIn";
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
