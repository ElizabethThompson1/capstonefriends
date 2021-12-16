import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.post("http://localhost:5000/api/users/login", {
      username: username,
      password: password,
    });
    console.log(response.data);
    // Save token in local storage and refresh page
    localStorage.setItem("token", response.data);
    window.location = "/";
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col"><h3>Login</h3></div>
        <div>
          <div className="card text-white bg-dark" style={{ width: "18rem" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group" size="lg" controlId="email">
                  <label className="form-label">username</label>
                  <input
                    autoFocus
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <div className="form-group" size="lg" controlId="password">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-secondary" type="submit">
                    <h3>Login</h3>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

