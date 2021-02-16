import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

export interface RowItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sum: number;
}

/* props of the component */
export interface Props {
  rows: Array<RowItem>;
  changeQuantity: (id: string, value: number) => void;
  REMOVE_FROM_BET_SLIP: (id: String) => void;
}

const BetSlipTable: React.FC<Props> = ({
  rows,
  changeQuantity,
  REMOVE_FROM_BET_SLIP,
}) => {
  const classes = useStyles();

  /* calculate total sum */
  function totalSum(items: RowItem[]) {
    return items.map(({ sum }) => sum).reduce((sum, i) => sum + i, 0);
  }

  const invoiceTotal = totalSum(rows);

  /* runs when user changes the quantity */
  const onChangeQty = (e: any, rowId: string) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      changeQuantity(rowId, value);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4} className="font-weight-bold">
              Details
            </TableCell>
            <TableCell align="right" className="font-weight-bold">
              Amount
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-weight-bold">Name</TableCell>
            <TableCell align="right" className="font-weight-bold">
              Price
            </TableCell>
            <TableCell align="right" className="font-weight-bold">
              Qty.
            </TableCell>
            <TableCell align="right" className="font-weight-bold"></TableCell>
            <TableCell align="right" className="font-weight-bold">
              Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <TextField
                  id="outlined-number"
                  label="Quantity"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e) => onChangeQty(e, row.id)}
                  value={row.quantity.toString()}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label={`Remove selection`}
                  color="inherit"
                  onClick={() => REMOVE_FROM_BET_SLIP(row.id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">{ccyFormat(row.sum)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={4} />
            <TableCell colSpan={3} className="font-weight-bold">Total</TableCell>
            <TableCell align="right" className="font-weight-bold">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BetSlipTable;
