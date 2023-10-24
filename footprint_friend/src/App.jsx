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

  function logout(params) {
    setUser("");
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        // setLoggedIn={setLoggedIn}
        user={user}
        // setUser={setUser}
        logout={logout}
      />
      <Routes>
        <Route
          path="Calculator"
          element={
             <>{loggedIn ? <Input user={user}/> : <Login setLoggedIn={(bool)=>{setLoggedIn(bool)}} setUsername={(string)=>{setUser(string)}} />}</>
          }
        />

        <Route
          path=""
          element={
            <>
              {loggedIn ? (
                <Home />
              ) : (
                <Login setLoggedIn={(bool)=>{setLoggedIn(bool)}} setUsername={(string)=>{setUser(string)}} />)}
            </>
          }
        />

        <Route
          path="login"
          element={<Login setLoggedIn={(bool)=>{setLoggedIn(bool)}} setUsername={(string)=>{setUser(string)}} />}
        />
        <Route path="register" element={<Register />} />
        <Route
          path="insights"
          element={
            <>{loggedIn ? <Graphs /> : <Login setLoggedIn={(bool)=>{setLoggedIn(bool)}} setUsername={(string)=>{setUser(string)}} />}</>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
