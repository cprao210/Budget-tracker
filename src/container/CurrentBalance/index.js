import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledCurrentBalance } from "./CurrentBalance.styled";

const Balance = () => {
  const transactionData = useSelector(
    (state) => state.transaction.transactionData
  );

  const [totalBalance, setTotalBalance] = useState({
    expense: 0,
    income: 0,
    balance: 0,
  });

  useEffect(() => {
    let expense = 0;
    let income = 0;
    for (let index = 0; index < transactionData.length; index++) {
      const element = transactionData[index];
      console.log(element);
      if (element.type === "EXPENSE") {
        expense = expense + parseInt(element.amount);
      } else {
        income = income + parseInt(element.amount);
      }
    }

    setTotalBalance({
      expense: expense,
      income: income,
      balance: income - expense,
    });
  }, [transactionData]);

  return (
    <StyledCurrentBalance>
      <Paper
        sx={{ width: "auto" }}
        className="paper_mui"
        variant="outlined"
        square
      >
        <h3>Balance</h3>
        <p>{totalBalance.balance}</p>
      </Paper>
      <Paper
        sx={{ width: "auto" }}
        className="paper_mui"
        variant="outlined"
        square
      >
        <h3>Income</h3>
        <p>{totalBalance.income}</p>
      </Paper>
      <Paper
        sx={{ width: "auto" }}
        className="paper_mui"
        variant="outlined"
        square
      >
        <h3>Expense</h3>
        <p>{totalBalance.expense}</p>
      </Paper>
    </StyledCurrentBalance>
  );
};

export default Balance;
