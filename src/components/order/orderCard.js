import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

function OrderCard(props) {
  console.log(props.data);
  return (
    <>
      <Paper elevation={2} style={{ backgroundColor: "#F8F5E8" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box style={{ width: 100 }}>
              <img
                style={{ width: "100%" }}
                src={props.data.image}
                alt=""
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
              {props.data.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ textAlign: "center", color: "#E87716" }}>
              ₹ {props.data.price}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default OrderCard;
