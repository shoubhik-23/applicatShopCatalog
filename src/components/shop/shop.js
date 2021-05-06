import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ShopCard from "./shopCard";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../assets/images/redmi6.png";
import K20 from "../assets/images/k20.png";

import {
  FilterListOutlined,
  HighlightOff,
  ImportExport,
} from "@material-ui/icons";
import { style } from "./style";

const Shop = (props) => {
  const classes = style();

  const [brand, setBrand] = React.useState("");
  const [ram, setRam] = useState("");
  const [os, setOs] = useState("");

  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangeRam = (event) => {
    setRam(event.target.value);
  };
  const handleChangeOS = (event) => {
    setOs(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
  const [visibleArray, setVisibleArray] = useState([
    {
      id: 1,
      brand: "Xiaomi",
      name: "Redmi6 Pro",
      price: 9000,
      image: Logo,
      ram: 2,
      os: "A",
    },
    {
      id: 2,
      brand: "Xiaomi",
      name: "RedmiK20 Pro",
      price: 25000,
      image: K20,
      os: "A",
      ram: 8,
    },
    {
      id: 3,
      brand: "Apple",
      name: "Iphone 5",
      price: 25400,
      image: K20,
      ram: 4,
      os: "I",
    },
    {
      id: 4,
      brand: "Samsung",
      name: "Galaxy s",
      price: 20000,
      image: Logo,
      ram: 6,
      os: "A",
    },
    {
      id: 5,
      brand: "Samsung",
      name: "Galaxy J2",
      price: 7000,
      image: K20,
      ram: 4,
      os: "I",
    },
    {
      id: 6,
      brand: "OnePlus",
      name: "3T",
      price: 30000,
      image: Logo,
      ram: 6,
      os: "A",
    },
    {
      id: 7,
      brand: "OnePlus",
      name: "2T",
      price: 15000,
      image: K20,
      ram: 4,
      os: "A",
    },
    {
      id: 8,
      brand: "Xiaomi",
      name: "Redmi 3s",
      price: 7000,
      image: Logo,
      ram: 2,
      os: "A",
    },
  ]);

  const [cardArray, setCardArray] = useState([
    {
      id: 1,
      brand: "Xiaomi",
      name: "Redmi6 Pro",
      price: 9000,
      image: Logo,
      ram: 2,
      os: "A",
    },
    {
      id: 2,
      brand: "Xiaomi",
      name: "RedmiK20 Pro",
      price: 25000,
      image: K20,
      os: "A",
      ram: 8,
    },
    {
      id: 3,
      brand: "Apple",
      name: "Iphone 5",
      price: 25400,
      image: K20,
      ram: 4,
      os: "I",
    },
    {
      id: 4,
      brand: "Samsung",
      name: "Galaxy s",
      price: 20000,
      image: Logo,
      ram: 6,
      os: "A",
    },
    {
      id: 5,
      brand: "Samsung",
      name: "Galaxy J2",
      price: 7000,
      image: K20,
      ram: 4,
      os: "I",
    },
    {
      id: 6,
      brand: "OnePlus",
      name: "3T",
      price: 30000,
      image: Logo,
      ram: 6,
      os: "A",
    },
    {
      id: 7,
      brand: "OnePlus",
      name: "2T",
      price: 15000,
      image: K20,
      ram: 4,
      os: "A",
    },
    {
      id: 8,
      brand: "Xiaomi",
      name: "Redmi 3s",
      price: 7000,
      image: Logo,
      ram: 2,
      os: "A",
    },
  ]);
  const resetChanges = () => {
    setVisibleArray([...cardArray]);
    setBrand("");
    setRam("");
    setOs("");

    handleCloseDialog();
  };

  const submitChanges = () => {
    let temp = [...cardArray];
    if (brand == "Xiaomi") {
      temp = temp.filter((el) => el.brand === "Xiaomi");
      setVisibleArray(temp);
    } else if (brand == "Samsung") {
      temp = temp.filter((el) => el.brand === "Samsung");
      setVisibleArray(temp);
    } else if (brand == "Apple") {
      temp = temp.filter((el) => el.brand === "Apple");
      setVisibleArray(temp);
    } else if (brand == "OnePlus") {
      temp = temp.filter((el) => el.brand === "OnePlus");
      setVisibleArray(temp);
    }
    if (ram == 2) {
      temp = temp.filter((el) => el.ram == 2);
      setVisibleArray(temp);
    } else if (ram == 4) {
      temp = temp.filter((el) => el.ram == 4);
      setVisibleArray(temp);
    } else if (ram == 6) {
      temp = temp.filter((el) => el.ram == 6);
      setVisibleArray(temp);
    }
    if (os == "A") {
      temp = temp.filter((el) => el.os == "A");
      setVisibleArray(temp);
    } else if (os == "I") {
      temp = temp.filter((el) => el.os == "I");
      setVisibleArray(temp);
    }

    handleCloseDialog();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLowToHigh = () => {
    let temp = cardArray.sort((a, b) => a.price - b.price);
    setVisibleArray(temp);
    setAnchorEl(null);
  };
  const handleHighToLow = () => {
    let temp = cardArray.sort((a, b) => b.price - a.price);
    setVisibleArray(temp);
    setAnchorEl(null);
  };
  const onSearchHandle = (e) => {
    if (e.target.value) {
      let filter = cardArray.filter((item) => {
        return (
          item.brand !== null &&
          (item.brand.toLowerCase().indexOf(e.target.value.toLowerCase()) >
            -1 ||
            item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
        );
      });
      setVisibleArray(filter);
    } else {
      setVisibleArray(cardArray);
    }
  };
  return (
    <>
      <Grid
        container
        spacing={5}
        style={{
          justifyContent: "space-evenly",
        }}
      >
        <Grid item xs={6} s>
          <TextField
            className={classes.searchField}
            onChange={onSearchHandle}
            size="small"
            fullWidth
            variant="outlined"
            label="Explore"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickOpenDialog}
          >
            Filter By <FilterListOutlined></FilterListOutlined>
          </Button>

          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Sort By <ImportExport></ImportExport>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLowToHigh}>Low To High</MenuItem>

            <MenuItem onClick={handleHighToLow}>High To Low</MenuItem>
          </Menu>
        </Grid>

        {visibleArray.map((el) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <ShopCard data={el}></ShopCard>
            </Grid>
          );
        })}
        <Dialog maxWidth="xs" open={open} onClose={handleCloseDialog}>
          <DialogTitle style={{ padding: "28px 40px 40px 60px " }}>
            <Grid item xs={12} style={{ textAlign: "end" }}>
              <HighlightOff
                onClick={handleCloseDialog}
                style={{ color: "#DAD9D8" }}
              />
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
                  Filter
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3} style={{}}>
                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      size="small"
                      variant="outlined"
                      className={classes.searchField}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Brand
                      </InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Brand"
                        value={brand}
                        onChange={handleChangeBrand}
                      >
                        <MenuItem value={"Xiaomi"}>Xiaomi</MenuItem>
                        <MenuItem value={"Samsung"}>Samsung</MenuItem>
                        <MenuItem value={"Apple"}>Apple</MenuItem>
                        <MenuItem value={"OnePlus"}>OnePlus</MenuItem>
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
                        Ram
                      </InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Ram"
                        value={ram}
                        onChange={handleChangeRam}
                      >
                        <MenuItem value={2}>2GB</MenuItem>
                        <MenuItem value={4}>4GB</MenuItem>
                        <MenuItem value={6}>6GB</MenuItem>
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
                        OS
                      </InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="OS"
                        value={os}
                        onChange={handleChangeOS}
                      >
                        <MenuItem value={"A"}>Android</MenuItem>
                        <MenuItem value={"I"}>IOS</MenuItem>
                      </Select>
                    </FormControl>
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
                <Button variant="contained" size="small" onClick={resetChanges}>
                  Reset
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={submitChanges}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </DialogTitle>
        </Dialog>
      </Grid>
    </>
  );
};
export default Shop;
