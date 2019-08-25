import React from "react";
import { Todo } from "./Todo";
import { render, fireEvent } from "@testing-library/react";
import sinon from "sinon";

it("Checks off completed tasks", () => {
  const { getByLabelText } = render(
    <Todo
      todo={{ id: 1, todo: "todo" }}
      allTodos={[{ id: 1, todo: "todo" }]}
      setTodos={() => {}}
    />
  );

  const checkbox = getByLabelText("todo");

  fireEvent.click(checkbox);

  expect(checkbox.value).toBe("true");
});

it("Removes items from the todo list", () => {
  const setTodos = sinon.spy();

  const { getByTitle } = render(
    <Todo
      todo={{ id: 1, todo: "todo" }}
      allTodos={[{ id: 1, todo: "todo" }]}
      setTodos={setTodos}
    />
  );

  fireEvent.click(getByTitle("Delete task"));

  expect(setTodos.calledWith([])).toBe(true);
});
