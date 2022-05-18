import { Container, TableFooter } from "@mui/material";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../context/ClientContext";

const rows = [];

const CartPage = () => {
  const data = React.useContext(clientContext);
  const { getProductsFromCart, myCart, changeCountProductInCart } = data;

  console.log(myCart);

  useEffect(() => {
    getProductsFromCart();
  }, []);
  if (!myCart) {
    return <h2>Loading...</h2>;
  }

  if (myCart.products.length === 0) {
    return <h2>Корзина пуста</h2>;
  }

  return (
    <div>
      <Container>
        <h2>Корзина</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Название</TableCell>
                <TableCell align="center">Фото</TableCell>
                <TableCell align="center">Цена</TableCell>
                <TableCell align="center">Кол-во</TableCell>
                <TableCell align="center">Сумма</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myCart.products.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.product.name}
                  </TableCell>
                  <TableCell align="center">
                    <img width={100} src={item.product.image} alt="" />
                  </TableCell>
                  <TableCell align="center">{item.product.price}$</TableCell>
                  <TableCell align="center">
                    <input
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        changeCountProductInCart(
                          item.product.id,
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{item.subPrice}$</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell align="right" colSpan={4}>
                  <h2>Итоговая сумма</h2>
                </TableCell>
                <TableCell align="center">
                  <h2> {myCart.totalPrice}$</h2>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default CartPage;
