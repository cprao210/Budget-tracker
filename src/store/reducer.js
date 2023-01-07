import { combineReducers } from "redux";
import TransactionReducer from "../container/Home/store/reducer";

const rootReducer = combineReducers({
  transaction: TransactionReducer,
});

export { rootReducer };
