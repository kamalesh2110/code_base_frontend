import React, { useState } from "react";
import "../App.css";

export default function InsertCode() {
  const [codetitle, setCodetitle] = useState("");
  const [codedescription, setCodedescription] = useState("");
  const [codebody, setCodebody] = useState("");
  const [codeauthor, setCodeauthor] = useState("");
  const [codedifficult, setCodedifficult] = useState("");
  const [authoremail, setAuthoremail] = useState("");
  const [codelanguage, setCodelanguage] = useState("");
  const [codedate, setCodedate] = useState("");

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
