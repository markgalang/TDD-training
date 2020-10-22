import todoReducer from "redux/reducers/todoReducer";
import { ADD_TODO, GET_ALL_TODOS } from "redux/action_types.js";

let action;
let newState;

it("gets all todos", () => {
  const mockState = ["TODO1", "TODO2", "TODO3", "TODO4"];

  action = { type: GET_ALL_TODOS, payload: mockState };
  newState = todoReducer([], action);

  expect(newState.length).toBe(mockState.length);
  expect(newState).toEqual(mockState);
});

it("adds new todo to reducers", () => {
  action = { type: ADD_TODO, payload: "New Todo 123" };

  newState = todoReducer([], action);
  expect(newState).toEqual(["New Todo 123"]);
});
