import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

type tokenInfo = {
  accessToken: string;
  refreshToken: string;
  authenticated: boolean;
};

export const LoginState = atom<tokenInfo>({
  key: "LoginState",
  default: {
    accessToken: "",
    refreshToken: "",
    authenticated: false,
  },
  effects_UNSTABLE: [persistAtom],
});
