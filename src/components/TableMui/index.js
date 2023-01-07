import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteTransactionData } from "../../container/Home/store/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableMui() {
  const [transactionData, setTransactionData] = React.useState([]);

  const data = useSelector((state) => state.transaction.transactionData);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(data);
    setTransactionData([...data]);
  }, [data]);

  const handleDelete = (i) => {
    dispatch(handleDeleteTransactionData(i));
  };

  return (
    <TableContainer component={Paper} sx={{ width: "80%", margin: "0 auto" }}>
      <Table sx={{}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Transaction Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionData.map((data, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="right">{data.amount}</StyledTableCell>
              <StyledTableCell align="right">{data.type}</StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <DeleteIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleDelete(i);
                  }}
                />{" "}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
