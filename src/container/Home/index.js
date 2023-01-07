import { Button } from "@mui/material";
import React, { useState } from "react";
import SimpleBackdrop from "../../common-components/Backdrop";
import TableMui from "../../components/TableMui";
import TransactionForm from "../../components/TransactionForm";
import { StyledHome } from "./Home.styled";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledHome>
      <div className="heading">
        <div className="">All Transactions</div>
        <Button
          className="btn"
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
          onClick={handleToggle}
        >
          New Transaction
        </Button>
      </div>
      <TableMui />
      <SimpleBackdrop ModelStatus={open} handleClose={handleClose}>
        <TransactionForm handleClose={handleClose} />
      </SimpleBackdrop>
    </StyledHome>
  );
};

export default Home;
