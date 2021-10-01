import { todoReducer } from "./todo.reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todo: todoReducer,
});

export default rootReducers;
