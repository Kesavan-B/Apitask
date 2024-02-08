import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoadingContext, {
  useProgressBar,
} from "./components/context/LoadingContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingContext>
      <BrowserRouter>
        <App />
        
      </BrowserRouter>
    </LoadingContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
