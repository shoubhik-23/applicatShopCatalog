import { Box, Chip } from "@material-ui/core";
import React, { useState } from "react";

import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Modal from "./modal";
function NavBar(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const state = useSelector((state) => state.cartItems);
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: 50 }}>
        <Navbar.Brand>
          <Box
            onClick={() => history.push("/")}
            style={{ width: 50, height: 40 }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={Logo}
              alt=""
            ></img>
          </Box>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/cart")}>
              Cart <Chip size="small" label={state.length} />
            </Nav.Link>{" "}
            <Nav.Link onClick={() => history.push("/orders")}>Order</Nav.Link>
          </Nav>
          <Form inline>
            <Button onClick={() => setOpen(true)}>
              <HelpOutlineIcon></HelpOutlineIcon>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Modal open={open} handleClose={handleClose}></Modal>
    </>
  );
}

export default NavBar;
