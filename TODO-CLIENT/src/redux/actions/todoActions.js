import {
  GET_ALL_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "redux/action_types";
import axios from "axios";

export const getAllTodos = () => async (dispatch) => {
  const todoList = await axios.get("/todo");
  dispatch({
    type: GET_ALL_TODOS,
    payload: todoList.data,
  });
};

export const addTodo = (newTodo) => {
  return { type: ADD_TODO, payload: newTodo };
};

export const editTodo = (todoId, newTodoDetails) => {
  return { type: EDIT_TODO, payload: { todoId, newTodoDetails } };
};

export const deleteTodo = (todoId) => {
  return { type: DELETE_TODO, payload: { todoId } };
};
