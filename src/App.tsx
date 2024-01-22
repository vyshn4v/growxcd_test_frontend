import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
