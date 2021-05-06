import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

import SuccessIcon from "../assets/images/success.svg";
import ErrorIcon from "../assets/images/error.svg";

const MessageComponent = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        <Typography align="right">
          <ClearIcon onClick={props.handleClose} />
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              style={{ padding: "0px 20px" }}
            >
              <img
                src={props.success ? SuccessIcon : ErrorIcon}
                style={{ width: 54, height: 54, marginBottom: 30 }}
                alt=""
              />

              <Typography
                style={{ fontSize: 21, fontWeight: 600, marginBottom: 10 }}
                align="center"
              >
                {props.success ? "Success" : "Error"}
              </Typography>

              <Typography
                style={{ fontSize: 14, opacity: "70%", marginBottom: 50 }}
                align="center"
              >
                {props.message}
              </Typography>

              <Button
                variant="outlined"
                color="default"
                style={{ marginBottom: 20 }}
                fullWidth
                onClick={props.handleClose}
              >
                Ok
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default MessageComponent;
