/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MessageComponent from "../message/message";

function ShopCard(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const increment = () => {
    dispatch({
      type: "add",
      data: { ...props },
    });
  };

  const addToCart = () => {
    setAdd(true);
    increment();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Paper elevation={2} style={{ backgroundColor: "#F8F5E8" }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box style={{ width: 100 }}>
              <img
                style={{ width: "100%" }}
                src={props.data.image}
                alt="image"
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{ textAlign: "center", fontSize: 18, fontWeight: 600 }}
            >
              {props.data.brand}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ textAlign: "center" }}>
              {props.data.name}&nbsp;( {props.data.ram}GB)
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography style={{ textAlign: "center", color: "#E87716" }}>
              ₹ {props.data.price}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 15,
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: add ? "#2958C1" : "#419168",
                color: "white",
              }}
              onClick={addToCart}
            >
              {add ? "Add More" : "Add to Cart"}
            </Button>
            <MessageComponent
              handleClose={handleClose}
              success
              open={open}
              message={"Added"}
            ></MessageComponent>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ShopCard;
