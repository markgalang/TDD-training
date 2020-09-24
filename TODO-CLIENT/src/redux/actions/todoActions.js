import {
  GET_ALL_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "redux/action_types";
import axios from "axios";

const getAllTodos = () => {
  const todoList = axios.get("/todo");

  return {
    type: GET_ALL_TODOS,
    payload: todoList,
  };
};

const addTodo = (newTodo) => {
  return { type: ADD_TODO, payload: newTodo };
};

const editTodo = (todoId, newTodoDetails) => {
  return { type: EDIT_TODO, payload: { todoId, newTodoDetails } };
};

const deleteTodo = (todoId) => {
  return { type: DELETE_TODO, payload: { todoId } };
};

module.exports = { getAllTodos, addTodo, editTodo, deleteTodo };
