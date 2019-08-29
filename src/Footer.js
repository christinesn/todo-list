import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import GithubLogo from "./GitHub-Mark-64px.png";

const useStyle = makeStyles(theme => ({
  footer: {
    width: "100%",
    height: "20em",
    marginTop: "2em",
    backgroundColor: "#eee",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    paddingTop: "2em"
  },
  githubLogo: {
    height: "2em",
    width: "auto"
  }
}));

export function Footer() {
  const classes = useStyle();

  return (
    <div className={classes.footer}>
      <Button
        href="https://github.com/christinesn/todo-list"
        title="Github Repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={GithubLogo}
          className={classes.githubLogo}
          alt="Github Logo"
        />
      </Button>
    </div>
  );
}
