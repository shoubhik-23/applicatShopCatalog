import { Grid, Typography, Box, Button } from "@material-ui/core";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./cartCard";
import ForwardIcon from "@material-ui/icons/Forward";
import { useHistory } from "react-router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CheckoutDialog from "./checkoutDialog";

function Cart(props) {
  const history = useHistory();
  const state = useSelector((state) => state.cartItems);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const openDialog = () => {
    setOpen(true);
  };
  const addOrder = () => {
    dispatch({ type: "checkout", data: [...state] });
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <>
      {state.length > 0 ? (
        <Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 40,
              marginLeft: 20,
            }}
          >
            <Typography
              style={{
                fontSize: 24,
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              My Cart
            </Typography>
            <ShoppingCartIcon
              fontSize="large"
              style={{ marginLeft: 30, color: "blue" }}
            ></ShoppingCartIcon>
          </Box>
          <Grid
            container
            spacing={5}
            style={{ justifyContent: "space-evenly" }}
          >
            {state.map((el) => (
              <Grid item xs={6} sm={4} md={3}>
                <CartCard data={el}></CartCard>
              </Grid>
            ))}
          </Grid>

          <Box style={{ textAlign: "center", marginTop: 60 }}>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ForwardIcon></ForwardIcon>}
              onClick={openDialog}
            >
              Proceed To Checkout
            </Button>
          </Box>
          <CheckoutDialog
            add={addOrder}
            open={open}
            closeDialog={closeDialog}
          ></CheckoutDialog>
        </Box>
      ) : (
        <Grid container>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography>
              Oops Your Cart is Empty! Please add items first
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => history.push("/")}
            >
              Click Here To Explore
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Cart;
