import { combineReducers } from "redux";
import { savedPost } from "./savedPost";
import authUser from "./authUser";

const rootReducer = combineReducers({
  savedPost,
   authUser,
});

export default rootReducer;
