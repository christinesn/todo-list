import React from "react";
import { makeStyles } from "@material-ui/styles";
import { InputBase, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: "1.5em"
  },
  input: {
    padding: "0.5em 1em",
    fontSize: "1.1em",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: 0,
    "&:hover": {
      border: "1px solid rgba(0, 0, 0, 0.4)"
    },
    "&$focused": {
      outline: "5px solid #aed0f5"
    },
    "&:active": {
      outline: "5px solid #aed0f5"
    }
  },
  button: {
    height: "100%",
    verticalAlign: "middle",
    backgroundColor: "#037bfc",
    borderRadius: 0,
    boxSizing: "border-box",
    color: "white",
    fontSize: "1.2em",
    textTransform: "none",
    margin: "auto",
    display: "block",
    "&:hover": {
      backgroundColor: "#135ba8"
    },
    "&:focus": {
      outline: "5px solid #aed0f5 !important"
    }
  },
  focused: {}
}));

export function CreateTodo({ todos, setTodos }) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;

    const newID = todos.length === 0 ? 1 : todos.slice(-1)[0].id + 1;

    setTodos(
      todos.concat({
        id: newID,
        todo: value
      })
    );
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container justify="space-between" spacing={2}>
        <Grid item xs={10}>
          <InputBase
            value={value}
            onChange={e => setValue(e.target.value)}
            fullWidth
            classes={{
              root: classes.input,
              focused: classes.focused
            }}
            placeholder="Add new task"
          />
        </Grid>
        <Grid item xs>
          <Button type="submit" className={classes.button} fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
