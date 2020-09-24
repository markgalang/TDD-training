import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "redux/reducers/todoReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  Todo: TodoReducer,
});

// const Store = createStore(reducers,initialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const Store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default Store;
