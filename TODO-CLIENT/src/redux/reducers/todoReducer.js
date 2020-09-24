import { GET_ALL_TODOS } from "redux/action_types";

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return [...action.payload];
    default:
      return [...state];
  }
}
