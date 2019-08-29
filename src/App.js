import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const useStyle = makeStyles({
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
  container: {
    margin: "auto",
    marginTop: "12em",
    marginBottom: "12em"
  }
});

function App() {
  const classes = useStyle();

  const [todos, setTodos] = React.useState([
    { id: 1, todo: "Make dinner" },
    { id: 2, todo: "Check mailbox" },
    { id: 3, todo: "Take the dog for a walk" }
  ]);

  return (
    <React.Fragment>
      <Navbar />
      <Grid item xs={12} sm={10} md={8} lg={6} className={classes.container}>
        <CreateTodo todos={todos} setTodos={setTodos} />
        {todos.map(todo => (
          <Todo
            todo={todo}
            allTodos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
