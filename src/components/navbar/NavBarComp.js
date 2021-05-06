import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { style } from "./navbar.style";
import Logo from "../assets/images/logo2.png";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const NavbarComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = style();
  const history = useHistory();

  const navItem = [
    { name: "Shop", path: "" },
    { name: "Cart", path: "cart" },
    { name: "Order", path: "orders" },
  ];

  return (
    <Paper elevation={2} className={classes.main}>
      <Box style={{ width: 100, height: 50 }}>
        {" "}
        <img style={{ width: "100%", height: "100%" }} src={Logo} alt="logo" />
      </Box>

      <Box className={classes.nav}>
        {navItem.map((nav) => (
          <Typography
            key={nav.path}
            onClick={() =>
              props.active !== nav.path && history.replace(`/${nav.path}`)
            }
            className={clsx(
              classes.navItem,
              props.active === nav.path && classes.activeNav
            )}
          >
            {nav.name}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default NavbarComponent;
