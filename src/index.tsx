import React from "react";
import ReactDOM from "react-dom";
/* redux imports */
import { Provider } from "react-redux";
import configureStore from "./redux/store";
/* react router */
import { BrowserRouter } from "react-router-dom";
/* antd css */
import "antd/dist/antd.css";
/* react bootstrap css */
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
/* importing global stylesheet */
import "./assets/styles/global.css";
import AppWrapper from "./AppWrapper";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
