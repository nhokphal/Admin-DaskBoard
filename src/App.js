import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { List } from "./Pages/List/List";
import { Single } from "./Pages/Single/Single";
import { New } from "./Pages/New/New";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userID" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productID" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
