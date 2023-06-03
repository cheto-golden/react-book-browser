import logo from './logo.svg';
import './App.css';
import { Header } from "components/Header";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes/router";

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
