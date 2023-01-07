import { deletetabledata } from "../../../utils/TransactionTable";
import { action } from "./action";

const initialState = {
  transactionData: [],
};

const TransactionReducer = (state = initialState, payload = {}) => {
  switch (payload.type) {
    case action.SET_TRANSACTION_DATA:
      return {
        ...state,
        transactionData: [...state.transactionData, payload.data],
      };
    case action.DELETE_TRANSACTION_DATA:
      return {
        ...state,
        transactionData: deletetabledata(state.transactionData, payload.data),
      };

    default:
      return state;
  }
};

export default TransactionReducer;
