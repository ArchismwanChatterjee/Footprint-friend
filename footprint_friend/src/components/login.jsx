import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./login.css"; // Import the CSS file

export default function Login({ setLoggedIn, setUsername }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function validateForm() {
    return user.length > 0 && pass.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Create request body
    var requestBody = JSON.stringify({
      username: user,
      password: pass,
      operator: 0,
    });

    // Create request options
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: requestBody,
      redirect: "follow",
    };

    // Make API call
    fetch(
      "https://jzem48bv4g.execute-api.ap-south-1.amazonaws.com/dev/login_regis",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const responseBody = JSON.parse(result).body;
        if (responseBody) {
          console.log("Redirecting to home.html");
          localStorage.setItem("name", user);
          var user11 = localStorage.getItem("name");
          console.log(user11);
          setLoggedIn(true); // Set login state to true
          setUsername(user); // Set the username
        } else {
          console.log("Login failed.");
          alert("Username or password is wrong");
        }
      })
      .catch((error) => console.log("error", error));
  }

  const containerStyle = {
    backgroundColor: "#212529", // Change this to the color of your choice
    borderRadius: "10px",
    width: 420,
    opacity: 0.8,
    height: 300,
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="d-flex flex-column align-items-center">
        <Link to="/register" className="btn btn-primary">
          Haven't Signed up yet?
        </Link>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label className="text-white">Username</Form.Label>
            <div className="input-container">
              <Form.Control
                autoFocus
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                style={{ width: "250px" }}
              />
            </div>
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label className="text-white">Password</Form.Label>
            <div className="input-container">
              <Form.Control
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                style={{ width: "250px" }}
              />
            </div>
          </Form.Group>

          <Button
            className="my-3"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
