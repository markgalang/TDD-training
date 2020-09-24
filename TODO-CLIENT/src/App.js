import React from "react";
import TodoMenu from "components/TodoMenu";
import axios from "axios";

export default function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

  return (
    <div className="App">
      <TodoMenu />
    </div>
  );
}
