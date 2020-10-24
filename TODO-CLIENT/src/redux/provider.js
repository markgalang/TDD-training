import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise" 
import TodoReducer from "redux/reducers/todoReducer";

// import store from "redux/store";

// const provider = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// export default provider;

const provider = (props) => {
  const initialState = props.initialState || {};

  const middleware = [thunk, reduxPromise];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducers = combineReducers({
    TodoList: TodoReducer,
  });
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
      )}
    >
      {props.children}
    </Provider>
  );
};

export default provider;
