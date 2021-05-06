import { Grid, Typography, Box, Button } from "@material-ui/core";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import OrderCard from "./orderCard";
import ForwardIcon from "@material-ui/icons/Forward";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import HomeIcon from "@material-ui/icons/Home";
import NavbarComponent from "../navbar/NavBarComp";

function Order(props) {
  const state = useSelector((state) => state.orderItems);
  const history = useHistory();

  return (
    <>
      <Grid container spacing={5} style={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: 24,
              marginLeft: 20,
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            My Orders
          </Typography>
        </Grid>
        {state.length > 0 ? (
          state.map((el) => (
            <Grid item xs={6} sm={4} md={3}>
              <OrderCard data={el}></OrderCard>
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography> No Orders yet!</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box style={{ textAlign: "center", marginTop: 60 }}>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<HomeIcon></HomeIcon>}
              onClick={() => history.push("/")}
            >
              Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Order;
