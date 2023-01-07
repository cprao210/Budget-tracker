const action = {
  SET_TRANSACTION_DATA: "SET_TRANSACTION_DATA",
  DELETE_TRANSACTION_DATA: "DELETE_TRANSACTION_DATA",
};

export { action };

export const handleTransactionData = (data) => {
  return { type: action.SET_TRANSACTION_DATA, data: data };
};
export const handleDeleteTransactionData = (data) => {
  return { type: action.DELETE_TRANSACTION_DATA, data: data };
};
