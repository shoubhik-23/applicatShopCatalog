import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Box } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h3
              style={{ textAlign: "center", marginBottom: 20 }}
              id="transition-modal-title"
            >
              Reach us out at
            </h3>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <MailOutlineIcon
                fontSize="small"
                style={{ color: "rgb(232, 119, 22)", marginRight: 10 }}
              ></MailOutlineIcon>
              <p id="transition-modal-description">shoubhik2396@gmail.com</p>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <PhoneIcon
                style={{ color: "rgb(232, 119, 22)", marginRight: 10 }}
                fontSize="small"
              ></PhoneIcon>
              <p id="transition-modal-description">shoubhik2396@gmail.com</p>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
