import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import "styles/main.scss";
import StateProvider from "redux/provider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
