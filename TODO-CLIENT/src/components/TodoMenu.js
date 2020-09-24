import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "components/Todo";
import TextField from "@material-ui/core/TextField";
import { CornerDownLeft } from "react-feather";
import DeleteModal from "components/DeleteModal";

export default function TodoMenu() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todoDetails, setTodoDetails] = useState({});

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
      await axios.post("/todo", { title: newTodo });
      getAllTodos();
    } catch (err) {
      console.log(err);
    }

    setNewTodo("");
  };

  const handleModalHide = () => {
    setShowDeleteModal(false);
    getAllTodos();
  };

  const handleOpenDeleteModal = (todoDetails) => {
    setTodoDetails(todoDetails);
    setShowDeleteModal(true);
  };

  const TodoListMarkup =
    todoList.length > 0 ? (
      todoList.map((todo, index) => (
        <Todo
          key={index}
          todoDetails={todo}
          getAllTodos={getAllTodos}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      ))
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

      <DeleteModal
        open={showDeleteModal}
        onClose={handleModalHide}
        todoDetails={todoDetails}
        getAllTodos={getAllTodos}
      />
    </div>
  );
}
