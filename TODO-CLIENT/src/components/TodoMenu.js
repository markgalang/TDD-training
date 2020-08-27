import React, { useState } from "react";
import Todo from "./Todo";
import TextField from "@material-ui/core/TextField";
import { Plus } from "react-feather";

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
    <div className="todo-menu debugger">
      <h1>TODO MENU</h1>
      <form className="todo-menu__todo-input" onSubmit={handleSubmit}>
        <TextField name="newTodo" value={newTodo} onChange={handleChange} />
        <button className="todo-menu__submit-button">
          <Plus />
        </button>
      </form>

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
