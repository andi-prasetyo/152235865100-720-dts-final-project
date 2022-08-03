import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatch from "./container/NoMatch";
import Login from "./container/Login";
import Register from "./container/Register";
import ProtectedRoute from './components/ProtectedRoute';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>} />
        <Route path="login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>} />
        <Route path="register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
