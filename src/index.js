import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const basename =
  process.env.NODE_ENV === "production" ? "/react-for-beginners" : "/";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("NODE_ENV - ", process.env.NODE_ENV);
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
