//import { OtherReducer } from "./otherReducer";
import { combineReducers } from "redux";
import { historys } from "./historys";
import { authentication } from "./authentication";

export const Reducers = combineReducers({
  historys: historys,
  authentication: authentication,
});
