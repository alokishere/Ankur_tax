import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Mainroutes from "./Mainroutes";
import { CustomCursor, Header, LoadingScreen } from "./components";
import WhatsApp from "./components/WhatsApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingScreen />
      <CustomCursor />
      <WhatsApp />
      <Header />
      <Mainroutes />
    </BrowserRouter>
  </React.StrictMode>,
);
