import todoReducer from "redux/reducers/todoReducer";
import {
  ADD_TODO,
  GET_ALL_TODOS,
  EDIT_TODO,
  DELETE_TODO,
} from "redux/action_types.js";

let action;
let newState;
let initialState;

describe("reducers behavior", () => {
  beforeEach(() => {
    initialState = [
      { _id: 1, title: "TODO1" },
      { _id: 2, title: "TODO2" },
      { _id: 3, title: "TODO3" },
      { _id: 4, title: "TODO4" },
      { _id: 5, title: "TODO5" },
      { _id: 6, title: "TODO6" },
    ];
  });
  it("gets all todos", () => {
    action = { type: GET_ALL_TODOS, payload: initialState };
    newState = todoReducer([], action);

    expect(newState.length).toBe(initialState.length);
    expect(newState).toEqual(initialState);
  });

  it("adds new todo to reducers", () => {
    action = { type: ADD_TODO, payload: "New Todo 123" };

    newState = todoReducer([], action);
    expect(newState).toEqual(["New Todo 123"]);
  });

  it("edit todo info", () => {
    const todoId = 5;
    const updatedTodoDetails = { id: todoId, title: "UPDATED TODO ITEM!" };

    action = { type: EDIT_TODO, payload: { todoId, updatedTodoDetails } };

    newState = todoReducer(initialState, action);
    expect(newState[todoId - 1]).toEqual(updatedTodoDetails);
  });

  it("deletes todo info", () => {
    const todoIdToDelete = 5;

    action = { type: DELETE_TODO, payload: { todoIdToDelete } };

    newState = todoReducer(initialState, action);
    const expectedNewState = initialState.filter(
      (todo) => todo._id !== todoIdToDelete
    );
    expect(newState.length).toBe(expectedNewState.length);
    expect(newState).toEqual(expectedNewState);
  });
});
