import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Forum from "./Forum";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Forum />
  </BrowserRouter>,
  document.getElementById("root")
);
