import React from "react";
import "../App.css";

export default function InsertCode() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input type="text" placeholder="Code Title"></input>
      <input type="text" placeholder="Code Description"></input>
      <input type="text" placeholder="Code Author"></input>
      <input type="text" placeholder="Code Language"></input>
      <input type="text" placeholder="Code Difficulty"></input>
      <input type="mail" placeholder="Email"></input>
      <textarea
        rows="9"
        cols="60"
        name="description"
        placeholder="enter code"
      ></textarea>
    </div>
  );
}
