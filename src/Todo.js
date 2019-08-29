import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Checkbox, Button, FormControlLabel } from "@material-ui/core";
import classnames from "classnames";
import { RemoveIcon } from "./RemoveIcon";

const useStyles = makeStyles({
  container: {
    padding: "0.25em",
    paddingTop: "1em",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  todo: {
    fontSize: "1.2em !important",
    color: "rgba(0, 0, 0, 0.8)"
  },
  done: {
    color: "rgba(0, 0, 0, 0.4)",
    textDecoration: "line-through"
  },
  remove: {
    borderRadius: 24,
    padding: "0.25em",
    minWidth: 0,
    marginLeft: "auto",
    marginRight: 0,
    display: "block",
    marginTop: "0.5em",
    lineHeight: 1
  }
});

export function Todo({ todo, allTodos, setTodos }) {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  function handleRemove() {
    const newTodos = allTodos.filter(t => t.id !== todo.id);
    setTodos(newTodos);
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={10}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setChecked(!checked)}
              value={checked}
              data-testid="checkbox"
            />
          }
          label={todo.todo}
          classes={{
            label: classnames(classes.todo, { [classes.done]: checked })
          }}
        />
      </Grid>
      <Grid item xs>
        <Button
          title="Delete task"
          onClick={handleRemove}
          className={classes.remove}
        >
          <RemoveIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
