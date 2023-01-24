import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "../App.css";

export default function InsertCode() {
  const [codetitle, setCodetitle] = useState("");
  const [codedescription, setCodedescription] = useState("");
  const [codebody, setCodebody] = useState();
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
    if (
      code.code_title.length === 0 ||
      code.code_description.length === 0 ||
      code.code_body.length === 0 ||
      code.code_author.length === 0 ||
      code.code_date === 0 ||
      code.code_language === 0 ||
      code.code_difficult === 0 ||
      code.author_email === 0
    ) {
      alert("Please enter correct code");
    } else {
      axios
        .post("https://wicked-scarf-slug.cyclic.app/insert", code)
        .then((response) => {
          if (response.status === 200) {
            setCodetitle("");
            setAuthoremail("");
            setCodeauthor("");
            setCodebody("");
            setCodedescription("");
            setCodelanguage("");
            setCodedifficult("");
            alert("Data saved successfully");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        value={codetitle}
        onChange={(e) => {
          setCodetitle(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Description"
        value={codedescription}
        onChange={(e) => {
          setCodedescription(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Author"
        value={codeauthor}
        onChange={(e) => {
          setCodeauthor(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Language"
        value={codelanguage}
        onChange={(e) => {
          setCodelanguage(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Code Difficulty"
        value={codedifficult}
        onChange={(e) => {
          setCodedifficult(e.target.value);
        }}
      ></input>
      <input
        type="mail"
        placeholder="Email"
        value={authoremail}
        onChange={(e) => {
          setAuthoremail(e.target.value);
        }}
      ></input>
      <textarea
        rows="9"
        cols="60"
        name="description"
        placeholder="enter code"
        value={codebody}
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
