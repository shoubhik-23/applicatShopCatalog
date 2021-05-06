import { makeStyles } from "@material-ui/core";

export const style = makeStyles((theme) => ({
  main: {
    boxSizing: "border-box",
    width: "100vw",
    padding: "20px 5% 0px",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    zIndex: 999,
    position: "fixed",
    left: 0,
    top: 0,
    borderRadius: 0,
  },
  logo: {
    height: "auto",
  },
  nav: {
    border: "solid",
    display: "flex",
  },
  navItem: {
    fontSize: 14,
    color: "#35332B",
    padding: "0px 17px",
    paddingBottom: 15,
    cursor: "pointer",
    fontWeight: 500,
  },
  activeNav: {
    color: "#419168",
    borderBottom: "2px solid #419168",
  },
  prof: {
    marginTop: "4px",
    zIndex: 2000,
    cursor: "pointer",
  },
  profileImage: {
    height: 33,
    width: "auto",
  },
}));
