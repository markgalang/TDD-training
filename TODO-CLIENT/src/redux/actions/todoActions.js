import { GET_ALL_TODOS } from "redux/action_types";
import axios from "axios";

export const getAllTodos = () => async (dispatch) => {
  const todoList = await axios.get("/todo");
  dispatch({
    type: GET_ALL_TODOS,
    payload: todoList.data,
  });
};

export const addTodo = (newTodo) => async (dispatch) => {
  await axios.post("/todo", { title: newTodo });
  dispatch(getAllTodos());
};

export const editTodo = (todoId, newTodoDetails) => async (dispatch) => {
  await axios.put(`/todo/${todoId}`, { title: newTodoDetails });
  dispatch(getAllTodos());
};

export const deleteTodo = (todoId) => async (dispatch) => {
  await axios.delete(`/todo/${todoId}`);
  dispatch(getAllTodos());
};

export const toggleCompletion = (todoId) => async (dispatch) => {
  await axios.put(`/todo/${todoId}/complete`);
  dispatch(getAllTodos());
};
