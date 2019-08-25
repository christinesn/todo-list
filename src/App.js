import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";

function App() {
  const classes = makeStyles({
    "@global": {
      html: {
        fontSize: 14
      },
      body: {
        margin: 0,
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(",")
      },
      a: {
        color: "#037bfc",
        textDecoration: "none",
        "&:hover": {
          color: "#aed0f5"
        }
      }
    },
    title: {
      fontFamily: "Lobster",
      fontSize: "5em",
      color: "#037bfc",
      textShadow: "4px -4px 0 #aed0f5",
      textAlign: "center",
      paddingTop: "2rem"
    },
    todos: {
      marginTop: "1em",
      marginBottom: "10em"
    },
    header: {
      margin: 0,
      marginBottom: "1em",
      width: "100%",
      fontSize: "0.9em",
      padding: "0.5em 1em"
    },
    githubLink: {
      textAlign: "right"
    }
  })();

  const [todos, setTodos] = React.useState([
    { id: 1, todo: "Make dinner" },
    { id: 2, todo: "Check mailbox" },
    { id: 3, todo: "Take the dog for a walk" }
  ]);

  return (
    <div>
      <Grid container justify="space-between" className={classes.header}>
        <Grid item xs>
          made by{" "}
          <a
            href="https://christine.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            christine
          </a>
        </Grid>
        <Grid item xs className={classes.githubLink}>
          <a
            href="https://github.com/christinesn/todo-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item container xs={12} sm={8} md={6}>
          <Grid item xs={12}>
            <Typography className={classes.title}>To do</Typography>
          </Grid>
          <Grid item xs={12}>
            <CreateTodo todos={todos} setTodos={setTodos} />
            <div className={classes.todos}>
              {todos.map(todo => (
                <Todo
                  todo={todo}
                  allTodos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
