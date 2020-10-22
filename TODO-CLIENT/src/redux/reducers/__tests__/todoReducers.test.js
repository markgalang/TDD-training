import todoReducer from "../todoReducer";
import { ADD_TODO } from "redux/action_types.js";

let action;
let newState;
it("adds new comment to reducers", () => {
  action = { type: ADD_TODO, payload: "New Todo 123" };

  newState = todoReducer([], action);
  expect(newState).toEqual(["New Todo 123"]);
});
