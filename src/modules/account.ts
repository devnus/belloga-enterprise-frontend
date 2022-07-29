import { takeLatest, takeEvery } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import { UserData } from "../@types/data";
import { ApiType, FailureAction } from "../@types/modules";

export const LOG_IN = "account/LOG_IN" as const;
const LOG_IN_SUCCESS = "account/LOG_IN_SUCCESS" as const;
const LOG_IN_FAILURE = "account/LOG_IN_FAILURE" as const;

const GET_USER_DATA = "account/GET_USER_DATA" as const;
const GET_USER_DATA_SUCCESS = "account/GET_USER_DATA_SUCCESS" as const;
const GET_USER_DATA_FAILURE = "account/GET_USER_DATA_FAILURE" as const;

export const logIn = (userID: string, password: string) => ({
  type: LOG_IN,
  userID: userID,
  password: password,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});

function* GetUserDataSaga() {}

function* LogInSaga(action: ReturnType<typeof logIn>) {}

export function* AccountSaga() {
  yield takeLatest(LOG_IN, LogInSaga);
  yield takeLatest(GET_USER_DATA, GetUserDataSaga);
}

type AccountState = {
  isLoggedIn: boolean;
  userData: UserData | Record<string, never>;
};

const initialState: AccountState = {
  isLoggedIn: false,
  userData: {},
};

export type AccountAction =
  | AccountSuccessAction
  | AccountDispatchAction
  | AccountFailureAction;

export type AccountDispatchAction = ReturnType<typeof logIn>;

export type AccountSuccessAction =
  | {
      type: typeof GET_USER_DATA_SUCCESS;
      userData: UserData;
    }
  | {
      type: typeof LOG_IN_SUCCESS;
      isLoggedIn: true;
      userData: Record<string, never>;
    };

export type AccountFailureAction = FailureAction<AccountDispatchAction>;

export default function accountReducer(
  state: AccountState = initialState,
  action: AccountAction
) {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.userData,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.userData,
      };
    default:
      return state;
  }
}
