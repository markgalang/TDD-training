import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import TextField from "@material-ui/core/TextField";
import { CornerDownLeft } from "react-feather";

export default function TodoMenu() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    try {
      const todoItems = await axios.get("/todo");
      setTodoList(todoItems.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/todo", { name: newTodo });
      getAllTodos();
    } catch (err) {
      console.log(err);
    }

    setNewTodo("");
  };

  const TodoListMarkup =
    todoList.length > 0 ? (
      todoList.map((todo, index) => <Todo key={index} todoDetails={todo} />)
    ) : (
      <em>You have no task todo.</em>
    );
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

      <div className="todo-menu__items">{TodoListMarkup}</div>
    </div>
  );
}
