import {
  GET_ALL_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "redux/action_types";
// import axios from "axios";

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return [...state, ...action.payload];
    case ADD_TODO:
      return [...state];
    case EDIT_TODO:
      return [...state];
    case DELETE_TODO:
      return [...state];
    default:
      return [...state];
  }
}
