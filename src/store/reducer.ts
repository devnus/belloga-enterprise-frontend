import { combineReducers } from "redux";
import tokenReducer from "../slices/Auth";

const rootReducer = combineReducers({
  authToken: tokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
