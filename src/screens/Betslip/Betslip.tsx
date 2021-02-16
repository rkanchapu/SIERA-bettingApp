import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { SelectionItem } from "../../TypescriptTypes/Events";
import BetSlipTable from "./BetSlipTable";
import { Button } from "react-bootstrap";

/* props of the component */
export interface Props {
  bets: Array<SelectionItem>;
  REMOVE_FROM_BET_SLIP: (id: String) => void;
}

export interface RowItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sum: number;
}

const Betslip: React.FC<Props> = ({ bets, REMOVE_FROM_BET_SLIP }) => {
  const [rows, setRows] = useState([] as any);

  /* generate table rows on page load */
  const generateRowsOnLoad = () => {
    const getQuantity = (id: string) => {
      const rowObj = rows.find((row: any) => row.id === id);
      if (rowObj) {
        return rowObj.quantity;
      }
      return 1;
    };
    const getSum = (id: string, price: number) => {
      const rowObj = rows.find((row: any) => row.id === id);
      if (rowObj) {
        return rowObj.price * rowObj.quantity;
      }
      return price;
    };
    const rowArray: Array<RowItem> = [];
    let rowObj = {} as any;
    bets.forEach((bet) => {
      rowObj = { ...bet };
      rowObj.quantity = getQuantity(bet.id);
      rowObj.sum = getSum(bet.id, bet.price);
      rowArray.push(rowObj);
    });
    setRows(rowArray);
  };

  useEffect(() => {
    generateRowsOnLoad();
  }, [bets]);

  /* change quantity field */
  const changeQuantity = (id: string, value: number) => {
    const rowArray: Array<RowItem> = [];
    let rowObj = {} as any;
    rows.forEach((bet: any) => {
      rowObj = { ...bet };
      if (bet.id === id) {
        rowObj.quantity = value;
        rowObj.sum = bet.price * value;
      }
      rowArray.push(rowObj);
    });
    setRows(rowArray);
  };

  return (
    <div className="mb-5">
      {rows.length > 0 && (
        <>
          <BetSlipTable
            rows={rows}
            changeQuantity={changeQuantity}
            REMOVE_FROM_BET_SLIP={REMOVE_FROM_BET_SLIP}
          />
          <br />
          <div className="text-right">
            <Button>Place your bet</Button>
          </div>
        </>
      )}
      {rows.length === 0 && (
        <Typography variant="h3" paragraph className="word-wrap-break">
          Place your bets by choosing a sport from the side menu
        </Typography>
      )}
    </div>
  );
};

export default Betslip;
