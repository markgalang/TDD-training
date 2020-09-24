import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "redux/reducers/todoReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  TodoList: TodoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
// const Store = createStore(
//   reducers,
//   initialState,
//   applyMiddleware(...middleware)
// );

export default Store;
