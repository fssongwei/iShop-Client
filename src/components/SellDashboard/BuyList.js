import React from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useOrders } from "./hooks";

const BuyList = () => {
  const [loading, orders] = useOrders("buy");
  if (loading || !orders) return <p>loading ...</p>;
  if (orders.length === 0) return <p>Your have not buy anything yet.</p>;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Purchase Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, id) => {
            return (
              <TableRow key={id}>
                <TableCell>
                  <img
                    src={order.product.pic}
                    alt="pic"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </TableCell>
                <TableCell>{order.product.name}</TableCell>
                <TableCell>{order.product.price}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.amount * order.product.price}</TableCell>
                <TableCell>{order.date.substring(0, 10)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to={{
                      pathname: "/order",
                      state: { ...order, buyOrSell: "buy" },
                    }}
                  >
                    detail
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BuyList;
