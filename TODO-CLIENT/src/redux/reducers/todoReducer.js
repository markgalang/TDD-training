import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_ALL_TODOS,
} from "redux/action_types";

export default function (state = [], action) {
  let newTodolist = [...state];

  switch (action.type) {
    case GET_ALL_TODOS:
      return [...action.payload];

    case ADD_TODO:
      return [action.payload, ...state];

    case EDIT_TODO:
      const { todoId, updatedTodoDetails } = action.payload;
      const editTodoIndex = newTodolist.findIndex(
        (todo) => todo._id === todoId
      );
      newTodolist.splice(editTodoIndex, 1, updatedTodoDetails);
      return [...newTodolist];

    case DELETE_TODO:
      const { todoIdToDelete } = action.payload;
      const deleteTodoIndex = newTodolist.findIndex(
        (todo) => todo._id === todoIdToDelete
      );
      newTodolist.splice(deleteTodoIndex, 1);
      return [...newTodolist];

    default:
      return [...state];
  }
}
