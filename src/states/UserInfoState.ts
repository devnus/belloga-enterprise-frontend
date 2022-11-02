import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

type userInfo = {
  phoneNumber: string;
  email: string;
  name: string;
  organization: string;
};

export const UserInfoState = atom<userInfo>({
  key: "User",
  default: {
    phoneNumber: "01012341234",
    email: "default@devnus.com",
    name: "default",
    organization: "defaultOrg",
  },
  effects_UNSTABLE: [persistAtom],
});
