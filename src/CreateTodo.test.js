import React from "react";
import { CreateTodo } from "./CreateTodo";
import { render, fireEvent } from "@testing-library/react";
import sinon from "sinon";

describe("When the user submits the form", () => {
  it("Adds a todo to the list", () => {
    const setTodos = sinon.spy();
    const { getByPlaceholderText, getByText } = render(
      <CreateTodo
        todos={[
          {
            id: 1,
            todo: "Make dinner"
          }
        ]}
        setTodos={setTodos}
      />
    );

    fireEvent.change(getByPlaceholderText("Create a new task"), {
      target: { value: "todo" }
    });
    fireEvent.click(getByText("Add").closest("button"));

    expect(
      setTodos.calledWith([
        {
          id: 1,
          todo: "Make dinner"
        },
        {
          id: 2,
          todo: "todo"
        }
      ])
    ).toBe(true);
  });
});

describe("When there are no todos", () => {
  it("Adds a todo with an ID of 1", () => {
    const setTodos = sinon.spy();
    const { getByPlaceholderText, getByText } = render(
      <CreateTodo todos={[]} setTodos={setTodos} />
    );

    fireEvent.change(getByPlaceholderText("Create a new task"), {
      target: { value: "todo" }
    });
    fireEvent.click(getByText("Add").closest("button"));

    expect(
      setTodos.calledWith([
        {
          id: 1,
          todo: "todo"
        }
      ])
    ).toBe(true);
  });
});

describe("When the input is empty", () => {
  it("Doesn't add anything to the todo list", () => {
    const setTodos = sinon.spy();
    const { getByPlaceholderText, getByText } = render(
      <CreateTodo todos={[]} setTodos={setTodos} />
    );

    fireEvent.change(getByPlaceholderText("Create a new task"), {
      target: { value: "" }
    });
    fireEvent.click(getByText("Add").closest("button"));

    expect(setTodos.called).toBe(false);
  });
});
