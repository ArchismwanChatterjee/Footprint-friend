/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <iframe width="710" height="1300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe> */}
        <Route path="Calculator" element={<Input />} />

        <Route
          path=""
          element={
            <>
              <Home />
              <Chatbot />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
