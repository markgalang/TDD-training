import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "redux/reducers/todoReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  TodoList: TodoReducer,
});

// const Store = createStore(reducers,initialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const Store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default Store;
