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

export const addTodo = (newTodo) => async (dispatch) => {
  const newlyCreatedTodo = await axios.post("/todo", { title: newTodo });
  dispatch({ type: ADD_TODO, payload: newlyCreatedTodo.data });
};

export const editTodo = (todoId, newTodoDetails) => async (dispatch) => {
  const updatedTodoDetails = await axios.put(`/todo/${todoId}`, {
    title: newTodoDetails,
  });
  dispatch({
    type: EDIT_TODO,
    payload: { todoId, updatedTodoDetails: updatedTodoDetails.data },
  });
};

export const deleteTodo = (todoId) => async (dispatch) => {
  await axios.delete(`/todo/${todoId}`);
  dispatch({ type: DELETE_TODO, payload: { todoIdToDelete: todoId } });
};

export const toggleCompletion = (todoId) => async (dispatch) => {
  await axios.put(`/todo/${todoId}/complete`);
  dispatch(getAllTodos());
};
