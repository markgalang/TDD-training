import React, { useState } from "react";
import Todo from "./Todo";
import TextField from "@material-ui/core/TextField";
import { CornerDownLeft } from "react-feather";

export default function TodoMenu() {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTodo);
    setNewTodo("");
  };
  return (
    <div className="todo-menu">
      <div className="todo-menu__header">
        <h1 className="todo-menu__heading">Todo List</h1>
        <form className="todo-menu__todo-form" onSubmit={handleSubmit}>
          <TextField
            name="newTodo"
            className="todo-menu__todo-input"
            value={newTodo}
            placeholder="Add New Task here"
            onChange={handleChange}
          />
          <button className="todo-menu__submit-button">
            <CornerDownLeft />
          </button>
        </form>
      </div>

      <div className="todo-menu__items">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}
