import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Login />
    </BrowserRouter>
  );
}

export default App;
