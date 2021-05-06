import { makeStyles } from "@material-ui/core";

export const style = makeStyles(() => ({
  main: {
    padding: "75px 2px 20px",
    backgroundColor: "#F8F8F8",
    overflowX: "hidden",
    minHeight: "calc(100vh - 40px)",
    maxWidth: 1166,
  },
  section: {
    width: "100%",
    padding: "20px 50px",
  },
  bgGrey: {
    backgroundColor: "#F8F8F7",
    padding: "26px 30px 100px 30px",
  },
  fontSize16: {
    fontSize: 14,
    fontWeight: "500",
  },
  fontSize20: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    color: "#35332B",
  },
  fontSize14: {
    color: "#35332B",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 500,
  },
  fontSize22: {
    fontSize: 18,
    color: "#908F8B",
    margin: "10px 0px",
  },

  profileBox: {
    width: "80px",
    height: "80px",
    overflow: "hidden",
    borderRadius: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  activeNav: {
    cursor: "pointer",
    borderBottom: "3px solid #419168",
    fontSize: "18px",
    fontWeight: 500,
    marginRight: "60px",
  },
  inActiveNav: {
    fontSize: "18px",
    fontWeight: 500,
    opacity: "65%",
    marginRight: "60px",
    cursor: "pointer",
  },

  searchField: {
    "& input": {
      fontSize: 12,
    },
    "& label": {
      fontSize: 12,
    },
  },
  fontawesome: {
    color: "#DA7C34",
    cursor: "pointer",
  },
  radioSpan: {
    "& span": {
      fontSize: "13px",
    },
  },
}));
