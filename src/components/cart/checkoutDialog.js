import React, { useState } from "react";
import { HighlightOff } from "@material-ui/icons";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Dialog,
  Button,
  DialogTitle,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { style } from "./style";
import MessageComponent from "../message/message";
import { useHistory } from "react-router";

function CheckoutDialog(props) {
  const history = useHistory();
  const classes = style();
  const [messageOpen, setMessageOpen] = useState(false);

  const dialogClose = (value) => {
    props.closeDialog();
  };
  const handleCloseMessage = () => {
    props.add();

    history.push("/orders");
  };
  const proceedHandler = () => {
    setMessageOpen(true);
  };
  return (
    <>
      <Dialog maxWidth="xs" open={props.open} onClose={dialogClose}>
        <DialogTitle style={{ padding: "28px 40px 40px 60px " }}>
          <Grid item xs={12} style={{ textAlign: "end" }}>
            <HighlightOff onClick={dialogClose} style={{ color: "#DAD9D8" }} />
          </Grid>
          <Grid container style={{ paddingRight: 20 }}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <Typography style={{ fontSize: "22px", fontWeight: 500 }}>
                Shipping Info
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} style={{ paddingRight: "30px" }}>
                <Grid item xs={6}>
                  <TextField
                    className={classes.searchField}
                    size="small"
                    fullWidth
                    variant="outlined"
                    label="Firse Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.searchField}
                    size="small"
                    fullWidth
                    variant="outlined"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    size="small"
                    variant="outlined"
                    className={classes.searchField}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Location City
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Delivery Type"
                    >
                      <MenuItem value={"P"}>Gurgaon</MenuItem>
                      <MenuItem value={"S"}>Rohini</MenuItem>
                      <MenuItem value={"S"}>Pitampure</MenuItem>

                      <MenuItem value={"S"}>Shahdra</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    size="small"
                    variant="outlined"
                    className={classes.searchField}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Delivery Type
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Delivery Type"
                    >
                      <MenuItem value={"P"}>Premium Delivery</MenuItem>
                      <MenuItem value={"S"}>Standart Delivery</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    className={classes.searchField}
                    size="small"
                    fullWidth
                    variant="outlined"
                    label="Full Address"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "30px",
              }}
            >
              <Button variant="contained" size="small" onClick={dialogClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={proceedHandler}
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>
      </Dialog>
      <MessageComponent
        handleClose={handleCloseMessage}
        success
        open={messageOpen}
        message={"Thank You For Shopping with Us!"}
      ></MessageComponent>
    </>
  );
}

export default CheckoutDialog;
