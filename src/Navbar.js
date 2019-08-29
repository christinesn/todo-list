import React from "react";
import { makeStyles, AppBar, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  navbar: {
    padding: "1em",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
  },
  title: {
    color: "#888 !important",
    fontFamily: "Staatliches",
    fontSize: "4em",
    margin: "auto"
  }
}));

export function Navbar() {
  const classes = useStyle();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Typography variant="h6" className={classes.title}>
        to do
      </Typography>
    </AppBar>
  );
}
