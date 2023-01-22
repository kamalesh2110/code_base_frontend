import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (username.length > 0 && password.length > 0) {
      axios
        .post("http://localhost:3001/data", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Login
      </button>
    </div>
  );
}
