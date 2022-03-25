import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import commentsReducer from "./comments/reducer";
import postsReducer from "./posts/reducer";
import postsDetailReducer from "./postList/reducer";

const rootReducer = combineReducers({
  subscribersReducer,
  commentsReducer,
  postsReducer,
  postsDetailReducer
})

export default rootReducer