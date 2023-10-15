/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Login from "./components/login";
import Register from "./components/register";
import Graphs from "./components/Graphs";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route
          path="Calculator"
          element={
            <>{loggedIn ? <Input /> : <Login setLoggedIn={setLoggedIn} />}</>
          }
        />

        <Route
          path=""
          element={
            <>
              {loggedIn ? (
                <Home />
              ) : (
                <Login setLoggedIn={setLoggedIn} setUser={setUser} />
              )}
            </>
          }
        />

        <Route
          path="login"
          element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />}
        />
        <Route path="register" element={<Register />} />
        <Route
          path="insights"
          element={
            <>{loggedIn ? <Graphs /> : <Login setLoggedIn={setLoggedIn} />}</>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
