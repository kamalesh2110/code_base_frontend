import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "../App.css";

export default function InsertCode() {
  const [codetitle, setCodetitle] = useState("");
  const [codedescription, setCodedescription] = useState("");
  const [codebody, setCodebody] = useState("");
  const [codeauthor, setCodeauthor] = useState("");
  const [codedifficult, setCodedifficult] = useState("");
  const [authoremail, setAuthoremail] = useState("");
  const [codelanguage, setCodelanguage] = useState("");

  const dataHandler = (e) => {
    const code = {
      code_title: codetitle,
      code_description: codedescription,
      code_body: codebody,
      code_author: codeauthor,
      code_date: moment().format("YYYY-MM-DD"),
      code_language: codelanguage,
      code_difficult: codedifficult,
      author_email: authoremail,
    };

    const code_json = JSON.stringify(code);

    axios
      .post("https://wicked-scarf-slug.cyclic.app/insert", code)
      .then((response) => {
        console.log(response).catch((error) => {
          console.log(error);
        });
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Code Title"
        onChange={(e) => {
          setCodetitle(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Description"
        onChange={(e) => {
          setCodedescription(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Author"
        onChange={(e) => {
          setCodeauthor(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Language"
        onChange={(e) => {
          setCodelanguage(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Difficulty"
        onChange={(e) => {
          setCodedifficult(e.target.value);
        }}
      ></input>
      <input
        type="mail"
        placeholder="Email"
        onChange={(e) => {
          setAuthoremail(e.target.value);
        }}
      ></input>
      <textarea
        rows="9"
        cols="60"
        name="description"
        placeholder="enter code"
        onChange={(e) => {
          setCodebody(e.target.value);
        }}
      ></textarea>
      <button
        style={{
          borderRadius: ".5rem",
        }}
        onClick={(e) => {
          dataHandler(e);
        }}
      >
        Insert
      </button>
    </div>
  );
}
