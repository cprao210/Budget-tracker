import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleTransactionData } from "../../container/Home/store/action";
import { TransactionType } from "./constant";
import { StyledTransactionForm } from "./TransactionForm.styled";

const TransactionForm = ({ handleClose }) => {
  const [formObj, setFormObj] = useState({
    name: "",
    type: "",
    amount: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(handleTransactionData(formObj));
    handleClose();
    setFormObj({ name: "", type: "", amount: "" });
  };

  return (
    <StyledTransactionForm
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <h2 className="form_title"> Transaction Form</h2>

      <TextField
        className="standard-basic"
        label="Transaction Name"
        name="name"
        value={formObj.name}
        onChange={handleChange}
        variant="standard"
      />

      <TextField
        id="standard-select-currency"
        select
        className="standard-basic"
        label="Transaction Type"
        name="type"
        value={formObj.type}
        onChange={handleChange}
        variant="standard"
      >
        {TransactionType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className="standard-basic"
        label="Transaction Amount"
        name="amount"
        type="number"
        value={formObj.amount}
        onChange={handleChange}
        variant="standard"
      />

      <Button
        className="btn"
        variant="contained"
        sx={{
          marginTop: "20px",
          backgroundColor: "black",
          color: "white",
        }}
        disabled={!formObj.name || !formObj.amount || !formObj.type}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </StyledTransactionForm>
  );
};

export default TransactionForm;
